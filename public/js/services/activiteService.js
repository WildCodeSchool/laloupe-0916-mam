class activiteService {

    constructor($http) {
        this.$http = $http;
    }

    getAll() {
        return this.$http.get('/api/activites')
    }

    getOne(id) {
        return this.$http.get('/api/activites/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/activites/' + id, {
            description: data
        })
    }

}
