import * as utils from './static/js/utils.js';
import { request } from './static/js/proxy.js';

const views = [
  { id: 0, name: 'tasks', text: 'Tasks Management', actions: [] },
  { id: 1, name: 'projects', text: 'Projects Management', actions: [] },
  { id: 2, name: 'calendar', text: 'Calendar', actions: [] }
];

export default function () {
  return new Vuex.Store({
    state: {
      views: views,
      currentView: views[0],
      panelOpen: false,
      panelContent: '',
      tasks: [],
      projects: []
    },
    mutations: {
      changeView (state, view) { state.currentView = state.views.find(v => v.name===view); },
      openPanel (state, content) { state.panelOpen = true; state.panelContent = content; },
      closePanel (state) { state.panelOpen = false; state.panelContent = ''; },
      setTaskList (state, tasks) { state.tasks = tasks; },
      setProjectList (state, projects) { state.projects = projects; }
    },
    actions: {

      // Task Management Actions
      getTaskList ({ commit }) {
        request(`{
          allTasks {
            id, name, description
          }
        }`).then( data => {
          data && commit('setTaskList', data.allTasks);
        });
      },
      createTask ({ commit, state }, task) {
        request(`mutation {
          createTask (task: ${utils.graqhqlInputString(task)}) {
            id, name, description
          }
        }`).then( data => {
          data && commit('setTaskList', state.tasks.push(task));
        });
      },
      updateTask ({ commit, state }, task) {
        request(`mutation {
          updateTask (task: ${utils.graqhqlInputString(task)})
        }`).then( data => {
          data && data.updateTask && commit('setTaskList', utils.updateArrayElement(state.tasks, task));
        });
      },

      // Project Management Actions
      getProjectList ({ commit }) {},
      createProject ({ commit, state }, project) {},
      updateProject ({ commit, state }, project) {}

    }
  });
};
