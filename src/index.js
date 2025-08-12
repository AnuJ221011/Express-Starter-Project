const express = require('express');
// const User = require('./schema/userSchema')
// const bodyParser = require('body-parser');
const serverCongif = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute'); 
const cartRouter = require('./routes/cartRoute');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.text()); // Middleware to parse text bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

//routing middleware
app.use('/users', userRouter);
app.use('/carts', cartRouter);  

app.listen(serverCongif.PORT, async () => {
    await connectDB();
    console.log(`Server is running on port ${serverCongif.PORT}`);

    // const newUser = await User.create({
    //     firstName: 'Ankit',
    //     lastName: 'kumar',
    //     email: '9Sb7a@example.com',
    //     mobileNumber: '1234567890',
    //     password: 'password123'
    // });
    // console.log('New user created:', newUser);
});



