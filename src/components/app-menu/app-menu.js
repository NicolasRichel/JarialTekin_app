export default {
  template: `
    <div id="menu">
      <ul id="menu-list">
        <li 
          v-for="view in views" 
          :key="view.id"
          :class="{ active: view.name===currentView.name }"
          @click="selectView(view.name)">
          {{view.title}}
        </li>
      </ul>
    </div>
  `,
  computed: {
    currentView () {
      return this.$store.state.currentView;
    },
    views () {
      return this.$store.state.views;
    }
  },
  methods: {
    selectView (name) {
      this.$store.commit('selectView', name);
    }
  }
};
