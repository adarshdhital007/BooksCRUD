const db = require('../models');
//model to be added

const Books = db.books;
const Op = db.Sequelize.Op;


//create and save a new book
exports.create = (req, res) => {
    //validate req
    if (!req.body.title) {
        //400 error implemented as bad error
        res.status(400).send({
            message: "not empty for now"
        });
        return;
    }
    //create books
    const books = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    //save in db
    Books.create(books).then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Error internal server'
        });
    });

};

//find all books
exports.findAll = (req, res) => {
    const title = req.body.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

    Books.findAll({ where: condition }).then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Error internal server'
        });
    });
};

//find a book with id wise
exports.findOne = (req, res) => {
    const id = req.params.id;

    Books.findByPk(id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Error internal server'
        });
    });
};

//update a book with id wise
exports.update = (req, res) => {
    const id = req.params.id;

    Books.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: 'Books was updated successfully'
            });
        }
        else {
            res.send({
                message: `Cannot update book with id=${id}`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: 'Error updating book with id' + id
        });
    });
};

//delete a book with the id
exports.delete = (req, res) => {
    const id = req.params.id;

    Books.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: 'Books was deleted successfully'
            });
        }
        else {
            res.send({
                message: `Cannot delete book with id=${id}`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: 'Can\'t  delete book with id' + id
        });
    });
};

//delete all book with the id
exports.deleteAll = (req, res) => {

    Books.destroy({
        where: {}, truncate: false
    }).then(nums => {
        res.send({
            message: ` ${nums} books was deleted successfully`
        });
    }).catch(err => {
        res.status(500).send({
            message: 'Can\'t  delete all  books'
        });
    });
};

//find all published books
exports.findAllPublished = (req, res) => {
    Books.findAll({ where: { published: true } }).then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occured while fetching all books'
        });
    });
};
