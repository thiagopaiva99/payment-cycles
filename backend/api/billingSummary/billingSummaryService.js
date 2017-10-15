const _ = require('lodash')

const BillingCycle = require('../billingCycle/billingCycle')

const getSummary = ( req, res ) => {
  BillingCycle.aggregate({
      $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" }}
    }, {
      $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" }}
    }, {
      $project: { _id: 0, credit: 1, debt: 1 }
    },
    ( err, response ) => {
      if ( err ) {
        res.status( 500 ).json({ errors: [ err ] })
      } else {
        res.json( _.defaults( response[0], { credit: 0, debt: 0} ))
      }
    })
}

module.exports = { getSummary }
