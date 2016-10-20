import express from 'express';
import Info from '../models/info.js';

let router = express.Router();

module.exports = (app) => {

    var info = new Info();

    router.get('/', info.findAll);

    router.get('/:id', info.findById);

    router.post('/', info.create);

    router.put('/:id', info.update);

    router.delete('/:id', info.delete);

    app.use('/infos', router);

};
