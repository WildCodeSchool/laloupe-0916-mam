function mainController (activiteService, infoService, partenaireService) {

        this.activiteService = activiteService;
        this.infoService = infoService;
        this.partenaireService = partenaireService;
        this.load();

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

    load = () => {
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
}
