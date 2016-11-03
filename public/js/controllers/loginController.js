class loginController {

    constructor(userService, sessionFactory, $timeout, $location, $rootScope) {
        this.userService = userService;
        this.sessionFactory = sessionFactory;
        this.$timeout = $timeout;
        this.$location = $location;
        this.$rootScope = $rootScope;
    }

    login() {
        this.userService.connect({
            email: this.email,
            password: this.password
        }).then((res) => {
            this.sessionFactory.token = res.data.token
            this.sessionFactory.user = res.data.user
            this.sessionFactory.isLogged = true
            this.$rootScope.$emit('loginStatusChanged', true)
            this.loginMessage = null
            this.$location.path('/admin')
        }).catch(() => {
            this.sessionFactory.isLogged = false
            this.$rootScope.$emit('loginStatusChanged', false)
            this.loginMessage = {}
            this.loginMessage.type = "error"
            this.loginMessage.title = "Erreur d'identification"
            this.loginMessage.message = "Erreur d'identifiant ou de mot de passe"
        });
    }

    createAccount() {
        this.userService.create({
            email: this.email,
            password: this.password
        }).then((res) => {
            this.sessionFactory.token = res.data.token
            this.sessionFactory.user = res.data.user
            this.sessionFactory.isLogged = true
            this.$rootScope.$emit('loginStatusChanged', true)
            this.loginMessage = {}
            this.loginMessage.type = "success"
            this.loginMessage.title = "Compte créé !"
            this.loginMessage.message = "Redirection..."
            this.$timeout(() => {
                this.loginMessage = null
                this.$location.path('/admin')
            }, 2000);
        }).catch((res) => {
            this.sessionFactory.isLogged = false
            this.$rootScope.$emit('loginStatusChanged', false)
            this.loginMessage = {}
            this.loginMessage.type = "error"
            this.loginMessage.title = "Erreur de création de compte"
            this.loginMessage.message = res.data
        });
    }
}
