
module.exports = (api) => {
  api.describe({
    key: 'plugin',
    config: {
      default: {
        foo: 'foo',
      },
    },
  });
};
