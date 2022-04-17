const express = require('express');
const connectDB = require('./config/db');
const app = express();

//connect database
connectDB(); 

//Init middleware
app.use(express.json({extended: false}));

app.get('/',(req, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/register', require('./routes/api/register'));
app.use('/api/event', require('./routes/api/event'));
app.use('/api/scheduleevent', require('./routes/api/scheduleevent'));
app.use('/api/department', require('./routes/api/department'));
//app.use('/api/deletedept', require('./routes/api/deletedept'));

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

