<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<script>
import { getBahanAjar } from './services/api.js';

export default {
  data() {
    return {
      bahanAjar: []
    };
  },

  async mounted() {
    try {
      this.bahanAjar = await getBahanAjar();
      console.log("Data berhasil dimuat:", this.bahanAjar);
    } catch (err) {
      console.error("Error:", err);
    }
  }
};
</script>
