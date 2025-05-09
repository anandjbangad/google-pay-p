# android-pay-test-environment

## Android Pay Test Environment
This is a repo for the [Braintree Drop-in UI](https://developer.paypal.com/braintree/docs/guides/drop-in/overview) with the GooglePay button enabled.

## Set Up Environment
To get up and running, you'll need to have a [Braintree Sandbox](https://login.braintreegateway.com) merchant account that is set to to accept GooglePay.

Once you have your `merchantId` and a merchant account with GooglePay enabled and the `merchantAccountId` for this merchant account, create a `.env` file with the following contents:
```
MERCHANT_ID="<your_merchant_id>"
MERCHANT_ACCOUNT_ID="<your_merchant_account_id>"
PUBLIC_API_KEY="<your_public_api_key>"
PRIVATE_API_KEY="<your_private_api_key>"
USE_NETWORK_TOKEN="false"
```

## To Run the UI in a cpair
SSH into your Cpair with forwarding of port 3000

```
cpair ssh --forward 3000
```

After ensuring you have updated the `merchantId`, `merchantAccountId`, `publicKey`, and `privateKey` parameters, run the following to start the server:

```
npm ci && npm start
``` 

Then open `http://localhost:3000` in your browser.
