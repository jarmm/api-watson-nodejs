'use strict'

require('dotenv').config()
const NaturalLanguageClassifierV1 = require('watson-developer-cloud/natural-language-classifier/v1')
/*
const natural_language_classifier = new NaturalLanguageClassifierV1({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    version: process.env.NLC_VERSION_DATE
})
*/
function getClassifier (req, res, next) {
    classifier.classify({
        text: req.body.text,
        classifier_id: req.body.classifierId,
    }, (error, data) => {
        if (error) {
          return next(error);
        }
        return res.json(data);
    })
}

module.exports = {
    getClassifier
}