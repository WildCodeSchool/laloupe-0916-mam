class editActivite {
    constructor(activiteService) {
      this.activiteService = activiteService;
      this.load();
    }

    load() {
        this.activiteService.getAll().then((res) => {
            this.activiteServices = res.data;
        })
    }

    update(activite) {
        this.activiteService.update(activite._id, activite.description).then(() => {
            this.load()
        })
    }

    }
