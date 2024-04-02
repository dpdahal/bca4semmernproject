import bcrypt from 'bcrypt';
import User from '../models/User.js';

class UserController {
    async index(req, res) {
        const users = await User.find({});
        res.status(200).json(users);
    }
    async show(req, res) {
        let id = req.params.id;
        const user = await User.findById(id);
        res.status(200).json(user);
    }

    async store(req, res) {
        let image="";
        if(req.file){
            image = req.file.filename;
        }
        let password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        const user = await User.create({...req.body,password, image});
        res.status(201).json(user);
    }

    async update(req, res) {
        res.send("User updated")
    }

    async destroy(req, res) {
        res.send("User deleted")
    }

}

export default UserController;