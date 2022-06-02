// creation du shema toy
const toysSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category_id: [{type : ObjectId, ref : 'category'}]
});

// création de model Toy
export const Toy = mongoose.model('toy', toysSchema);
