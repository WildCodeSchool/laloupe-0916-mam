import mongoose from 'mongoose';

const infoPratiqueSchema = new mongoose.Schema({
    p: String,
    link: String
});

let model = mongoose.model('InfoPratique', infoPratiqueSchema);

export default class InfoPratique {

    findAll(req, res) {
        model.find({}, (err, infoPratiques) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(infoPratiques);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, infoPratique) => {
            if (err || !infoPratique) {
                res.sendStatus(403);
            } else {
                res.json(infoPratique);
            }
        });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            p: req.body.p,
            link: req.body.link
        }, (err, infoPratique) => {
            if (err || !infoPratique) {
                res.status(500).send(err.message);
            } else {
                res.json(infoPratique);
            }
        });
    }
}
