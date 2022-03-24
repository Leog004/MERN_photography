const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../../models/userModel');
const Event = require('../../models/eventModel');
const EventGallery = require('../../models/eventGallery');

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
const eventsGallery = JSON.parse(
  fs.readFileSync(`${__dirname}/eventsGallery.json`, 'utf-8')
);
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Event.create(events);
    //await EventGallery.create(eventsGallery);
    await User.create(users, { validateBeforeSave: false });
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Event.deleteMany();
    await EventGallery.deleteMany();
    await User.deleteMany();
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
