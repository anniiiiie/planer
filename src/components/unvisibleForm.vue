<template>
      <div>
            <input id="NewFolder" placeholder="Name Folder">
            <div class="changeColor">Change color of folder
                  <div><input type="radio" id="redBut"><button id="yelBut"></button><button id="greBut"></button><button id="bluBut"></button><button id="purBut"></button><button id="pinBut"></button></div>
            </div>
            <button @click="Choose">Create</button>
      </div>

</template>

<script>
export default {
      name: 'unvisibleForm',
      data(){
            return{
                  all_folders:[],
                  new_folder:''
            }
      },
      methods:{
            Choose(){
                  this.new_folder = document.getElementById('NewFolder').value;
                  index = this.new_folder.length + 1
                  informaionFolder_$(index) = {
                        name: this.new_folder,
                        color: 
                  }
            }
      }

}
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