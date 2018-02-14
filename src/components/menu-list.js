export default {
  template: `
    <div>
      <button @click.stop="hide = !hide">Menu</button>
      <ul :hidden="hide">
        <li v-for="item in items" @click="selectView(item.name)">{{item.text}}</li>
      </ul>
    </div>
  `,
  data () {
    return {
      hide: true
    }
  },
  computed: {
    items: function () {
      return this.$store.state.views;
    }
  },
  methods: {
    selectView (name) {
      this.hide = true;
      this.$store.commit('changeView', name);
    }
  }
};
