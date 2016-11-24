function partenaireService($http) {

        this.$http = $http;

   this.create = (logo, title, descr) => {
        return this.$http.post('/api/partenaires', {
            logoPartenaire: logo,
            titrePartenaire: title,
            descriptionPartenaire: descr
        });
    };

    this.getAll = () => {
        return this.$http.get('/api/partenaires');
    };

    this.getOne = (id) => {
        return this.$http.get('/api/partenaires/' + id);
    };

    this.delete = (id) => {
        return this.$http.delete('/api/partenaires/' + id);
    };

}
