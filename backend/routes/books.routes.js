//exporting the routes


module.exports = app => {

    var router = require("express").Router();
    const books = require("../controllers/books.controller.js");

    //create a new  book
    router.post('/', books.create);

    //fetch all books
    router.get('/', books.findAll);

    //published books
    router.get('/published', books.findAllPublished);

    //a single book id wise
    router.get('/:id', books.findOne);

    //update book with id wise
    router.put('/:id', books.update);

    //delete book with id
    router.delete('/:id', books.delete);

    //delete all books
    router.delete('/', books.deleteAll);

    app.use('/api/books', router);
}