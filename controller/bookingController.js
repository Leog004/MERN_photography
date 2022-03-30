const stripe = require('stripe')(process.env.STRIPE_SK);
//const Tour = require('../models/tourModel');
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const Event = require('../models/eventModel');
const AppError = require('../utils/appError');
const Email = require('../utils/email');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1). Get the currently booked tour session
  const tour = ''; //await Tour.findById(req.params.tourId);

  if (!tour) next(new AppError('no tour found with that ID'));

  // 2). Create checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}/my-booking/?tour=${
      req.params.tourId
    }&user=${req.user.id}&price=${tour.price}`,
    cancel_url: `${req.protocol}://${req.get('host')}/tour/${tour.slug}`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourId,
    line_items: [
      {
        name: `${tour.name} Tour`,
        description: tour.summary,
        images: [
          `https://images.unsplash.com/photo-1647883692112-722fdd2ddd86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
        ],
        amount: tour.price * 100,
        currency: 'usd',
        quantity: 1,
      },
    ],
  });

  if (!session) next(new AppError('Something went wrong'));

  // 3) Create session as response
  res.status(200).json({
    status: 'success',
    session,
  });
});

// exports.createBookingCheckout = catchAsync(async (req, res, next) => {
//   const { tour, user, price } = req.query;

//   if (!tour && !user && !price) return next();

//   await Booking.create({ tour, user, price });

//   const getUser = await User.findById(user);
//   //const getTour = await Tour.findById(tour);

//   await new Email(getUser, req.query).sendBooking(getTour);

//   res.status(200).json({ status: 'success' });
// });

exports.createBookingEvent = catchAsync(async (req, res, next) => {
  const user = req.user._id;
  const { event, price } = req.body;

  if (!user && !event) return next(new AppError('something went wrong'));

  const newEvent = await Event.create({
    user: user,
    name: event.name,
    description: event.description,
    eventType: event.eventType,
    location: event.location,
    time: event.time,
    date: event.date,
  });

  await Booking.create({
    event: newEvent._id,
    user: user,
    price: price,
  });

  // const getUser = await User.findById(user);

  // await new Email(getUser, '').sendBooking();

  res.status(200).json({ status: 'success' });
});

exports.getMyBookings = catchAsync(async (req, res, next) => {
  const user = req.user._id;

  if (!user) return next(new AppError('No user is found'));

  const bookings = await Booking.find({
    where: { user },
    sort: {
      createdAt: -1, //Sort by Date Added DESC
    },
  }).select('-user');

  return res.status(200).json({ status: 'success', bookings });
});

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
