<template>
  <div>
      <div v-if="this.all_folder.lenght === 0">
        <p>You have no tasks</p>
    </div>   
    <div>
        <button @click="AddNewFolder()">+ create new folder</button> 
        <button>{{ all_folder[id] }}</button>
        <new-folder v-on="$emit()">

        </new-folder>
        
    
    </div>
    
  </div>
</template>

<script>

export default {
    name: 'App',
    components: {
        unvisibleFormVue
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
            this.visibleForm = 1

        },
        chooseColor(id) {
            this.activeColor = id;
        },
        Choose(activeColor, NameFolder){
            this.new_folder = {
                name: NameFolder,
                color: activeColor
            }, 
            this.all_folder.push(this.new_folder)
            activeColor = 'redBut'
            this.NameFolder = ''
            
        }
    }
}
</script>

<style>

</style>