const Profile = require('../models/profileModel.js');
const User = require('../models/userModel.js');

exports.createProfile = async (req, res) => {
    const profileData = req.body;
    try {
        const profile = new Profile(profileData);
        await profile.save();
        await User.findByIdAndUpdate(req.user.id, { profile_id: profile._id });
        res.status(201).json({ message: 'Profile created successfully', profile });
    } catch (error) {
        res.status(500).json({ message: 'Error creating profile', error });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('profile_id');
        if (!user || !user.profile_id) return res.status(404).json({ message: 'Profile not found' });
        res.json({ profile: user.profile_id });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching profile', error });
    }
};

exports.updateProfile = async (req, res) => {
    const profileData = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (!user || !user.profile_id) return res.status(404).json({ message: 'Profile not found' });
        const profile = await Profile.findByIdAndUpdate(user.profile_id, profileData, { new: true });
        res.json({ message: 'Profile updated successfully', profile });
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile', error });
    }
};

exports.deleteProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user || !user.profile_id) return res.status(404).json({ message: 'Profile not found' });
        await Profile.findByIdAndDelete(user.profile_id);
        user.profile_id = null;
        await user.save();
        res.json({ message: 'Profile deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting profile', error });
    }
};
