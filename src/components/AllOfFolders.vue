<template>
   <div id="eee">
    <!-- <div v-if="all_folder.lenght === 0">
        <p>You have no tasks</p>
    </div>   
    <div>
        <button @click="AddNewFolder()">+ create new folder</button> 
        <button>{{ all_folder[id] }}</button>
    
    </div> -->
  </div>
</template>

<script>
// import unvisibleFormVue from './unvisibleForm.vue'
// export default {
//     name: 'AllOfFolders',
//     components: {
//         unvisibleFormVue
//     },
//     data(){
//         return[
//             all_folder = [
//                 // {
//                 //     name: 'Buy',
//                 //     color: 'green',
//                 // }
//             ],
//             new_folder
//         ]
//     },
//     methods: {
//         AddNewFolder(){

//         }
//     }
    
// }
</script>
<style>
    .changeColor{
      display: flex;
      align-items: center;

}
#redBut{
      background-color: rgb(247, 63, 63);
      border: none;
      padding: 20px;
      margin: 4px 2px;
      border-radius: 50%;
}
#yelBut{
      background-color: rgb(247, 222, 83);
      border: none;
      padding: 20px;
      margin: 4px 2px;
      border-radius: 50%;
}
#greBut{
      background-color: rgb(111, 240, 128);
      border: none;
      padding: 20px;
      margin: 4px 2px;
      border-radius: 50%;
}
#bluBut{
      background-color: rgb(63, 137, 247);
      border: none;
      padding: 20px;
      margin: 4px 2px;
      border-radius: 50%;
}
#purBut{
      background-color: rgb(165, 112, 250);
      border: none;
      padding: 20px;
      margin: 4px 2px;
      border-radius: 50%;
}
#pinBut{
      background-color: rgb(252, 121, 208);
      border: none;
      padding: 20px;
      margin: 4px 2px;
      border-radius: 50%;
}
</style>