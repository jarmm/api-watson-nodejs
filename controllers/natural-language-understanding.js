'use strict'

require('dotenv').config()
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js')
const nlu = new NaturalLanguageUnderstandingV1({
    //TODO: CAMBIAR,  se dejan en duro debido a que cuenta ibm no permitía otro servicio, cuenta de sbstn
    //username: process.env.USERNAME,
    //password: process.env.PASSWORD,
    username: '793d485c-1558-4097-991f-34b155c931ec',
    password: 'HlVo3OYSvIVW',
    version_date: process.env.NLU_VERSION_DATE
  })

function getAnalyzeNlu (req, res, next) {
    nlu.analyze(
        {
            text: req.query.text, // <text>, <hmtl>, <url>
            features: {
                'sentiment': {},
                'emotion': {},
                'semantic_roles': {},
                'categories': {},
                'relations': {},
                //'metadata': {}, sólo para URL o HTML
                'entities': {
                    'emotion': true,
                    'sentiment': true,
                    'limit': 2
                },
                concepts: {
                    'limit': 3
                },
                keywords: {
                    'emotion': true,
                    'sentiment': true,
                    'limit': 2
                }
            }
        },
        (error, data) => {
            if (error) {
                return next(error)
            }
            return res.json(data);
        }
    )
}

module.exports = {
    getAnalyzeNlu
}