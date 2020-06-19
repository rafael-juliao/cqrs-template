const { asFunction } = require('awilix')

module.exports = ({
    messageBroker: asFunction(({ logger }) => ({
        connect: () => { logger.info('[MESSAGE-MOCK] "Connected"') },
        disconnect: () => { logger.info('[MESSAGE-MOCK] "Disconnected"') },
    })),
    messageChannel: asFunction(({ logger }) => ({
        subscribe: (event) => { logger.info(`[MESSAGE-MOCK] "Subscribed" to ${event}`) },
        unsubscribe: (event) => { logger.info(`[MESSAGE-MOCK] "UNSubcribed" from ${event}`) },
    })),
})