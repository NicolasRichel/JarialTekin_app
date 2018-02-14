export default {
  template: `
  <div class="view-container" id="view-task">
    <div id="panel" :hidden="hidePanel" v-html="panelContent"></div>
    <div id="task-list">
      <div v-for="(task, i) in tasks" :key="task.id" class="task-container">
        <div class="task-info">
          <button
            @click="hideDesc.splice(i, 1, !hideDesc[i])"
            v-html="caretUpDown(hideDesc[i])"
            title="Description">
          </button>
          <span class="task-name"><b>{{task.name}}</b></span>
          <span class="task-priority"><b>Priority :</b> {{task.priority}}</span>
          <span class="task-status"><b>Status :</b> {{task.status}}</span>
        </div>
        <div class="task-desc" :hidden="hideDesc[i]">
          <b>Description :</b><br/>
          {{task.description}}
        </div>
      </div>
    </div>
  </div>
  `,
  created () {
    this.hideDesc = this.tasks.map(t => true);
  },
  data () {
    return {
      hideDesc: [],
      hidePanel: true,
      panelContent: ''
    };
  },
  computed: {
    tasks () { return this.$store.state.tasks }
  },
  watch: {
    tasks: () => this.hideDesc = this.tasks.map(t => true)
  },
  methods: {
    caretUpDown: x => '<i class="fa fa-caret-'+(x ? 'down' : 'up')+'"></i>'
  }
};
