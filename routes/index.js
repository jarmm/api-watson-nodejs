'use strict'

const express = require('express')
const api = express.Router()
const discoveryCtrl = require('../controllers/discovery')
const naturalLanguageClassifierCtrl = require('../controllers/natural-language-classifier')
const naturalLanguageUnderstandingCtrl = require('../controllers/natural-language-understanding')

/** Discovery */
api.get('/environments', discoveryCtrl.getEnvironments)
api.get('/searchWord', discoveryCtrl.getWord)
api.get('/collection', discoveryCtrl.getCollection)

/** Natural Languague Classifier */
//api.get('/classifier', naturalLanguageClassifierCtrl.getClassifier)

/** Natural Languague Unserstanding */
api.get('/nlu', naturalLanguageUnderstandingCtrl.getAnalyzeNlu)

module.exports = api
