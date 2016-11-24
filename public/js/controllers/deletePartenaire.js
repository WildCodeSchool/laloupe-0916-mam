function deletePartenaire(partenaireService) {
        this.partenaireService = partenaireService;

    this.load = () => {
        this.partenaireService.getAll().then((res) => {
            this.partenaires = res.data;
        });
    };
    this.delete = (partenaire) => {
        this.partenaireService.delete(partenaire._id, partenaire.logoPartenaire, partenaire.titrePartenaire, partenaire.descriptionPartenaire).then(() => {
            this.load();
        });
    };
    this.load();
}
