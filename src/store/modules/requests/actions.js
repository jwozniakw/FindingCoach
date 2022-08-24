export default {
  async contactCoach(context, payload) {
    const newRequest = {
      // id: new Date().toISOString(), //tworzy losową zmienną
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://vue-http-demo-360d2-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request.'
      );
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest); //addRequest nazywa sie tak poniewaz taka nazwe podalismy w pliku mutations.js
  },
  fetchRequests(context) {
    const coachId = context.rootGetters.userId;
  },
};
