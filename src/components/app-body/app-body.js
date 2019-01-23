import SidePanel from '../side-panel/side-panel.js';
import ViewTasks from '../view-tasks/view-tasks.js';
import ViewProjects from '../view-projects/view-projects.js';
import ViewCalendar from '../view-calendar/view-calendar.js';

export default {
  template: `
    <div id="body">
      <side-panel></side-panel>
      <component :is="currentView.name"></component>
    </div>
  `,
  computed: {
    currentView () {
      return this.$store.state.currentView;
    }
  },
  components: {
    SidePanel,
    tasks: ViewTasks,
    projects: ViewProjects,
    calendar: ViewCalendar
  }
};
