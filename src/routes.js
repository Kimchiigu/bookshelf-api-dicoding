const { addBookHandler, 
        displayBookHandler, 
        detailBookHandler, 
        updateBookHandler, 
        deleteBookHandler } = require("./handlers")

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler
    },
    {
        method: 'GET',
        path: '/books',
        handler: displayBookHandler
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: detailBookHandler
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: updateBookHandler
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookHandler
    }
]

module.exports = routes