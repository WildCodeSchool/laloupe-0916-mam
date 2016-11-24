function todoService($http) {

        this.$http = $http;

    const create = (data) => {
        return this.$http.post('/api/todos', {
            description: data
        })
    }

    const getAll = () => {
        return this.$http.get('/api/todos')
    }

    const getOne = (id) => {
        return this.$http.get('/api/todos/' + id)
    }

    const update = (id, data) => {
        return this.$http.put('/api/todos/' + id, {
            description: data
        })
    }

    const delete = (id) => {
        return this.$http.delete('/api/todos/' + id)
    }

}
