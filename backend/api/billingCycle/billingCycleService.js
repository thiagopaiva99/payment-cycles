const BillingCycle = require('./billingCycle')

// const _ = require('lodash')

BillingCycle.methods([
  'get',
  'post',
  'put',
  'delete'
])

BillingCycle.updateOptions({
  new: true,
  runValidators: true
})

/* BillingCycle.after('post'. sendErrorsOrNext).after('put', sendErrorsOrNext)

const sendErrorsOrNext = ( req, res, next ) => {
  const bundle = res.locals.bundle

  if ( bundle.errors ) {
    let errors = parseErrors( bundle.errors )
    res.status( 500 ).json({ errors })
  } else {
    next()
  }
}

const parseErrors = ( nodeRestfulErrors ) => {
  const errors = []
  _.forIn( nodeRestfulErrors, error => errors.push( error.message ))

  return errors
} */

BillingCycle.route('count', ( req, res, next )=> {
  BillingCycle.count(( err, value ) => {
    if ( err ) res.status( 500 ).json({ errors: [ err ] })
    else res.json({ value })
  })
})

module.exports = BillingCycle
