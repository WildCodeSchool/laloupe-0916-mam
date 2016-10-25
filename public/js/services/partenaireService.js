class partenaireService {

    constructor($http) {
        this.$http = $http;
    }

    create(logo, title, descr) {
        return this.$http.post('/api/partenaires', {
            logoPartenaire: logo,
            titrePartenaire: title,
            descriptionPartenaire: descr
        })
    }

    getAll() {
        return this.$http.get('/api/partenaires')
    }

    getOne(id) {
        return this.$http.get('/api/partenaires/' + id)
    }

    delete(id) {
        return this.$http.delete('/api/partenaires/' + id)
    }

}
