class partenaireService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/partenaires', {
            description: data
        })
    }

    getAll() {
        return this.$http.get('/api/partenaires')
    }

    getOne(id) {
        return this.$http.get('/api/partenaires/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/partenaires/' + id, {
            description: data
        })
    }

    delete(id) {
        return this.$http.delete('/api/partenaires/' + id)
    }

}
