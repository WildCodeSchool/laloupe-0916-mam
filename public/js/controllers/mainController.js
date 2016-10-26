class mainController {

    constructor(activiteService, infoService, partenaireService) {
        // /*this.todoService = todoService;
        // this.load();*/
        //
        // ezfb.getLoginStatus(function(res) {
        //     $scope.loginStatus = res;
        //
        //     (more || angular.noop)();
        // });
        //
        // /**
        //  * Origin: FB.api
        //  */
        // ezfb.api('/me', function(res) {
        //     $scope.apiMe = res;
        // });
        var TIMEOUT = null;
        $(window).on('resize', function() {
            if (TIMEOUT === null) {
                TIMEOUT = window.setTimeout(function() {
                    TIMEOUT = null;
                    //fb_iframe_widget class is added after first FB.FXBML.parse()
                    //fb_iframe_widget_fluid is added in same situation, but only for mobile devices (tablets, phones)
                    //By removing those classes FB.XFBML.parse() will reset the plugin widths.
                    $('.fb-page').removeClass('fb_iframe_widget fb_iframe_widget_fluid');
                    FB.XFBML.parse();
                }, 300);
            }
        });

        this.activiteService = activiteService;
        this.infoService = infoService;
        this.partenaireService = partenaireService;
        this.load();
    }



    carouselparallax() {
        $('.parallax').parallax();
        $('.modal1').leanModal();
        $('.modal2').leanModal();
        $('.modal3').leanModal();
        $('.modal4').leanModal();
        $('.modal5').leanModal();
        $('.modal6').leanModal();
    }
    carousel() {
        $('.carousel.carousel-slider').carousel({
            full_width: true
        });
        autoplay();

        function autoplay() {
            $('.carousel').carousel('next');
            setTimeout(autoplay, 4500);
        }
    }

    load() {
        this.activiteService.getAll().then((res) => {
            this.activites = res.data;
            this.activites.forEach((e, i) => {
                this.activites[i].descriptionActivite = e.descriptionActivite.replace(new RegExp('\r?\n', 'g'), '<br />');
            })
        });
        this.infoService.getAll().then((res) => {
            this.infos = res.data;
            this.infos.forEach((e, i) => {
                this.infos[i].descriptionInfo = e.descriptionInfo.replace(new RegExp('\r?\n', 'g'), '<br />');
            })
        });
        this.partenaireService.getAll().then((res) => {
            this.partenaires = res.data;
        })
    }

    /*

    load() {
        this.todoService.getAll().then((res) => {
            this.todos = res.data;
        })
    }

    create() {
        this.todoService.create(this.todo).then(() => {
            this.todo = '';
            this.load()
        })
    }

    update(todo) {
        this.todoService.update(todo._id, todo.description).then(() => {
            this.load()
        })
    }

    delete(todo) {
        this.todoService.delete(todo._id).then(() => {
            this.load()
        })
    }
*/
}
