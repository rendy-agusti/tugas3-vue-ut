import { getBahanAjar } from '../services/api.js';

new Vue({
    el: '#app',

    data() {
        return {
            db: null
        }
    },

    async mounted() {
        try {
            this.db = await getBahanAjar();
            console.log("Data berhasil dimuat", this.db);
        } catch (err) {
            console.error(err);
        }
    }
});
