const token = {
  decodeAuthToken: ({ authToken }) => {
    const decodedToken = Buffer.from(authToken, 'base64').toString('utf-8').split(':');
    return {
      phone: decodedToken[0],
      decodedAuthToken: decodedToken[1],
    };
  },
};

module.exports = token;
