import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';

const store = createStroe({
  modules: {
    coaches: coachesModule,
  },
});

export default store;
