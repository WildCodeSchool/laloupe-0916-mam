function infoService($http) {

        this.$http = $http;

    this.getAll = () => {
        return this.$http.get('/api/infos');
    };

    this.getOne = (id) => {
        return this.$http.get('/api/infos/' + id);
    };

    this.update = (id, logo, descr) => {
        return this.$http.put('/api/infos/' + id, {
            logoInfo: logo,
            descriptionInfo: descr
        });
    };

}
