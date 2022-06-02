import { Category } from "../models/category.js";

// function creation de nouvelle category
export async function createCategory(name) {
    const category = await new Category(
        name
    );

    const result = await category.save();
    return category
}

// function show all category
export async function listCategory() {
    const categories = await Category
        .find()
        .select('name');
    return categories
}

// function show one category
export async function showOneCat(name){
    const myCat = await Category
        .findOne({ name : name}).exec();
        return myCat
}