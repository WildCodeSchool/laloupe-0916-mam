import mongoose from 'mongoose';

const activiteSchema = new mongoose.Schema({
    titre: String,
    p: String
});

let model = mongoose.model('Activite', activiteSchema);

export default class Activite {

    findAll(req, res) {
        model.find({}, (err, activites) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(activites);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, activite) => {
            if (err || !activite) {
                res.sendStatus(403);
            } else {
                res.json(activite);
            }
        });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            titre: req.body.titre,
            p: req.body.p
        }, (err, activite) => {
            if (err || !activite) {
                res.status(500).send(err.message);
            } else {
                res.json(activite);
            }
        });
    }
}
