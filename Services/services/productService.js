const sendResponse = () => {
    return "Fetching all products";
}

const sendResponseById = (id) => {
    return "Fetching product with ID: " + id ;
}

const sendResponseForAddProduct = () =>{
    return "Adding a new product";
}

module.exports = {
    sendResponse,
    sendResponseById,
    sendResponseForAddProduct
}