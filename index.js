const mongoose = require('mongoose');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to db
const db = mongoose.connect('mongodb://localhost/ordercli', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});


// Import model
const Order = require('./models/order');

// Add Order
const addOrder = (order) => {
  // console.log("here");
  // console.log(order);
  Order.create(order).then(order => {
    console.info('New Order Added');
    // db.close();
  });
}

// Find Order
const findOrder = (name) => {
  // Make case insensitive
  const search = new RegExp(name, 'i');
  Order.find({name: search})
    .then(order => {
      console.info(order);
      console.info(`${order.length} matches`);
      // db.close();
    });
}


// Export All Methods
module.exports = {
  addOrder,
  findOrder
}
