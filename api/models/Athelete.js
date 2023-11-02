const mongoose = require('mongoose');
const {Schema} = mongoose;

// to retrieve data from qualified registered athlete
const athleteSchema = new mongoose.Schema({
    athlete: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    photo: [String],
    sport: String, // sport title. Football, Swimming, Boxing etc
    school: String,
    name: String,
    age: Number,
    weight: String,
    height: String,
    bio: String, //short words from athlete
});

const AthleteModel = mongoose.model('Athlete', athleteSchema);

module.exports = AthleteModel;
