const authConfig = {
  jwt: {
    secret: process.env.APP_SECRET || 'default',
    expiresIn: '7d',
  },
};

export { authConfig };
