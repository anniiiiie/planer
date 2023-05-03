<template>
  <div>
      <div v-if="!all_folder.lenght">
        <p>You have not folders</p>
      </div> 

    <div>
        <button @click="AddNewFolder()">+ create new folder</button> 
    </div>

    <div v-for="(folder) in all_folder"
    :key=folder.id
    >
        <button v-bind:id="folder.color">{{ folder.name }}</button>
    </div>
        
        <!-- <new-folder>

        </new-folder> -->
    <div v-if="visibleForm === 1">  
        <UnvisibleForm @addFolder="addCreatedFolder"/>
    </div>

    <div v-if="all_folder.lenght !== 0">
        <div 
        v-for="folder in all_folder" 
        :key="folder.name"
        ></div>
    </div>
    
  </div>
</template>

<script>
import UnvisibleForm from './components/unvisibleForm.vue'

export default {
    name: 'App',
    components: {
        UnvisibleForm
    },
    data: function(){
        return{
            all_folder: [
                {
                    name: 'Buy',
                    color: 'redBut',
                },
                {
                    name: 'Buy',
                    color: 'greBut',
                }
            ],
            visibleForm:0
        }
    },
    methods: {
        AddNewFolder(all_folder){
            console.log(all_folder);
            this.visibleForm = 1

        },
        chooseColor(id) {
            this.activeColor = id;
        },
        addCreativeFolder(){

        }
        // Choose(activeColor, NameFolder){
        //     this.new_folder = {
        //         name: NameFolder,
        //         color: activeColor
        //     }, 
        //     this.all_folder.push(this.new_folder)
        //     activeColor = 'redBut'
        //     this.NameFolder = ''
            
        // }
    }
}
</script>

<style>
#butFolder{
    display: flex;
    text-align: center;
}
#redBut{
      /* background-color: rgb(247, 63, 63); */
      padding: 20px;
      margin: 4px 2px;
      cursor: pointer;
      text-align: center;
      color: rgb(247, 63, 63);
      border: 10px solid rgb(247, 63, 63);

}
#yelBut{
      background-color: rgb(247, 222, 83);
      border: none;
      padding: 20px;
      margin: 4px 2px;
      border-radius: 50%;
      cursor: pointer;
}
#greBut{
      background-color: rgb(111, 240, 128);
      border: none;
      padding: 20px;
      margin: 4px 2px;
      border-radius: 50%;
      cursor: pointer;
}
#bluBut{
      background-color: rgb(63, 137, 247);
      border: none;
      padding: 20px;
      margin: 4px 2px;
      border-radius: 50%;
      cursor: pointer;
}
#purBut{
      background-color: rgb(165, 112, 250);
      border: none;
      padding: 20px;
      margin: 4px 2px;
      border-radius: 50%;
      cursor: pointer;
}
#pinBut{
      background-color: rgb(252, 121, 208);
      border: none;
      padding: 20px;
      margin: 4px 2px;
      border-radius: 50%;
      cursor: pointer;
}

</style>