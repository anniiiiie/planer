// Импортируем библиотеку fastify для развертывания веб-сервера
const fastify = require('fastify')({
    logger: true // Эта штука нужна, чтобы в терминале отображались логи запросов
})
const Pool = require('pg-pool')
const pool = new Pool({
    database: 'postgres',
    user: 'postgres',
    password: '123456789',
    port: 5432,
    max: 20, // set pool max size to 20
    idleTimeoutMillis: 1000, // close idle clients after 1 second
    connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
    maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
  })

// Блок кода, который нужен для исправления ошибки с CORS
fastify.register(require('@fastify/cors'), (instance) => {
    return (req, callback) => {
        const corsOptions = {
            // This is NOT recommended for production as it enables reflection exploits
            origin: true
        };

        // do not include CORS headers for requests from localhost
        if (/^localhost$/m.test(req.headers.origin)) {
            corsOptions.origin = false
        }

        // callback expects two parameters: error and options
        callback(null, corsOptions)
    }
})

// Создание маршрута для get запроса
fastify.get('/',async function (request, reply) {
    let data = {
        message:'error'
    }    
    const client = await pool.connect()
    try{
        const users = await client.query(`select * from "Folders"`)

        
        data.message = users.rows
    }
    catch(e){
        console.log(e);
    }
    finally{
        await client.release()
    }
    reply.send(data)
})

// показ папок
// 
fastify.get('/folder/show', async function (request, reply){
    let data = {
        message: 'error',
        statusCode: 400
    }
    const UrlName = '/folder/show'
    const client = await pool.connect()
    try{
        if(folder.rows.length > 0){
            // const users = await client.query(`select * from "Folders"`)
            const folders = await client.query(`select "folder_id", "folder_name", "folder_color" from folders`) 
            // не можем обратиться к folders не блока трай кеч, поэтому => data.message = folders.rows 
            // тип в постмане совпадает с типом перед скобкой в начвале гет и гет, пост и пост и тд
            data.message = folders.rows
        }
        else{
            console.log('Таблица пустая')
        }
    }
    catch(e){
        console.log(e);
    }
    finally{
        await client.release()
    }
    reply.send(data)
})
//  создание папки через фронт 
// 
fastify.post('/folder/create',async function (request, reply){
    let data = {
        message: 'error',
        statusCode:400
    }
    const urlName = '/folder/create'
    const client = await pool.connect()
    try {
        const folder = await client.query(`INSERT INTO folders ("folder_name", "folder_color")
                                           VALUES ($1, $2) RETURNING "folder_id","folder_name","folder_color"`, [ request.body.folder_name, request.body.folder_color ]);
        if((folder.rowCount > 0) && (folder.rows.length > 0)){
            data.message = folder.rows[0]
            data.statusCode = 200
        }
        else{
            console.log(`Произошла ошибка при добавлении записи`);
        }
        console.log(folder);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        client.release()
        console.log(urlName,'client release()');
    }
    reply.send(data)
})

//
fastify.get('/folder/get', async function (request, reply) {
    let data = {
        message: 'error',
        statusCode: 400
    }
    const urlName = '/folder/get'
    const client = await pool.connect()
    try{
        const folders = await client.query(`insert into folders ("folder_name") values ($1, $2)` [request.body.folder_name, request.body.folder_color])
    }
    catch{}
    finally{
        await client.release()
    }

    console.log(`Тело запроса: `,JSON.stringify(request.body))
    reply.send(request.body)
})
// изменение имени папки
fastify.post('/folder/rename',async function(request,reply){
    let data = {
        message: 'error',
        statusCode:400
    }
    const urlName = '/folder/update'
    const client = await pool.connect()
    try {
        const folder = await client.query(`UPDATE folders
                                           SET "folderName"  = $1
                                             , "folderColor" = $3
                                           WHERE "folderId" = $2
                                           RETURNING *`, [ request.body.folderName, request.body.folderId, request.body.folderColor ]);
        console.log(folder);
        if(folder.rowCount > 0){
            data.message = folder.rows[0]
            data.statusCode = 200
        }
        else{
            console.log(`Произошла ошибка при обновлении записи`);
        }
        console.log(folder);
    }
    catch (e) {
        console.log(e);
    }
    finally {
        client.release()
        console.log(urlName,'client release()');
    }
    reply.send(data)
})



// Создание маршрута для post запроса
fastify.post('/post',function (request, reply) {
    console.log(`Тело запроса: `,JSON.stringify(request.body))
    reply.send(request.body)
})

// Создание запроса с использование path параметров
fastify.get('/:id',function (request, reply) {
    console.log(`Path параметры, переданные в запросе: `,JSON.stringify(request.params))
    reply.send(request.params)
})

// Создание запроса с использованием query параметров
fastify.get('/query',function (request, reply) {
    console.log(`Query параметры, переданные в запросе`, JSON.stringify(request.query))
    reply.send(request.query)
})

// Запускаем сервер на порту 3000(см в постмане)
fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})