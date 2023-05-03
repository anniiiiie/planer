<template>
      <div class="folder">
            <h2 id="top-text">Create new folder</h2>
            <input v-model="NameFolder" id="NewFolder" placeholder="Name Folder" >
            <div class="changeColor">Change color of folder</div>
            <div>
                  <div><button  id="redBut" :class="{'active-color': activeColor === 'redBut'}" @click="chooseColor('redBut')"></button>
                  <button  id="yelBut" :class="{'active-color': activeColor === 'yelBut'}" @click="chooseColor('yelBut')"></button>
                  <button id="greBut" :class="{'active-color': activeColor === 'greBut'}" @click="chooseColor('greBut')"></button>
                  <button id="bluBut" :class="{'active-color': activeColor === 'bluBut'}" @click="chooseColor('bluBut')"></button>
                  <button id="purBut" :class="{'active-color': activeColor === 'purBut'}" @click="chooseColor('purBut')"></button>
                  <button id="pinBut" :class="{'active-color': activeColor === 'pinBut'}" @click="chooseColor('pinBut')"></button></div>
            </div>
            <button @click="Choose(activeColor, NameFolder)">Create</button>
      
      </div>

</template>

<script>
export default {
      name: 'unvisibleForm',
      data(){
        return{
            visibleForm: 1,
            all_folder: [
            //     {
            //         name: 'Buy',
            //         color: 'green',
            //     }
            ],
            new_folder: {
                name: '',
                color: '',
            },
            activeColor: 'redBut',
            NameFolder:'',
        }
    },
    methods: {
      AddNewFolder(){
            if (this.NameFolder.length>0 && this.activeColor != 0){
                  this.new_folder.name = this.NameFiolder
                  this.new_folder.color = this.activeColor
                  this.$emit('addFolder', this.newFolder)
            }
            else{
                  this.placeholder = 'Поле имя не должно быть пустым'
            }
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


<style scoped>
    .changeColor{
      display: flex;
      align-items: center;

}
#top-text{
      font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
      font-size: 1rem;
}
#redBut{
      background-color: rgb(247, 63, 63);
      border: none;
      padding: 20px;
      margin: 4px 2px;
      border-radius: 50%;
      cursor: pointer;

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
.active-color {
    border: 2px solid black !important;
}
</style>