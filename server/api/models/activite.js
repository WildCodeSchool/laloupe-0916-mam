import mongoose from 'mongoose';

const activitesSchema = new mongoose.Schema({
    logoActivite: String,
    titreActivite: String,
    descriptionActivite: String
});

let model = mongoose.model('Activite', activitesSchema);

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

    create(req, res) {
        model.create({
                logoActivite: req.body.logoActivite,
                titreActivite: req.body.titreActivite,
                descriptionActivite: req.body.descriptionActivite
            },
            (err, activite) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(activite);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            logoActivite: req.body.logoActivite,
            titreActivite: req.body.titreActivite,
            descriptionActivite: req.body.descriptionActivite
        }, (err, activite) => {
            if (err || !activite) {
                res.status(500).send(err.message);
            } else {
                res.json(activite);
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
        });
    }
}
