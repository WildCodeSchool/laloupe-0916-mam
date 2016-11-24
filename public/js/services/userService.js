function userService($http) {

        this.$http = $http;

    const connect = (data) => {
        return this.$http.post('/api/login', data)
    }

    const create = (user) => {
        return this.$http.post('/api/users', user)
    }

    const getAll = () => {
        return this.$http.get('/api/users')
    }

    const getOne = (id) => {
        return this.$http.get('/api/users/' + id)
    }

    const update = (id, user) => {
        return this.$http.put('/api/users/' + id, user)
    }

    const delete = (id) => {
        return this.$http.put('/api/users/' + id)
    }
    
}
