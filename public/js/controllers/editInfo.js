function editInfo (infoService) {

        this.infoService = infoService;

    this.load = () => {
        this.infoService.getAll().then((res) => {
            this.infos = res.data;
        });
    };
    this.update = (info) => {
        this.infoService.update(info._id, info.logoInfo, info.descriptionInfo).then(() => {
            this.load();
        });
    };
    this.load();
}
