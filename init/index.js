const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("Connected to DB");
        initDB();
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async() => {
    try {
        await Listing.deleteMany({});
        initData.data = initData.data.map((obj) => ({...obj, owner: "69f089d5f6be17a50a820541" }));
        await Listing.insertMany(initData.data);
        console.log("data was initialized");
    } catch (err) {
        console.log(err);
    }
};

// initDB();