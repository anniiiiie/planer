<template>
  <div id="eee">
    <div v-if="all_folder.lenght === 0">
        <p>You have no tasks</p>
    </div>   
    <div>
        <button @click="AddNewFolder()">+ create new folder</button> 
        <button>{{ all_folder[id] }}</button>
    
    </div>
  </div>
</template>

<script>
import unvisibleFormVue from './unvisibleForm.vue'
export default {
    name: 'AllOfFolders',
    components: {
        unvisibleFormVue
    },
    data(){
        return[
            all_folder = [
                // {
                //     name: 'Buy',
                //     color: 'green',
                // }
            ],
            new_folder
        ]
    },
    methods: {
        AddNewFolder(){

        }
    }
    
}
</script>

<style>


</style>