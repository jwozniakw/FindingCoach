<template>
  <section>
    <button class="refresh">
      <img
        class="icon"
        src="https://htmlacademy.ru/assets/icons/reload-6x-white.png"
      />Refresh
    </button>
    <router-link to="/register">Register as Coach</router-link>
    <ul v-if="hasCoaches">
      <coach-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
      ></coach-item>
      <!--:key służy tylko do rozroznienia ktory element należy do którego i musi być zawsze uwzgledniony i przypisany najlepiej do ID-->
    </ul>
    <h3 v-else>No coaches found</h3>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: {
    CoachItem,
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches']; // first coaches name means namespaced name and second coaches means getters name
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.refresh {
  position: relative;
  width: 200px;
  height: 60px;
  margin: 20px auto;
  padding: 0;
  font-size: 22px;
  text-align: center;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  transition: transform 0.4s ease-in-out;
}

.refresh:active {
  top: 1px;
  box-shadow: none;
}

.icon {
  position: absolute;
  left: 20px;
}
.refresh {
  background: #6a09b9d5;
  border-bottom: 2px solid #301348d5;
  box-shadow: inset 0 -2px #301348d5;
}
.refresh .icon {
  width: 24px;
  height: 24px;
  transition: all 0.4s ease-in-out;
}
.refresh:hover .icon {
  transform: rotate(360deg) scale(1.2);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
