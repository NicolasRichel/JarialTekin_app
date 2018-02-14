export default function () {
  return new Vuex.Store({
    state: {
      views: [
        { id: 0, name: 'tasks', text: 'Tasks Management', actions: [] },
        { id: 1, name: 'projects', text: 'Projects Management', actions: [] },
        { id: 2, name: 'calendar', text: 'Calendar', actions: [] }
      ],
      currentView: 'tasks',
      tasks: [
        // These tasks data are used for test purpose...
        { id: 101, name: 'task 1', description: 'Hello World !', priority: '0', status: '0' },
        { id: 102, name: 'task 2', description: 'Yolo !!', priority: '0', status: '0' },
        { id: 103, name: 'task 3', description: 'Good Morning !', priority: '0', status: '0' },
        { id: 104, name: 'task 4', description: 'Good Bye !', priority: '0', status: '0' }
      ],
      projects: []
    },
    mutations: {
      changeView (state, view) {
        state.currentView = view;
      }
    }
  });
};
