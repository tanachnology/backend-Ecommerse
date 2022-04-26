import Product from '../models/Product'

export const createProduct = async (req, res) => {
    const {name, category, price, imgURL} =  req.body
    const newProduct = new Product({name, category, price, imgURL})
    const productSaved = await newProduct.save()
    res.status(201).json(productSaved)
}

export const getproducts = async (req, res) => {
    const products = await Product.find();
    res.json(products)
}

export const getproductById = async (req, res) => {
    const { productId } = req.params;

    const product = await Product.findById(productId);
    res.status(200).json(product);
}

export const updateProductById = async (req, res) => {
    const { productId } = req.params;

    const updateProduct = await Product.findByIdAndUpdate(productId, req.body,{
        new:true
    })
    res.status(200).json(updateProduct)
}

export const deleleProductById = async (req, res) => {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId)
    res.status(204).json()
}

