// require('dotenv').config();

// const express = require('express');
// const router = express.Router();
// const braintree = require('braintree');
// // const useNetworkToken = process.env.USE_NETWORK_TOKEN === 'true';

// router.post('/', (req, res, next) => {
//   const gateway = new braintree.BraintreeGateway({
//     environment: braintree.Environment.Production,
//     // Use your own credentials from the sandbox Control Panel here
//     merchantId: process.env.MERCHANT_ID,
//     publicKey: process.env.PUBLIC_API_KEY,
//     privateKey: process.env.PRIVATE_API_KEY
//   });

//   // Use the payment method nonce here
//   const nonceFromTheClient = req.body.paymentMethodNonce;
//   console.log(nonceFromTheClient);
//   // Create a new transaction for $10

//   const newTransaction = gateway.transaction.sale({
//     amount: '1.00',
//     paymentMethodNonce: nonceFromTheClient,
//     merchantAccountId: process.env.MERCHANT_ACCOUNT_ID,
//     options: {
//       // This option requests the funds from the transaction
//       // once it has been authorized successfully
//       submitForSettlement: true
//     }
//   }, (error, result) => {
//       if (result) {
//         res.send(result);
//       } else {
//         res.status(500).send(error);
//       }
//   });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const braintree = require('braintree');

router.post('/', (req, res, next) => {
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Production,
    // Use your own credentials from the sandbox Control Panel here
    merchantId: process.env.MERCHANT_ID,
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY
  });
  // Use the payment method nonce here
  // console.log(JSON.stringify(req.body));
  const nonceFromTheClient = req.body.paymentMethodNonce;
  // Create a new transaction for $10
  const newTransaction = gateway.transaction.sale({
    amount: '1.00',
    paymentMethodNonce: nonceFromTheClient,
    merchantAccountId: "fat-zebra-ca-aud",
    options: {
      // This option requests the funds from the transaction
      // once it has been authorized successfully
      submitForSettlement: false,
      storeInVault: true
    }
  }, (error, result) => {
    if (result) {
      console.log("printing result");
      console.log(result);
      res.send(result);
    } else {
      console.log("printing error");
      console.error(error);
      res.status(500).send(error);
    }
  });
});

module.exports = router;
