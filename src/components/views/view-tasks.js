import TaskForm from '../task-form.js';

export default {
  template: `
  <div id="view-task" class="view-container">
    <div id="panel" :hidden="hidePanel">
      <component :is="panelContent"></component>
    </div>
    <div id="task-list" :class="{ panelOpen: !hidePanel }">
      <div v-for="(task, i) in tasks" :key="task.id" class="task-container">
        <div class="task-info">
          <button
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
      </div>
    </div>
  </div>
  `,
  created () {
    this.$store.dispatch('getTaskList');
  },
  data () {
    return {
      hideDesc: [],
      hidePanel: true,
      panelContent: ''
    };
  },
  computed: {
    tasks () { return this.$store.state.tasks; }
  },
  watch: {
    tasks () { this.hideDesc = this.tasks.map(t => true); }
  },
  methods: {
    caretUpDown: x => '<i class="fa fa-caret-'+(x ? 'down' : 'up')+'"></i>'
  },
  components: {
    taskForm: TaskForm
  }
};
