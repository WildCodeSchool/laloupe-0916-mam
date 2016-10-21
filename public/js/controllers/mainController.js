class mainController {

    constructor(activiteService, infoService, $sce) {
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

        this.activiteService = activiteService;
        this.infoService = infoService;
        this.$sce = $sce;
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
                this.activites[i].descriptionActivite = this.$sce.trustAsHtml(e.descriptionActivite.replace(new RegExp('\r?\n', 'g'), '<br />'));
            })
        });
        this.infoService.getAll().then((res) => {
            this.infos = res.data;
            this.infos.forEach((e, i) => {
                this.infos[i].descriptionInfo = this.$sce.trustAsHtml(e.descriptionInfo.replace(new RegExp('\r?\n', 'g'), '<br />'));
            })
        });
    }

    /*

    load() {
        this.todoService.getAll().then((res) => {
            this.todos = res.data;
        })carousel() {
    $('.carousel.carousel-slider').carousel({
        full_width: true
    });
    autoplay();

    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }
}
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
