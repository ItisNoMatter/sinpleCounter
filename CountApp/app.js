const app = Vue.createApp({
    data() {
        return {
            count: 0,
            increment:1,
        };
    },
    methods: {
        countUp() {
            this.count += Number(this.increment);
        }
        
    }
});

app.mount('#app');
