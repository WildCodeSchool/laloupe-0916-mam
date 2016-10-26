import express from 'express';
import Auth from '../middlewares/authorization.js';
import Activite from '../models/activite.js';

let router = express.Router();

module.exports = (app) => {

    var activite = new Activite();

    router.get('/', activite.findAll);

    router.get('/:id', activite.findById);

    router.post('/', Auth.hasAuthorization, activite.create);

    router.put('/:id', Auth.hasAuthorization, activite.update);

    router.delete('/:id', Auth.hasAuthorization, activite.delete);

    app.use('/activites', router);

};
