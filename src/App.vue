<template>
  <div>
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
            <UnvisibleForm @addFolder="addCreatedFolder(new_folder)"/>
        </div>

        <div v-if="all_folder.length!== 0">
            <div 
            v-for="(folder) in all_folder"
            :key=folder.id
            ><button v-bind:id="folder.color">{{ folder.name }}</button>
        </div>
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
                {
                    name: 'Buy',
                    color: 'redBut',
                },
                {
                    name: 'Buy',
                    color: 'bluBut',
                },
                {
                    name: 'Buy',
                    color: 'pinBut',
                },
                {
                    name: 'Buy',
                    color: 'yelBut',
                },

            ],
            visibleForm:0
        }
    },
    methods: {
        AddNewFolder(all_folder){
            console.log(all_folder);
            this.visibleForm = 1


        },
        addCreatedFolder(){
            this.visibleForm = 0
            this.all_folder.push(this.new_folder)
            console.log(this.all_folder)        
        }
    }
}
</script>

<style>
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
#butFolder{
    display: flex;
    text-align: center;
    font-family: 'IBM Plex Sans', sans-serif;
}
#redBut{
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
#yelBut{
      color: rgb(247, 222, 83);
      border: 3px solid rgb(247, 222, 83);
      width: 20vw;
      height: 10vh;
      margin: 1px 0;
      cursor: pointer;
      text-align: center;
      font-family: cursive;
}
#greBut{
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
#bluBut{
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
#purBut{
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
#pinBut{
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