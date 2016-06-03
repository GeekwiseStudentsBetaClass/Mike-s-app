angular.module('app')
    .service("profileInfo", function profileInfo() {
        return {
            user: "",
            name: "",
            age: "",
            phone: "",
            email: "",
            websites: "",
            work: "",
            accounts: "",
            education: "",
            family: "",
            places: "",
            coworkers: "",
            top: ""
        };

    });
