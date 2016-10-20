import mongoose from 'mongoose';

const infosSchema = new mongoose.Schema({
    logoInfo: String,
    descriptionInfo: String
});

let model = mongoose.model('Info', infosSchema);

export default class Info {

    findAll(req, res) {
        model.find({}, (err, infos) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(infos);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, info) => {
            if (err || !info) {
                res.sendStatus(403);
            } else {
                res.json(info);
            }
        });
    }

    create(req, res) {
        model.create({
                logoInfo: req.body.logoInfo,
                descriptionInfo: req.body.descriptionInfo
            },
            (err, info) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(info);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            logoInfo: req.body.logoInfo,
            descriptionInfo: req.body.descriptionInfo
        }, (err, info) => {
            if (err || !info) {
                res.status(500).send(err.message);
            } else {
                res.json(info);
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
