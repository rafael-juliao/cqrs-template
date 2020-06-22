const Events = require('../../domain/replication/DomainEvents')

module.exports = {
    [Events.ENTITY_A_CREATED]: { channel: 'entity-a-created' },
    [Events.ENTITY_A_UPDATED]: { channel: 'entity-a-update' },
    [Events.ENTITY_B_CREATED]: { channel: 'entity-b-created' },
    [Events.ENTITY_B_UPDATED]: { channel: 'entity-b-update' },
}