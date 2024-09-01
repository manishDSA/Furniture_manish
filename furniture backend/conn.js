const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.URL);
mongoose.connection.on('connected', () => console.log('connected'));

const { Schema } = mongoose;
const contactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    message: String
});



const Contact = mongoose.model('Contact', contactSchema);


const orderschema = new Schema({
    formdata: {
      country:String,
      firstname: String,
      lastname: String,
      companyName: String,
      address: String,
      state: String,
      Zip: String,
      email: String,
      phoneNo: String,
      Notes: String,
    },
    cartdata: [
      {
        id:Number,
        productImage: String,
        productName: String,
        productPrice: Number,
        pQuantity: Number,
      },
    ]
  })
const Order = mongoose.model('Order' ,orderschema)


module.exports = {Contact,Order}




