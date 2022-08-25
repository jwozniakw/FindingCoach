export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    // _ podloga sygnalizuje ze jest to zmienna ktorej nie musimy uzywac, nie jest ona potrzebna ale musi byc zachowana
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some((coach) => coach.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60; //zwroci prawde jezeli update byl wiecej niz minute temu a zwroci false jezeli bylo mniejsze niz minute temu
  },
};
