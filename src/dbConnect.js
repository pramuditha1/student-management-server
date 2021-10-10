const mongoose = require('mongoose');

const CONNECTION_URL = 'mongodb+srv://admin:admin123@cluster0.n0uvi.mongodb.net/studentsdb?retryWrites=true&w=majority'

exports.dbConnect = async () => {
    try {
        await mongoose.connect(CONNECTION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`mongo db connected`);
    } catch (err) {
        console.log(err.message);
    }
}
