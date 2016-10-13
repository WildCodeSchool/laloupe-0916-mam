class mainController {

    constructor() {
        /*this.todoService = todoService;
        this.load();*/


    }



    carouselparallax() {
        $('.parallax').parallax();
        $('.carousel.carousel-slider').carousel({
            full_width: true

        });
        autoplay();

        function autoplay() {
            $('.carousel').carousel('next');
            setTimeout(autoplay, 4500);
        }

        $('.modal1').leanModal();
        $('.modal2').leanModal();
        $('.modal3').leanModal();
        $('.modal4').leanModal();
    }



    /*
('.carousel-slider').slider({full_width: true})
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
