const app = Vue.createApp({

    data() {

        return {

            utils: {
                num: "+1 (305) 1234-5678",
                mail: "hello@example.com",
                address: "main avenue, 987"
            },
            
            links: [

                "HOME",
                "SERVICES",
                "ABOUT",
                "PROJECTS",
                "RESULT",
                "GET IN TOUCH"

            ],

            abouts: [
                "the company",
                "institutional",
                "social & events",
                "innovation",
                "environment",
                "tecnology",
            ],

            active: 5
            
        }
    },

    methods: {
        buttonActive(index) {
            this.active = index;
        }

    }
});

app.mount("#app");