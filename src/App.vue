<template>
  <div id="main">
    <div id="left-column">
        <div v-if="all_folder.length==0">
            <p>You have not folders</p>
        </div> 

        <div>
            <button @click="AddNewFolder()" type="button" class="btn btn-outline-primary">+create new folder</button>
        </div>
            
            <!-- <new-folder>

            </new-folder> -->
        <div v-if="visibleForm === 1">  
            <UnvisibleForm @addFolder="addCreatedFolder"/>
        </div>

        <div v-if="all_folder.length!== 0" @click="choseFolder()">
            <div 
            v-for="folder in all_folder"
            :key=folder.idr
            ><button v-bind:id="folder.color+1">{{ folder.name }}</button>
        </div>
    </div>
        <div id="right-column">
            <h1>{{ choose_folder_name }}</h1>
            <div v-if="all_tasks.length==0">
                <p>You have not tasks</p>
            </div> 
            <div><button id="createTask" @click="AddNewTask()">+ new task</button></div>
            <div v-if="visibleTaskForm === 1">  
                <createTaskForm @addTask="addCreatedTask"/>
            </div>
            <div id="showTasks" v-if="all_tasks!==0">
                <div v-for="task in all_tasks"
                :key="task.id"> 
                    <button >{{ task.name }}</button>

                </div>
            </div>

        </div>
    </div>
  </div>
</template>

<script>
import UnvisibleForm from './components/unvisibleForm.vue'
import createTaskForm from './components/createTaskForm.vue';
export default {
    name: 'App',
    components: {
        UnvisibleForm, createTaskForm
    },
    data: function(){
        return{
            all_folder: [
                // {
                //     name: 'Buy',
                //     color: 'redBut',
                //     id: 0
                // },

            ],
            all_tasks:[
                {
                    name:'create', 
                    status: 1, 
                    folder: '',
                }
            ],
            visibleForm:0,
            visibleTaskForm:0
        }
    },
    methods: {
        AddNewFolder(){
            console.log(this.all_folder);
            this.visibleForm = 1


        },
        addCreatedFolder(new_folder){
            this.visibleForm = 0
            this.new_folder.id = this.all_folder.length
            this.all_folder.push(new_folder)
            console.log(this.all_folder)        
        },
        AddNewTask(new_task){
            new_task.folder = this.choose_folder_name
            this.visibleTaskForm = 1
        },
        addCreatedTask(new_task){
            console.log(new_task)
            this.all_tasks.push(new_task)
        },
        choseFolder(){
            const choose_folder_name = this.all_folder.folder.name
            console.log(choose_folder_name)
        },
        async getTasks(){
            try{
                const response = await this.$axios.get('/folder/show')
                console.log(response.data)
            }
            catch(error){
                console.log("ERROR")
            }
            
        }
    },
    async created(){
        await this.getTasks()
        }
}
</script>

<style>
#main{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
}
 #left-column{
	width:20vw;
	height:100vh;
	display:flex;
	flex-direction:column;
	align-items: flex-start;
	justify-content: flex-start;
	box-sizing: border-box;
	/* padding-left:25px; */
	padding-right:10px;
	background-color:#81ff96;
	padding-top:100px;
    font-family: 'IBM Plex Sans', sans-serif;
 }
 #right-column{
    width:80vw;
	height:100vh;
	display:flex;
	flex-direction:column;
	align-items: flex-start;
	justify-content: flex-start;
	box-sizing: border-box;
    margin-left: 20vw;
    margin-top: 0;
	padding-left:25px;
	padding-right:10px;
	background-color:#beffc9;
    font-family: 'IBM Plex Sans', sans-serif;
 }
#butFolder{
    display: flex;
    text-align: center;
    font-family: 'IBM Plex Sans', sans-serif;
}
#redBut1{
      /* background-color: rgb(247, 63, 63); */
      width: 20vw;
      height: 10vh;
      padding-left: 0px;
      margin: 1px 0; 
      cursor: pointer;
      text-align: center;
      font-family: cursive;
      color: rgb(247, 63, 63);
      border: 3px solid rgb(247, 63, 63);
      
}
#yelBut1{
      color: rgb(247, 222, 83);
      border: 3px solid rgb(247, 222, 83);
      width: 20vw;
      height: 10vh;
      margin: 1px 0;
      cursor: pointer;
      text-align: center;
      font-family: cursive;
}
#greBut1{
      color: rgb(111, 240, 128);
      border: 3px solid rgb(111, 240, 128);
      width: 20vw;
      height: 10vh;
      padding-left: 0px;
      margin: 1px 0;
      cursor: pointer;
      text-align: center;
      font-family: cursive;
}
#bluBut1{
      color: rgb(63, 137, 247);
      border: 3px solid rgb(63, 137, 247);
      width: 20vw;
      height: 10vh;
      padding-left: 0px;
      margin: 1px 0;
      cursor: pointer;
      text-align: center;
      font-family: cursive;
}
#purBut1{
      color: rgb(165, 112, 250);
      border: 3px solid rgb(165, 112, 250);
      width: 20vw;
      height: 10vh;
      padding-left: 0px;
      margin: 1px 0;
      cursor: pointer;
      text-align: center;
      font-family: cursive;
}
#pinBut1{
      color: rgb(252, 121, 208);
      border: 3px solid rgb(252, 121, 208);
      width: 20vw;
      height: 10vh;
      padding-left: 0px;
      margin: 1px 0;
      cursor: pointer;
      text-align: center;
      font-family: cursive;
}

</style>