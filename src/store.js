import { request } from './static/js/proxy.js';
import {
  toGraqhqlInputString,
  addArrayElement,
  updateArrayElement,
  removeArrayElement
} from './static/js/utils.js';

const views = [
  { id: 0, name: 'tasks', title: 'Tasks Management' },
  { id: 1, name: 'projects', title: 'Projects Management' },
  { id: 2, name: 'calendar', title: 'Calendar' }
];

export default function () {
  return new Vuex.Store({
    state: {
      views: views,
      currentView: views[0],
      panelOpen: false,
      panelContent: '',
      priorities: [],
      statuses: [],
      tasks: [],
      projects: [],
      currentTask: null
    },
    mutations: {
      selectView (state, view) {
        state.currentView = state.views.find(v => v.name===view);
        state.panelOpen = false;
        state.panelContent = '';
      },
      openPanel (state, content) {
        state.panelOpen = true;
        state.panelContent = content;
      },
      closePanel (state) {
        state.panelOpen = false;
        state.panelContent = '';
      },
      setPriorityList (state, priorities) {
        state.priorities = priorities;
      },
      setStatusList (state, statuses) {
        state.statuses = statuses;
      },
      setTaskList (state, tasks) {
        state.tasks = tasks;
      },
      setProjectList (state, projects) {
        state.projects = projects;
      },
      selectTask (state, task) {
        state.currentTask = task;
      },
      unselectTask (state) {
        state.currentTask = null;
      }
    },
    actions: {

      getPriorityList ({ commit }) {
        request(`{
          allPriorities {
            index, label
          }
        }`)
        .then( data => {
          data && commit('setPriorityList', data.allPriorities);
        });
      },
      getStatusList ({ commit }) {
        request(`{
          allStatuses {
            index, label
          }
        }`)
        .then( data => {
          data && commit('setStatusList', data.allStatuses);
        });
      },

      // Task Management Actions
      getTaskList ({ commit }) {
        request(`{
          allTasks {
            id, name, description
          }
        }`)
        .then( data => {
          data && commit('setTaskList', data.allTasks);
        });
      },
      createTask ({ commit, state }, task) {
        request(`mutation {
          createTask (task: ${toGraqhqlInputString(task)}) {
            id, name, description
          }
        }`)
        .then( data => {
          if (data && data.createTask) {
            commit('setTaskList', addArrayElement(state.tasks, data.createTask));
            commit('closePanel');
          }
        });
      },
      updateTask ({ commit, state }, task) {
        request(`mutation {
          updateTask (task: ${toGraqhqlInputString(task)})
        }`)
        .then( data => {
          if (data && data.updateTask) {
            commit('setTaskList', updateArrayElement(state.tasks, task));
            commit('unselectTask');
            commit('closePanel');
          }
        });
      },
      deleteTask ({ commit, state }, task) {
        request(`mutation {
          deleteTask (id: ${task.id})
        }`)
        .then( data => {
          if (data && data.deleteTask) {
            commit('setTaskList', removeArrayElement(state.tasks, task));
          }
        });
      },

      // Project Management Actions
      getProjectList ({ commit }) {},
      createProject ({ commit, state }, project) {},
      updateProject ({ commit, state }, project) {},
      deleteProject ({ commit, state }, project) {}

    }
  });
};
