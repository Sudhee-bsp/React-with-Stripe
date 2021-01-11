const cors = require('cors');
const express = require('express');
const stripe = require('stripe')("sk_test_hG1gB9vFE7dQbRnpJWuAe45V00nvZwYnPN");
const uuid = require('uuid/v4');
const path = require('path')

const app = express();

//middleware
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '/build')));

//routes
app.get('/', (req, res) => {
    res.send("It works at LCO");
})


app.post("/payment", (req, res) => {

    const { product, token } = req.body;
    console.log("PRODUCT ", product);
    console.log("PRICE ", product.price);

    const idempotencykey = uuid();        //used for not money charging user twice

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of product.name`,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        }, { idempotencykey })
    })
        .then(result => res.send(200).json(result))
        .catch(err => console.log(err))

})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

//listen
app.listen(8282, () => console.log("Listening to port 8282"))