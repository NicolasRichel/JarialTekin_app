export default {
  props: ['task'],
  template: `
  <div class="task-item">
    <div class="task-info">
      <button
        class="btn-desc"
        @click="hideDesc = !hideDesc"
        v-html="caret(hideDesc)"
        title="Description">
      </button>
      <div class="task-name"><b>{{task.name}}</b></div>
      <div class="task-priority"><b>Priority :</b> {{task.priority}}</div>
      <div class="task-status"><b>Status :</b> {{task.status}}</div>
    </div>
    <div class="task-desc" :hidden="hideDesc">
      <b>Description :</b><br/><hr/>
      {{task.description}}
    </div>
    <div class="task-action">
      <hr/>
      <button @click="updateTask()">Update</button>
      <button @click="deleteTask()">Delete</button>
    </div>
  </div>
  `,
  data () {
    return {
      hideDesc: true
    }
  },
  methods: {
    caret (x) {
      return `<i class="fa fa-caret-${x ? 'down' : 'up'}"></i>`;
    },
    updateTask () {
      this.$store.commit('selectTask', this.task);
      this.$store.commit('openPanel', 'taskForm');
    },
    deleteTask () {
      this.$store.dispatch('deleteTask', this.task);
    }
  }
};
