const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requieLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/api/stripe", requieLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id
    });
    // whenever a user sign in passport initialize the user model in req.user
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
