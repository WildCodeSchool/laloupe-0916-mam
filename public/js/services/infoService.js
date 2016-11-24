function infoService($http) {

        this.$http = $http;

    const getAll = () => {
        return this.$http.get('/api/infos')
    }

    const getOne = (id) => {
        return this.$http.get('/api/infos/' + id)
    }

    const update = (id, logo, descr) => {
        return this.$http.put('/api/infos/' + id, {
            logoInfo: logo,
            descriptionInfo: descr
        })
    }

}
