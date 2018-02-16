import ViewTasks from './views/view-tasks.js';
import ViewProjects from './views/view-projects.js';
import ViewCalendar from './views/view-calendar.js';

export default {
  template: `
    <div id="body">
      <component :is="currentView.name"></component>
    </div>
  `,
  computed: {
    currentView () {
      return this.$store.state.currentView;
    }
  },
  components: {
    tasks: ViewTasks,
    projects: ViewProjects,
    calendar: ViewCalendar
  }
};
