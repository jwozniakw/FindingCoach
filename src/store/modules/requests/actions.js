export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString(), //tworzy losową zmienną
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    context.commit('addRequest', newRequest); //addRequest nazywa sie tak poniewaz taka nazwe podalismy w pliku mutations.js
  },
};
