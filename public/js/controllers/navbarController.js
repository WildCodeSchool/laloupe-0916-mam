class navbarController {

    constructor(sessionFactory, $rootScope, $window, $location) {
        /*
          this.isLogged = sessionFactory.isLogged;
          this.sessionFactory = sessionFactory;
          this.$rootScope = $rootScope;
          this.$location = $location;

          $rootScope.$on('loginStatusChanged', (event, isLogged) => {
              this.isLogged = isLogged;
              this.user = sessionFactory.user;
          })
          */
        $('.js-scrollTo').on('click', function() { // Au clic sur un élément
            var page = $(this).attr('href'); // Page cible
            var speed = 1000; // Durée de l'animation (en ms)
            $('html, body').animate({
                scrollTop: $(page).offset().top - 150
            }, speed); // Go
            return false;
        });
    }

    logout() {
        this.sessionFactory.isLogged = false;
        this.sessionFactory.user = {};
        this.sessionFactory.token = null;
        this.$rootScope.$emit('loginStatusChanged', false);
        this.isLogged = false;
        this.$location.path('/login');
    }

}
