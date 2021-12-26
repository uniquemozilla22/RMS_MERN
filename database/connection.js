const uri =
  "mongodb+srv://" +
  process.env.USERNAME_DB +
  ":" +
  process.env.PASSWORD_DB +
  "@cluster0.etwiv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connection = (mongoose) => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const database = mongoose.connection;
  database.once("open", () => {
    console.log("Database connection sucessful");
  });
};

module.exports = connection;
