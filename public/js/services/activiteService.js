function activiteService($http) {

    this.$http = $http;

    this.getAll = () => {
        return this.$http.get('/api/activites');
    };

    this.getOne = (id) => {
        return this.$http.get('/api/activites/' + id);
    };

    this.update = (id, logo, title, descr) => {
        return this.$http.put('/api/activites/' + id, {
            logoActivite: logo,
            titreActivite: title,
            descriptionActivite: descr
        });
    };

}
