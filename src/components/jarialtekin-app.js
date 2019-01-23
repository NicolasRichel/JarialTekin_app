import AppHeader from './app-header/app-header.js';
import AppBody from './app-body/app-body.js';

export default {
  template: `
    <div>
      <app-header></app-header>
      <app-body></app-body>
    </div>
  `,
  components: {
    AppHeader,
    AppBody
  }
};
