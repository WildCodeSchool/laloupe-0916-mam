import express from 'express';
import Activite from '../models/activite.js';

let router = express.Router();

module.exports = (app) => {

    var activite = new Activite();

    router.get('/', activite.findAll);

    router.get('/:id', activite.findById);

    router.post('/', activite.create);

    router.put('/:id', activite.update);

    router.delete('/:id', activite.delete);

    app.use('/activites', router);

};
