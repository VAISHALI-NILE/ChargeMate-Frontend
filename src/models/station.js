const mongoose = require('mongoose');

const chargingStationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      hours: String,
      phone: String,
      emails: [String],
      coordinates: {
        latitude: {
          type: Number,
          required: true
        },
        longitude: {
          type: Number,
          required: true
        }
      },
      reviewsCount: {
        type: Number,
        default: 0
      },
      totalScore: {
        type: Number,
        default: 0
      },
      website: String,
      category: String,
      claimed: {
        type: Boolean,
        default: false
      }
    });

const ChargingStation = mongoose.model('Stations', chargingStationSchema);

module.exports = ChargingStation;
