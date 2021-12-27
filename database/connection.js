const connection = (mongoose) => {
  const database = mongoose.connection;
  const uri =
    "mongodb+srv://" +
    process.env.USERNAME_DB +
    ":" +
    process.env.PASSWORD_DB +
    "@cluster0.090mw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  console.log(process.env.USERNAME_DB, process.env.PASSWORD_DB);

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  database.once("open", () => {
    console.log("Database Connected with :", process.env.USERNAME_DB);
  });
};

module.exports = connection;
