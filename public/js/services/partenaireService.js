function partenaireService($http) {

        this.$http = $http;

   function create(logo, title, descr) {
        return this.$http.post('/api/partenaires', {
            logoPartenaire: logo,
            titrePartenaire: title,
            descriptionPartenaire: descr
        })
    }

    const getAll = () => {
        return this.$http.get('/api/partenaires')
    }

    const getOne = (id) => {
        return this.$http.get('/api/partenaires/' + id)
    }

    const delete = (id) => {
        return this.$http.delete('/api/partenaires/' + id)
    }

}
