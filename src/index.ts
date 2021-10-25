import 'reflect-metadata';
import * as express from 'express';
import { Request, Response } from 'express';
import { createConnection, getManager } from 'typeorm';
import {User} from './entity/User';
const bodyParser = require("body-parser");
const cors = require("cors");


createConnection().then(async (connection) => {

    
    //console.log(connection.entityMetadatas)
    // const userRepository =  connection.getRepository(User);
    // const users = await userRepository.find();
    // console.log(users)
    const app = express();
    const routes = require("./routes")

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    routes(app);

    app.set('env', process.env.APP_ENV);
    app.listen(3000, () => console.log('>>> LISTENING <<<'));
    // const entityManager = getManager(); // you can also get it via getConnection().manager
    // const user = await entityManager.findOne(User, 1);  
    // console.log(user)

    // app.get('/ping', (req: Request, res: Response) => res.send('pong'));

}).catch(error => console.log(error));