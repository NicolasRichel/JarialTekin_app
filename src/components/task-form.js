export default {
  template: `
  <div id="task-form" class="form">
    <input type="hidden" v-model="id"/>
    <div class="control input">
      <label>Name :</label>
      <input type="text" v-model.trim="name" placeholder="Name of the task"/>
    </div>
    <div class="control input">
      <label>Priority :</label>
      <select v-model="priority">
        <option :value="0">LOW</option>
        <option :value="1">NORMAL</option>
        <option :value="2">HIGH</option>
      </select>
    </div>
    <div class="control input">
      <label>Status :</label>
      <select v-model="status">
        <option :value="0">TODO</option>
        <option :value="1">DOING</option>
        <option :value="2">DONE</option>
      </select>
    </div>
    <div class="control input">
     <label>Description :</label>
     <textarea v-model="description" rows="10" placeholder="Task description"></textarea>
    </div>
    <div class="control btn">
      <button @click="submit">Save</button>
    </div>
  </div>
  `,
  data () {
    return {
      newTask: true,
      id: null,
      name: '',
      priority: 0,
      status: 0,
      description: ''
    };
  },
  created () {
    const task = this.$store.state.currentTask;
    if (task) {
      this.newTask = false;
      this.id = task.id;
      this.name = task.name;
      this.priority = task.priority;
      this.status = task.status;
      this.description = task.description;
    }
  },
  computed: {
    task () {
      return {
        id: parseInt(this.id),
        name: this.name,
        //priority: this.priority,
        //status: this.status,
        description: this.description
      };
    }
  },
  methods: {
    submit () {
      this.$store.dispatch(this.newTask ? 'createTask' : 'updateTask', this.task);
    }
  }
};
