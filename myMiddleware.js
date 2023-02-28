const maulikMiddleware = (req, res, next) => {
  const method = req.method;
  const url = req.url;

  console.log(method, url);
  console.log("Request is about to finish...");
  // res.send("Hey you! I am here....");
  next();
};

module.exports = maulikMiddleware;
