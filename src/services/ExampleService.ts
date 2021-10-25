import {FindManyOptions, getManager, getRepository} from "typeorm";
import { User } from "../entity/User";


class ExampleService {
    exampleModel: any;
    constructor(exampleModel) {
        this.exampleModel = exampleModel;
    }

    private userRepository = getRepository(User);

    

    async save(data) {
        try {
            return this.userRepository.save(data);
        } catch (error) {
            console.log(error)
        }

        //return await getConnection().manager.save(example)
    }

    find(query, select : string | null, range: any = {}, options = {}) {
        let opts: any  = {};
        if(select){
            if(typeof select === "string"){
                opts.select = [];
                opts.select.push(select)
            } else {
                opts.select = select
            }
        }
        const result: any = this.userRepository.find(opts);
        return result;
    }

    findOne(query, options) {
        const result = this.userRepository.findOne(query, options);
        return result;
    }

    findById(_id, select = "", options = {}) {
        let opts: any  = {};
        if(select){
            if(typeof select === "string"){
                opts.select = [];
                opts.select.push(select)
            } else {
                opts.select = select
            }
        }
        const result = this.userRepository.findByIds(_id, opts);
        return result;
    }

    updateOneById(_id, data = {}, options = {}) {
        options = {
            ...options,
            ...{ lean: true, new: true },
        };
        const updated = this.exampleModel.findOneAndUpdate(_id, data, options);
        return updated.exec();
    }

    replaceOneById(_id, data = {}, options = {}) {
        options = {
            ...options,
            ...{ lean: true, new: true },
        };
        const updated = this.exampleModel.findOneAndReplace(_id, data, options);
        return updated.exec();
    }

    deleteOne(query) {
        const result = this.exampleModel.deleteOne(query);
        return result.exec();
    }

    deleteById(_id) {
        const result = this.userRepository.delete(_id);
        return result;
    }
}

module.exports = ExampleService;

function limit(limit: any) {
    throw new Error("Function not implemented.");
}


function skip(skip: any) {
    throw new Error("Function not implemented.");
}
