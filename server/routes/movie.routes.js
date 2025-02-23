const UserController = require('../controller/movie.controller');
module.exports = (app) => {
    app.post('/api/movies', UserController.createUser);
    app.get('/api/movies', UserController.getAll);
    app.get('/api/movies/:id', UserController.getOne);
    app.delete('/api/movies/:id', UserController.delete);
}   