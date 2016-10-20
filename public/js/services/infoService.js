class infoService {

    constructor($http) {
        this.$http = $http;
    }

    getAll() {
        return this.$http.get('/api/infos')
    }

    getOne(id) {
        return this.$http.get('/api/infos/' + id)
    }

    update(id, logo, descr) {
        return this.$http.put('/api/infos/' + id, {
            logoInfo: logo,
            descriptionInfo: descr
        })
    }

}
