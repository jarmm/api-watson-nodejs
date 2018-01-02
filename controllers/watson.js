'use strict'

require('dotenv').config()

const DiscoveryV1 = require('watson-developer-cloud/discovery/v1')

const discovery = new DiscoveryV1({
    username: process.env.DISCOVERY_USERNAME,
    password: process.env.DISCOVERY_PASSWORD,
    version_date: process.env.DISCOVERY_VERSION_DATE
  })

function getEnvironments (req, res, next) {
    discovery.getEnvironments({}, (error, data) => {
        if(error) {
            next(error)
        } else {
            res.status(200).send({ data })  
        } 
    })
}

function getCollection (req, res, next) {
    discovery.getCollection({ 
        environment_id: req.query.environmentId, 
        collection_id: req.query.collectionId }, (error, data) => {
            if(error) {
                next(error)
            } else {
                res.status(200).send({ data })  
            }  
      })
}

function getWord (req, res, next) {
    discovery.query({ 
        environment_id: req.query.environmentId, 
        collection_id: req.query.collectionId, 
        query: req.query.word}, (error, data) => {
            if(error) {
                next(error)
            } else {
                res.status(200).send({ data })  
            }
        })
}

module.exports = {
    getEnvironments,
    getWord,
    getCollection
}  