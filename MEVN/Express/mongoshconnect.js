const mongoose = require("mongoose");
const url = "mongodb://0.0.0.0:27017/social";

const userSchema = new mongoose.Schema(
    {
        _id: Number,
       name: String,
        email: String,
    },
    { _id: false }
);
const User = new mongoose.model("user",userSchema);
async function run() {
    try {
        await mongoose.connect(url);
        const user = User({ name:"mayur", email:"mayur@gmail.com", _id: 7});
        await user.save();
        const docs = await User.find({});
        docs.forEach((doc) => console.log(doc));
    }   catch (error) {
        console.error(error);
    }   finally {
        await mongoose.disconnect();
    }
}
run();