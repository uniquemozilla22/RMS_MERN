const connection = (mongoose) => {
  const database = mongoose.connection;
  const uri =
    "mongodb+srv://" +
    process.env.USERNAME_DB +
    ":" +
    process.env.PASSWORD_DB +
    "@cluster0.etwiv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  database.once("open", () => {
    console.log("Database connection sucessful");
  });
};

module.exports = connection;
