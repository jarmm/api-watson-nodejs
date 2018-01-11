'use strict'

const express = require('express')
const api = express.Router()
const discoveryCtrl = require('../controllers/discovery')
const naturalLanguageClassifierCtrl = require('../controllers/natural-language-classifier')

/** Discovery */
api.get('/environments', discoveryCtrl.getEnvironments)
api.get('/searchWord', discoveryCtrl.getWord)
api.get('/collection', discoveryCtrl.getCollection)

/** Classifier */
api.get('/classifier', naturalLanguageClassifierCtrl.getClassifier)

module.exports = api
