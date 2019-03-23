const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
// Create the schema
const PartnerSchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    companyLocation: {
        type: String,
        required: true
    },
    partners:[
        {
            id:String
        }
    ],
    events:[
        {
            id:String,
            name:String,
            startDate: Date,
            endDate: Date
    }      
    ],
    vacancies:[
        {
            id:String
        }
    ],
    projects:[
        {
            id:String,
            name:String,
            startDate: Date,
            endDate: Date
        }
    ]
    ,
    field: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = Partner = mongoose.model('partners', PartnerSchema)