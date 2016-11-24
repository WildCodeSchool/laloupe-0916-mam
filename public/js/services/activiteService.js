function activiteService($http) {

        this.$http = $http;

    const getAll = () => {
        return this.$http.get('/api/activites')
    }

    const getOne = (id) => {
        return this.$http.get('/api/activites/' + id)
    }

    const update = (id, logo, title, descr) => {
        return this.$http.put('/api/activites/' + id, {
            logoActivite: logo,
            titreActivite: title,
            descriptionActivite: descr
        })
    }

}
