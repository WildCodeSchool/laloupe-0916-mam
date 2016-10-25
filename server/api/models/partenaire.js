import mongoose from 'mongoose';

const partenairesSchema = new mongoose.Schema({
    logoPartenaire: String,
    titrePartenaire: String,
    descriptionPartenaire: String
});

let model = mongoose.model('Partenaire', partenairesSchema);

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
                logoPartenaire: req.body.logoPartenaire,
                titrePartenaire: req.body.titrePartenaire,
                descriptionPartenaire: req.body.descriptionPartenaire
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
            logoPartenaire: req.body.logoPartenaire,
            titrePartenaire: req.body.titrePartenaire,
            descriptionPartenaire: req.body.descriptionPartenaire
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
        });
    }
}
