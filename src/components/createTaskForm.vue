<template>
    <div class="task">
          <h2 id="top-text">Create new task</h2>
          <input v-model="NameTask" id="NewTask" :placeholder="placeholder" >

          <button @click="AddNewTask()">Create</button>
    </div>

</template>

<script>
export default {
    name: 'createTaskForm',
    data(){
      return{
          all_tasks:[
                {
                    name:'', 
                    status: 0, 
                    folder: '',
                }
          ],
          visibleTaskForm: 0,
          new_task: {
              name: '',
              status:0, 
              folder:''
          },
          NameTask:'',
          placeholder: 'Your Task'
      }
  },
  methods: {
    AddNewTask(NameTask){
          if (this.NameTask.length>0){
                this.new_task = {
                      name: NameTask,
                      status: 0  
                }, 
                this.$emit('addTask', this.new_task)
                console.log(this.new_task)
                this.NameTask = ''
                this.Close()
                this.placeholder = 'Your Task'
          }
          else{
                this.placeholder = 'Place cannot be empty'
          }
    },
    Close(){
          this.visibleTaskForm = 0
    }

  }
}
</script>
<style>
#task{
      width: 280px;
      height: 100px;
      margin-top: 250px;
      position: absolute;
      left:200px;
      background-color: rgb(200, 255, 183);
}




</style>