const Joi = require('@hapi/joi')
const ExpressValidator = require('@rafael-juliao/joi-express-middleware')

module.exports = () => ({
    getEntityAById: ExpressValidator({
        params: Joi.object().keys({
            entityId: Joi.string().required()
        })
    }),
    searchEntityA: ExpressValidator({
        query: Joi.object().keys({
            search: Joi.string().optional(),
            status: Joi.string().valid('active', 'created').optional()
        })
    })
})