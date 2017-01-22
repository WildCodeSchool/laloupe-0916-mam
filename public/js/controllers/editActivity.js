class editActivity {
    constructor(activiteService) {
        this.activiteService = activiteService;
        this.load();
    }
    load() {
        this.activiteService.getAll().then((res) => {
            this.activites = res.data;
        });
    }
    update(activite) {
        this.activiteService.update(activite._id, activite.logoActivite, activite.titreActivite, activite.descriptionActivite).then(() => {
            this.load();
        });
    }
}
