import express from 'express';
import InfoPratique from '../models/infoPratique.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var infoPratique = new InfoPratique();

    router.get('/', infoPratique.findAll);

    router.get('/:id', infoPratique.findById);

    router.put('/:id', infoPratique.update);

    app.use('/infoPratiques', Auth.hasAuthorization, router);

}
