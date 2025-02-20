const TeamController = require('../controller/team.controller');
module.exports = (app) => {
    app.post('/api/players', TeamController.create);
    app.get('/api/players', TeamController.getAll);
    app.get('/api/players/:id', TeamController.getOne);
    app.delete('/api/players/:id', TeamController.delete);
}   