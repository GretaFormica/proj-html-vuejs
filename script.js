const app = Vue.createApp({

    data() {

        return {

            utils: {
                num: "+1 (305) 1234-5678",
                mail: "hello@example.com",
                address: "main avenue, 987"
            },
            
            links: [

                "home",
                "services",
                "about",
                "projects",
                "result",
                "get in touch"

            ],

            about: [
                "the company",
                "institutional",
                "social & events",
                "innovation",
                "environment",
                "tecnology",
            ]
            
        }
    },

    methods: {

    }
});

app.mount("#app");