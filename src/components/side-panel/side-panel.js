import AppMenu from '../app-menu/app-menu.js';
import TaskForm from '../task-form/task-form.js';

export default {
  template: `
    <div id="side-panel" :hidden="!open">
      <div id="content-container">
        <button id="close-btn" @click="closePanel">X</button>
        <component :is="panelContent"></component>
      </div>
    </div>
  `,
  computed: {
    open () {
      return this.$store.state.panelOpen;
    },
    panelContent () {
      return this.$store.state.panelContent;
    }
  },
  methods: {
    closePanel () {
      this.$store.commit('closePanel');
    }
  },
  components: {
    appMenu: AppMenu,
    taskForm: TaskForm
  }
};
