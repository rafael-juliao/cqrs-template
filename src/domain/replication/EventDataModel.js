const DomainEvents = require('./DomainEvents')

module.exports = ({ dataPersistence }) => [
    {
        event: DomainEvents.ENTITY_A_CREATED,
        operation: async entityA =>
            await dataPersistence.createEntityA(entityA),
    },
    {
        event: DomainEvents.ENTITY_A_UPDATED,
        operation: async entityA =>
            await dataPersistence.updateEntityA(entityA._id, entityA),
    },
    {
        event: DomainEvents.ENTITY_B_CREATED,
        operation: async entityB =>
            await dataPersistence.createEntityB(entityB),
    },
    {
        event: DomainEvents.ENTITY_B_UPDATED,
        operation: async entityB =>
            await dataPersistence.updateEntityB(entityB._id, entityB),
    },
]