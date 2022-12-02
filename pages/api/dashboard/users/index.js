import db_conn from '../../../../helpers/db_conn';
import userModel from '../../../../models/userSchema';

db_conn();

export default function users(req, res) {
    switch (req.method) {
        case 'POST':
            return addUser(req, res);
        case 'GET':
            return getUsers(req, res)
        default:
            res.status(405).send('Use proper method')
    }
}

const addUser = async (req, res) => {
    try {
        const user = new userModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userId: 1,
            mobile: req.body.mobile,
            email: req.body.email,
            role: req.body.role,
            password:req.body.password,
            profilePicPath: req.body.profilePicPath
        });
        await user.save();
        res.send('User saved sucessfully');
    } catch (err) {
        console.log(err)
        if (err.keyPattern) {
            if (err.keyPattern.email == 1) {
                res.status(403).send('User already presents');
            }
        } else {
            res.status(500).send('Error occured while adding user');
        }
    }
}

const getUsers = async (req, res) => {
    try {
        const { page, rowsPerPage } = req.query;
        const users = await userModel.find()
            .skip(parseInt(page) * parseInt(rowsPerPage))
            .limit(parseInt(rowsPerPage));
        const totalCount = await userModel.estimatedDocumentCount();
        res.json({ data: users, totalCount });
    } catch (err) {
        res.status(500).send('Error occured while getting users')
    }
}