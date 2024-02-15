const Product = require('../models/products.model');

function getProducts(req,res) {
    res.render('admin/products/all-products');
};

function getNewProduct(req,res) {
    res.render('admin/products/new-products');
};

async function createNewProduct(req, res, next) {
    const product = new Product({
        ...req.body,
        image:req.file.filename
    });

    try{
        await product.save();
    } catch(error) {
        next(error);
        return;
    }


    res.redirect('/admin/products');
};

module.exports = {
    getNewProduct:getNewProduct,
    getProducts:getProducts,
    createNewProduct:createNewProduct
}
