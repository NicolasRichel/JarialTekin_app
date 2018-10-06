import { request } from './static/js/proxy.js';

const views = [
  { id: 0, name: 'tasks', text: 'Tasks Management', actions: [] },
  { id: 1, name: 'projects', text: 'Projects Management', actions: [] },
  { id: 2, name: 'calendar', text: 'Calendar', actions: [] }
]

export default function () {
  return new Vuex.Store({
    state: {
      views: views,
      currentView: views[0],
      tasks: [],
      projects: []
    },
    mutations: {
      changeView (state, view) {
        state.currentView = state.views.find(v => v.name===view);
      },
      setTaskList (state, tasks) {
        state.tasks = tasks;
      },
      setProjectList (state, projects) {
        state.projects = projects;
      }
    },
    actions: {
      getTaskList ({ commit }) {
        request(`{
          allTasks {
            id, name, description
          }
        }`).then( data => {
          commit('setTaskList', data.allTasks);
        });
      },
      getProjectList ({ commit }) {}
    }
  });
};
