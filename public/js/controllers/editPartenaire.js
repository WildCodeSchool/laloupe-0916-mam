class editPartenaire {
    constructor() {
      this.partenaireService = partenaireService;
      this.load();
    }

    load() {
        this.partenaireService.getAll().then((res) => {
            this.partenaires = res.data;
        })
    }

    create() {
        this.partenaireService.create(this.partenaire).then(() => {
            this.partenaire = '';
            this.load();
        });
    }

    update(partenaire) {
        this.partenaireService.update(partenaire._id, partenaire.description).then(() => {
            this.load();
        });
    }

    delete(partenaire) {
        this.partenaireService.delete(partenaire._id).then(() => {
            this.load();
        });
    }
}
