export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://vue-http-demo-360d2-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    ); //json dodaje sie tylko w przypadku FireBase

    // const responseData = await response.json();

    if (!response.ok) {
      //error
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
};
