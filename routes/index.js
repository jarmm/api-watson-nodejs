'use strict'

const express = require('express')
const api = express.Router()
const watsonCtrl = require('../controllers/watson')

api.get('/environments', watsonCtrl.getEnvironments)
api.get('/searchWord', watsonCtrl.getWord)
api.get('/collection', watsonCtrl.getCollection)

module.exports = api
