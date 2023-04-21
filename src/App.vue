<template>
  <div>
      <div v-if="all_folder.lenght === 0">
        <p>You have no tasks</p>
    </div>   
    <div>
        <button @click="AddNewFolder()">+ create new folder</button> 
        <button>{{ all_folder[id] }}</button>
    
    </div>
    <div>
            <input id="NewFolder" placeholder="Name Folder">
            <div class="changeColor">Change color of folder
                  <div><input type="radio" id="redBut"><button id="yelBut"></button><button id="greBut"></button><button id="bluBut"></button><button id="purBut"></button><button id="pinBut"></button></div>
            </div>
            <button @click="Choose">Create</button>
      </div>
  </div>
</template>

<script>

export default {
    name: 'App',
    components: {
        // unvisibleFormVue
    },
    data(){
        return{
            all_folder: [
                // {
                //     name: 'Buy',
                //     color: 'green',
                // }
            ],
            new_folder: '',
        }
    },
    methods: {
        AddNewFolder(){

        }
    }
}
</script>

<style>

</style>