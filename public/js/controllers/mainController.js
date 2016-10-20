class mainController {

    constructor() {
        // ezfb.getLoginStatus(function(res) {
        //     $scope.loginStatus = res;
        //
        //     (more || angular.noop)();
        // });
        // ezfb.api('/me', function(res) {
        //     $scope.apiMe = res;
        // });

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
