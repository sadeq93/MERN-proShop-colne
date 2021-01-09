const protect = (req, res, next) => {
  try {
      
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error("Not authorized, token failed");
  }

  next();
};
export { protect };
