import express from 'express';
import Activite from '../models/activite.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var activite = new Activite();

    router.get('/', activite.findAll);

    router.get('/:id', activite.findById);

    router.put('/:id', activite.update);

    app.use('/activites', Auth.hasAuthorization, router);

}
