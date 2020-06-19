const Events = require('../../domain/events/DomainEvents')

module.exports = {
    [Events.OFFER_CREATED]: { channel: 'offer-created' },
    [Events.OFFER_UPDATED]: { channel: 'offer-update' },
    [Events.PRODUCT_CREATED]: { channel: 'product-created' },
    [Events.PRODUCT_UPDATED]: { channel: 'product-update' },
}