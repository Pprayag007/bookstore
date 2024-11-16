import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://comicvine.gamespot.com/a/uploads/scale_medium/6/67663/5274918-01.jpg",
    },
    title: {
        type: String,
        required: true,
    },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
