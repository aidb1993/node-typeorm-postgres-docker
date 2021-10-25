import { Response } from "express";

const UserModel = require("./entity/User")
const ExampleController = require("./controllers/ExampleController");
const ExampleService = require("./services/ExampleService");

const ExampleServiceInstance = new ExampleService(UserModel);
const ExampleControllerInstance = new ExampleController(
    ExampleServiceInstance
);

module.exports = (app) => {
    app.get("/", (req, res:Response) => {
        return res.json('hola');
    });

    app.get("/examples", (req, res) =>
        ExampleControllerInstance.find(req, res)
    );
    app.get("/example/find", (req, res) =>
        ExampleControllerInstance.findOne(req, res)
    );
    app.get("/example/:_id", (req, res) =>
        ExampleControllerInstance.findById(req, res)
    );
    app.post("/example", (req, res) =>
        ExampleControllerInstance.save(req, res)
    );
    app.put("/example/:_id", (req, res) =>
        ExampleControllerInstance.updateOneById(req, res)
    );
    app.patch("/example/:_id", (req, res) =>
        ExampleControllerInstance.patchOneById(req, res)
    );
    app.delete("/example/:_id", (req, res) =>
        ExampleControllerInstance.deleteById(req, res)
    );
}