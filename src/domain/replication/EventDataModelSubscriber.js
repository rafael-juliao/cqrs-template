module.exports = ({
    eventDataModel,
    eventSubscriber,
}) => ({
    subscribe: async () => {
        for (const { event, operation } of eventDataModel)
            await eventSubscriber.subscribe(event, operation)
    },
    unsubscribe: async () => {
        for (const { event } of eventDataModel)
            await eventSubscriber.unsubscribe(event)
    }
})