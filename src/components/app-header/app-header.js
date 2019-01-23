export default {
  template: `
    <div id="header">
      <div>
        <button id="menu-btn" @click="openMenu">
          <i class="fa fa-bars"></i>
        </button>
      </div>
      <div id="settings">
        <button id="settings-btn">
          <i class="fa fa-cog"></i>
        </button>
      </div>
    </div>
  `,
  methods: {
    openMenu () {
      this.$store.commit('openPanel', 'appMenu');
    }
  }
};
