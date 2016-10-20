import express from 'express';
import Partenaire from '../models/partenaire.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var partenaire = new Partenaire();

    router.get('/', partenaire.findAll);

    router.get('/:id', partenaire.findById);

    router.post('/', partenaire.create);

    router.put('/:id', partenaire.update);

    router.delete('/:id', partenaire.delete);

    app.use('/partenaires', Auth.hasAuthorization, router);

}
