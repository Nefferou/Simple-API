const usersService = require('../services/usersService');

exports.getAllUsers = (req, res) => {
    const users = usersService.getAllUsers();
    res.json(users);
};

exports.getUserById = (req, res) => {
    const user = usersService.getUserById(parseInt(req.params.id, 10));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
};

exports.createUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    const newUser = usersService.createUser({ name, email });
    res.status(201).json(newUser);
};