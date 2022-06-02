import mongoose from 'mongoose';


// création du shema category
const catsSchema = new mongoose.Schema({
    name: String
})

// création du model Cat
export const Category = mongoose.model('category', catsSchema);


