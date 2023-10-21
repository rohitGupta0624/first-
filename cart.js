
const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart{
    static addProduct(id , productPrice){
        fs.readFile(p,(err,fileContent) =>{
            let cart = {products : [] , totalPrice : 0}
            if(!err){
                cart = JSON.parse(fileContent)
            }
            const existingProductindex = cart.products.findIndex(
                prod => prod.id === id
            );
            const existingProduct = cart.products[existingProductindex];
            let updateProduct;
            if(existingProduct){
                updateProduct = { ...existingProduct };
                updateProduct.qty = updateProduct.qty + 1;
                cart.products = [ ...cart.products ];
                cart.products[existingProductindex] = updateProduct;
            }else{
                updateProduct = {id: id , qty : 1};
                cart.products = [ ...cart.products, updateProduct];
            }
            cart.totalPrice = cart.totalPrice + + productPrice;
            fs.writeFile(p, JSON.stringify(cart),err => {
                if(err){
                    console.log(err);
                }
            })
        });
        
    }
}
