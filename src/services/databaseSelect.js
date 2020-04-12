module.exports = {
  databaseSelect: () => {
    if (process.env.NODE_ENV === "test") {
      return process.env.NAME_DATABASE_TEST;
    } else {
      return process.env.NAME_DATABASE;
    }
  },
};
