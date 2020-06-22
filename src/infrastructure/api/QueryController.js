module.exports = ({ queryOperations }) => ({

    getEntityAById: async (req, res, next) => {
        try {
            const { params : { entityId } } = req
            const result = await queryOperations.getEntityAById({ entityId })
            res.status(200).json(result).end()
        } catch (err) {
            next(err)
        }
    },

    searchEntityA: async (req, res, next) => {
        try {
            const { query: { search, status }} = req
            const result = await queryOperations.searchEntityA({ search, status })
            res.status(200).json(result).end()
        } catch (err) {
            next(err)
        }
    }

})