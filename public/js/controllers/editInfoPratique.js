class editInfoPratique {
    constructor() {
      this.infoPratiqueService = infoPratiqueService;
      this.load();
    }

    load() {
        this.infoPratiqueService.getAll().then((res) => {
            this.infoPratiques = res.data;
        })
    }

    update(infoPratique) {
        this.infoPratiqueService.update(infoPratique._id, infoPratique.description).then(() => {
            this.load()
        })
    }
}
