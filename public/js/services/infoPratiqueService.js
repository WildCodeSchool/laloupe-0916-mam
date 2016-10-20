class infoPratiqueService {

    constructor($http) {
        this.$http = $http;
    }

    getAll() {
        return this.$http.get('/api/infoPratiques')
    }

    getOne(id) {
        return this.$http.get('/api/infoPratiques/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/infoPratiques/' + id, {
            description: data
        })
    }

}
