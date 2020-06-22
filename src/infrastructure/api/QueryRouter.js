const { Router } = require('express')
const bodyParser = require('body-parser')
    
const createRouter = routes => {
    const router = Router()
    router.use(bodyParser.json())
    for (const { path, validator, controller } of routes) 
        router.get(path, validator, controller)
    return router
}

module.exports = ({ queryController, queryValidator }) => createRouter([
    {
        path: '/entityA/:entityId',
        validator: queryValidator.getEntityAById,
        controller: queryController.getEntityAById,
    },
    {
        path: '/entityA',
        validator: queryValidator.searchEntityA,
        controller: queryController.searchEntityA,
    },
])