/* eslint-disable no-console */
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../../models/userModel');
const Event = require('../../models/eventModel');
const ViewGallery = require('../../models/viewGalleryModel');
const ViewHome = require('../../models/viewHomeModel');

dotenv.config({ path: './.env' });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB Connection Successful'))
  .catch((err) => console.log(err));

// READ JSON FILE
const events = JSON.parse(fs.readFileSync(`${__dirname}/events.json`, 'utf-8'));
const viewGallery = JSON.parse(
  fs.readFileSync(`${__dirname}/viewGallery.json`, 'utf-8')
);
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
const viewHome = JSON.parse(
  fs.readFileSync(`${__dirname}/viewHome.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    //await Event.create(events);
    //await ViewGallery.create(viewGallery);
    await ViewHome.create(viewHome);
    //await EventGallery.create(eventsGallery);
    //await User.create(users, { validateBeforeSave: false });
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    //await Event.deleteMany();
    //await EventGallery.deleteMany();
    //await User.deleteMany();
    await ViewHome.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
