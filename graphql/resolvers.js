module.exports = {
  Query: {
    getUsers: () => {
      const users = [
        {
          username: 'john',
          email: 'john@email.com'
        },
        {
          username: 'alice',
          email: 'alice@email.com'
        },
      ];

      return users;

    }
  },
};