const MovieController = require("../Controllers/Controller");

module.exports = (app) =>{
    app.post("/api/Movies",MovieController.create);
    app.delete("/api/Movies/:id",MovieController.delete);
    app.get("/api/Movies",MovieController.fetch);
    app.put("/api/Movies/:id",MovieController.updateOne);
}