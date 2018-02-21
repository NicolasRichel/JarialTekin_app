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
      tasks: tasks,
      projects: []
    },
    mutations: {
      changeView (state, view) {
        state.currentView = state.views.find(v => v.name===view);
      }
    },
    actions: {
      getTaskList ({ commit, state }) {

      }
    }
  });
};


// These tasks data are used for test purpose...
const tasks = [
  { id: 101, name: 'task 1', description: 'Hello World !', priority: '0', status: '0' },
  {
    id: 102,
    name: 'this is a very very very very very very very very very very very very very very looooooooooonnnnngggg task name... with a very very very ... (100 times later) ... very long description.',
    description: '\
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus est id orci ornare sollicitudin. \
      Aliquam hendrerit nunc non nisi ornare lacinia. Sed sit amet vulputate sem. Pellentesque eget sapien sit amet enim rutrum commodo. \
      Suspendisse aliquet tincidunt risus, vitae placerat lacus finibus a. Mauris congue quam rutrum, tristique augue eget, eleifend urna. \
      In pellentesque vulputate gravida. Duis sollicitudin, magna quis venenatis molestie, diam nisi iaculis enim, eu tristique metus mi sit amet nibh. \
      Nulla ultricies mi a tellus aliquet, non dapibus tellus dapibus. Maecenas volutpat viverra felis, et ornare sem tempus id. \
      Nam eget sem quis lacus consectetur ultricies. Etiam feugiat, dolor in dictum bibendum, lectus libero ultricies lectus, a ultrices lacus nunc id diam. \
      Pellentesque tempor orci nec pulvinar placerat. Sed quis maximus nisi. Vivamus id erat placerat, fermentum leo cursus, rhoncus risus.\
      Vestibulum vitae urna et eros elementum commodo. Ut in molestie dui. Suspendisse posuere sem sed massa faucibus, sed rutrum ipsum blandit. \
      Donec faucibus porta sapien et aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. \
      Nunc id orci ullamcorper, vulputate eros id, sodales est. Nam fringilla lacus mauris, vestibulum sollicitudin arcu scelerisque ac. \
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mrbi venenatis, urna vitae scelerisque condimentum, erat nulla bibendum erat, eget feugiat est ante gravida nulla. \
      Vestibulum gravida ut massa eu rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. \
      Etiam ante nulla, fermentum vitae fermentum at, scelerisque eu mi. Sed finibus sagittis sapien ac fermentum. \
      Sed non pharetra elit. Aenean consequat, magna vitae volutpat feugiat, tellus enim dapibus nunc, sed ornare mi tortor et magna. \
      Morbi eros erat, maximus quis imperdiet et, lobortis interdum nisi. Integer id elit semper, malesuada quam eget, lobortis augue. \
      Aliquam dolor est, cursus id diam at, egestas suscipit risus. Vestibulum luctus odio mauris, nec dignissim mauris luctus sed. \
      Ut non ornare urna. Suspendisse ornare, ligula at sollicitudin ullamcorper, dui sem blandit lorem, consequat lobortis ligula nisl sit amet nibh. Donec pellentesque imperdiet pretium. \
      Cras ac massa felis. Donec at gravida turpis. Mauris et purus ac tellus aliquam vulputate eu at nunc. Fusce non lobortis diam, vitae varius felis. \
      Etiam velit dui, condimentum id dolor sed, consectetur ullamcorper massa. Ut et sapien ac arcu finibus aliquam vel nec tellus. \
      Nullam tristique sapien vel purus mollis commodo. Donec ultricies nisi nibh, eu interdum nisl tincidunt sit amet. \
      Proin dignissim posuere consequat. Mauris quis mauris in arcu placerat ullamcorper. Fusce mattis, dui at pulvinar dictum, quam ex aliquet lorem, non finibus magna velit id urna. \
      Duis ut mattis est, a mollis est. Mauris luctus maximus ipsum nec dictum. Sed mattis viverra nisl, eu volutpat lectus dictum ut. \
      Integer mauris enim, dignissim imperdiet elit sed, semper placerat purus. Nam vel elit augue.',
    priority: '0',
    status: '0'
  },
  { id: 103, name: 'task 3', description: 'Good Morning !', priority: '0', status: '0' },
  { id: 104, name: 'task 4', description: 'Good Bye !', priority: '0', status: '0' }
];
