let users = [];
let nextId = 1;

exports.getAllUsers = () => users;

exports.getUserById = (id) => users.find(user => user.id === id);

exports.createUser = ({ name, email }) => {
    const newUser = { id: nextId++, name, email };
    users.push(newUser);
    return newUser;
};

// pour les tests : réinitialiser l'état interne
exports.reset = () => {
    users = [];
    nextId = 1;
};