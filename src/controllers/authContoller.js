const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');

const authController = {};

authController.register = async (req, res) => {
    try {
        const { name, email, password, role, vehicles } = req.body;

        const exsitingUser = await User.findOne({ email });
        if (exsitingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role,
            vehicles
        })

        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports = authController;