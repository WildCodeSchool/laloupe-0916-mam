class deletePartenaire {
    constructor(partenaireService) {
        this.partenaireService = partenaireService;
        this.load();
    }
    load() {
        this.partenaireService.getAll().then((res) => {
            this.partenaires = res.data;
        });
    }
    delete(partenaire) {
        this.partenaireService.delete(partenaire._id, partenaire.logoPartenaire, partenaire.titrePartenaire, partenaire.descriptionPartenaire).then(() => {
            this.load();
        });
    }
}
