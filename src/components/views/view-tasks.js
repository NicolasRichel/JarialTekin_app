export default {
  template: `
  <div id="view-task" class="view-container">
    <div id="task-list">
      <div v-for="(task, i) in tasks" :key="task.id" class="task-container">
        <div class="task-info">
          <button
            class="btn-desc"
            @click="hideDesc.splice(i, 1, !hideDesc[i])"
            v-html="caretUpDown(hideDesc[i])"
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
          <button @click="updateTask(task.id)">Update</button>
        </div>
      </div>
    </div>
  </div>
  `,
  created () {
    this.$store.dispatch('getTaskList');
  },
  data () {
    return {
      hideDesc: []
    };
  },
  computed: {
    tasks () { return this.$store.state.tasks; }
  },
  watch: {
    tasks () { this.hideDesc = this.tasks.map(t => true); }
  },
  methods: {
    caretUpDown (x) { return `<i class="fa fa-caret-${x ? 'down' : 'up'}"></i>`; },
    updateTask (id) { this.$store.commit('openPanel', 'taskForm'); }
  }
};
