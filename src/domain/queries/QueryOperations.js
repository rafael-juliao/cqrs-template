module.exports = ({ dataQuery }) => ({

    getEntityAById: async ({ entityId }) =>
        await dataQuery.getEntityAById({ entityId }),

    searchEntityA: async ({ search, status }) =>
        await dataQuery.searchEntityA({ search, status }),

})