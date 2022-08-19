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
      <li v-for="coach in filteredCoaches" :key="coach.id">
        <!--display first name of coach by his id -->
        {{ coach.firstName }}
      </li>
    </ul>
    <h3 v-else>No coaches found</h3>
  </section>
</template>

<script>
export default {
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
</style>
