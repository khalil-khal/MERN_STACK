const { Product } = require("../model/product.model");

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}


module.exports.createProduct = (request, response) => {
    const { title, price , description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getAll = (request, response) => {

Product.find()
.then(result => res.json(result))
.catch(err => console.log(err))

}