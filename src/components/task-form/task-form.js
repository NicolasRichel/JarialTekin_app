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
        <option v-for="p in priorities" :key="p.index" :value="p.index">{{p.label}}</option>
      </select>
    </div>
    <div class="control input">
      <label>Status :</label>
      <select v-model="status">
        <option v-for="s in statuses" :key="s.index" :value="s.index">{{s.label}}</option>
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
    this.$store.dispatch('getPriorityList');
    this.$store.dispatch('getStatusList');
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
    priorities () {
      return this.$store.state.priorities;
    },
    statuses () {
      return this.$store.state.statuses;
    },
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
