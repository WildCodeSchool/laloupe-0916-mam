import mongoose from 'mongoose';

const partenaireSchema = new mongoose.Schema({
    titre: String,
    p: String,
    link: String
});

let model = mongoose.model('Partenaire', partenaireSchema);

export default class Partenaire {

    findAll(req, res) {
        model.find({}, (err, partenaires) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(partenaires);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, partenaire) => {
            if (err || !partenaire) {
                res.sendStatus(403);
            } else {
                res.json(partenaire);
            }
        });
    }

    create(req, res) {
        model.create({
                titre: req.body.titre,
                p: req.body.p,
                link: req.body.link
            },
            (err, partenaire) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(partenaire);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            titre: req.body.titre,
            p: req.body.p,
            link: req.body.link
        }, (err, partenaire) => {
            if (err || !partenaire) {
                res.status(500).send(err.message);
            } else {
                res.json(partenaire);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        })
    }
}
