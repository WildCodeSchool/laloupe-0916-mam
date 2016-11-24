function editActivity (activiteService) {
        this.activiteService = activiteService;

    this.load = () => {
        this.activiteService.getAll().then((res) => {
            this.activites = res.data;
        });
    };
    this.update = (activite) => {
        this.activiteService.update(activite._id, activite.logoActivite, activite.titreActivite, activite.descriptionActivite).then(() => {
            this.load();
        });
    };
    this.load();
}
