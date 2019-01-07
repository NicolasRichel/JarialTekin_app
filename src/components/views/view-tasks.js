export default {
  template: `
  <div id="view-task" class="view-container">
    <div id="task-action-board">
      <button @click="createTask()">New Task</button>
    </div>
    <div id="task-list">
      <div v-for="(task, i) in tasks" :key="task.id" class="task-container">
        <div class="task-info">
          <button
            class="btn-desc"
            @click="hideDesc.splice(i, 1, !hideDesc[i])"
            v-html="caret(hideDesc[i])"
            title="Description">
          </button>
          <div class="task-name"><b>{{task.name}}</b></div>
          <div class="task-priority"><b>Priority :</b> {{task.priority}}</div>
          <div class="task-status"><b>Status :</b> {{task.status}}</div>
        </div>
        <div class="task-desc" :hidden="hideDesc[i]">
          <b>Description :</b><br/><hr/>
          {{task.description}}
        </div>
        <div class="task-action">
          <hr/>
          <button @click="updateTask(task)">Update</button>
          <button @click="deleteTask(task)">Delete</button>
        </div>
      </div>
    </div>
  </div>
  `,
  data () {
    return {
      hideDesc: []
    };
  },
  created () {
    this.$store.dispatch('getTaskList');
  },
  computed: {
    tasks () {
      return this.$store.state.tasks;
    }
  },
  watch: {
    tasks (tasks) {
      this.hideDesc = tasks.map(t => true);
    }
  },
  methods: {
    caret (x) {
      return `<i class="fa fa-caret-${x ? 'down' : 'up'}"></i>`;
    },
    createTask () {
      this.$store.commit('openPanel', 'taskForm');
    },
    updateTask (task) {
      this.$store.commit('selectTask', task);
      this.$store.commit('openPanel', 'taskForm');
    },
    deleteTask (task) {
      this.$store.dispatch('deleteTask', task);
    }
  }
};
