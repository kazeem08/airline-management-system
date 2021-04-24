const mongoose = require('mongoose');
const mongoDbUrl = process.env.MONGODB_URL;

/**
 * A MongoDB client based on mongoose
 * To use, simply set an environment variable MONGODB_CONNECTION_STRING to a valid mongodb connection uri
 */
async function init() {
    await mongoose.connect(mongoDbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(() => console.log('connect to mongodb')).catch(e => {
        console.log('error connecting to mongo', e);
        process.exit(1);
    });
}
module.exports = init;