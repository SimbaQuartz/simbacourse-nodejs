const authenticationApp = (req, res, next) => {
  //logic to authenticate user
  console.log("Authentication  is successful!!!");
  next();
};

module.exports = authenticationApp;
