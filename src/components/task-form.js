export default {
  template: `
  <div id="task-form">
    <label>Name :</label>
    <input type="text" v-model.trim="name"/>
    <label>Priority :</label>
    <select v-model="priority">
      <option :value="0">LOW</option>
      <option :value="1">NORMAL</option>
      <option :value="2">HIGH</option>
    </select>
    <label>Status :</label>
    <select v-model="status">
      <option :value="0">TODO/option>
      <option :value="1">DOING</option>
      <option :value="2">DONE</option>
    </select>
    <label>Description :</label>
    <textarea v-model="description"></textarea>
    <button @click="submit">Save</button>
  </div>
  `,
  created () {},
  data: {
    name: '',
    priority: 0,
    status: 0,
    description: ''
  },
  computed: {
    task () {
      return {
        this.name,
        this.priority,
        this.status,
        this.description
      };
    }
  }
  methods: {
    submit: () => {}
  }
};
