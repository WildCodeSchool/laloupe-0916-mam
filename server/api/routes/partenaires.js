import express from 'express';
import Auth from '../middlewares/authorization.js';
import Partenaire from '../models/partenaire.js';

let router = express.Router();

module.exports = (app) => {

    var partenaire = new Partenaire();

    router.get('/', partenaire.findAll);

    router.get('/:id', partenaire.findById);

    router.post('/', Auth.hasAuthorization, partenaire.create);

    router.put('/:id', Auth.hasAuthorization, partenaire.update);

    router.delete('/:id', Auth.hasAuthorization, partenaire.delete);

    app.use('/partenaires', router);

};
