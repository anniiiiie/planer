<template>
  <div>
      <div v-if="this.all_folder.lenght === 0">
        <p>You have no tasks</p>
    </div>   
    <div>
        <button @click="AddNewFolder()">+ create new folder</button> 
        <div v-for="(folder) in all_folders"
        :key=folder.id>
            <button >{{ folder.name }}</button>
        </div>
        
        <new-folder>

        </new-folder>
    <div v-if="visibleForm === 1">  
        <UnvisibleForm/>
        </div> 
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
                // {
                //     name: 'Buy',
                //     color: 'green',
                // }
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

</style>