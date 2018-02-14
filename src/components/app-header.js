export default {
  template: `
    <div id="header">
      <div id="menu">
        <button id="menu-btn" @click="hideMenu = !hideMenu">
          <i class="fa fa-bars"></i>
        </button>
        <ul id="menu-list" :hidden="hideMenu">
          <li v-for="view in views" :key="view.id"
            @click="selectView(view.name)">
            {{view.text}}
          </li>
        </ul>
      </div>
      <div id="actions">view actions goes here ...</div>
      <div id="setting">
        <button id="setting-btn">
          <i class="fa fa-cog"></i>
        </button>
      </div>
    </div>
  `,
  data () {
    return {
      hideMenu: true
    }
  },
  computed: {
    views () { return this.$store.state.views; }
  },
  methods: {
    selectView (name) {
      this.hideMenu = true;
      this.$store.commit('changeView', name);
    }
  }
};
