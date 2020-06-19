const { asValue, asFunction } = require('awilix')

module.exports = ({
    database: asFunction(({ logger }) => ({
        connect: () => { logger.info('[DATABASE-MOCK] "Connected"') },
        disconnect: () => { logger.info('[DATABASE-MOCK] "Disconnected"') },
    })),
    dataPersistence: asValue({
        saveProduct: () => ({}),
        updateProduct: () => ({}),
        saveOffer: () => ({}),
        updateOffer: () => ({}),
    }),
    dataQuery: asValue({
        getOfferById: () => ({}),
        searchOffers: () => [],
    }),
})