const { asValue, asFunction } = require('awilix')

module.exports = ({
    database: asFunction(({ logger }) => ({
        connect: () => { logger.info('[DATABASE-MOCK] "Connected"') },
        disconnect: () => { logger.info('[DATABASE-MOCK] "Disconnected"') },
    })),
    dataPersistence: asValue({
        createEntityA: () => ({}),
        updateEntityA: () => ({}),
        createEntityB: () => ({}),
        updateEntityB: () => ({}),
    }),
    dataQuery: asValue({
        getEntityAById: () => ({}),
        searchEntityA: () => [],
    }),
})