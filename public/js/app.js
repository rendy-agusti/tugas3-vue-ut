// public/js/app.js
import { getBahanAjar } from "../services/api.js";

new Vue({
    el: '#app',

    data() {
        return {
            db: null
        }
    },

    async mounted() {
        try {
            console.log("Vue mounted → mulai fetch...");
            this.db = await getBahanAjar();
            console.log("DATA BERHASIL DIMUAT:", this.db);
        } catch (err) {
            console.error("FETCH ERROR:", err);
        }
    },

    methods: {
        formatRupiah(x) {
            return "Rp " + Number(x).toLocaleString("id-ID");
        }
    }
});
