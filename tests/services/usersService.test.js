const usersService = require('../../app/services/usersService');

beforeEach(() => {
    usersService.reset();
});

test('createUser adds a new user', () => {
    const user = usersService.createUser({ name: 'Alice', email: 'alice@example.com' });
    expect(user.id).toBe(1);
    expect(user.name).toBe('Alice');
});

test('getAllUsers returns users', () => {
    usersService.createUser({ name: 'Bob', email: 'bob@example.com' });
    const users = usersService.getAllUsers();
    expect(users.length).toBe(1);
});