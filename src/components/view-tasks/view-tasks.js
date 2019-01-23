import TaskItem from '../task-item/task-item.js';

export default {
  template: `
  <div id="view-task" class="view-container">
    <div id="task-action-board">
      <button @click="createTask()">New Task</button>
    </div>
    <div id="task-list">

      <task-item
        v-for="(task, i) in tasks"
        :key="task.id"
        :task="task">
      </task-item>

    </div>
  </div>
  `,
  created () {
    this.$store.dispatch('getTaskList');
  },
  computed: {
    tasks () {
      return this.$store.state.tasks;
    }
  },
  methods: {
    createTask () {
      this.$store.commit('openPanel', 'taskForm');
    }
  },
  components: {
    TaskItem
  }
};
