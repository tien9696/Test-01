const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    institution: String,
    degree: String,
    start_date: Date,
    end_date: Date
});

const skillSchema = new mongoose.Schema({
    skill_name: String
});

const projectSchema = new mongoose.Schema({
    project_name: String,
    description: String,
    role: String,
    start_date: Date,
    end_date: Date
});

const workExperienceSchema = new mongoose.Schema({
    company_name: String,
    role: String,
    start_date: Date,
    end_date: Date
});

const interestSchema = new mongoose.Schema({
    interest: String
});

const goalSchema = new mongoose.Schema({
    goal: String
});

const profileSchema = new mongoose.Schema({
    full_name: String,
    birth_date: Date,
    birth_place: String,
    nationality: String,
    education: [educationSchema],
    skills: [skillSchema],
    projects: [projectSchema],
    work_experience: [workExperienceSchema],
    interests: [interestSchema],
    goals: [goalSchema]
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
