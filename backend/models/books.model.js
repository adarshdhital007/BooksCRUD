module.exports = (sequelize, Sequelize) => {
    const books = sequelize.define("books", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        },

    });
    return books;
}