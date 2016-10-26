import express from 'express';
import Auth from '../middlewares/authorization.js';
import Info from '../models/info.js';

let router = express.Router();

module.exports = (app) => {

    var info = new Info();

    router.get('/', info.findAll);

    router.get('/:id', info.findById);

    router.post('/', Auth.hasAuthorization, info.create);

    router.put('/:id', Auth.hasAuthorization, info.update);

    router.delete('/:id', Auth.hasAuthorization, info.delete);

    app.use('/infos', router);

};
