import db_conn from '../../../../helpers/db_conn';
import userModel from '../../../../models/userSchema';

db_conn();

export default function users(req, res) {
    switch (req.method) {
        case 'PUT':
            return updateUser(req, res);
        case 'DELETE':
            return deleteUser(req, res)
        default:
            res.status(405).send('Use proper method')
    }
}

const updateUser = async (req, res) => {
    try {
        const { uid } = req.query;
        const result = await userModel.findOneAndUpdate({ _id: uid }, {
            $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                mobile: req.body.mobile,
                role: req.body.role,
                profilePicPath: req.body.profilePicPath
            }
        })
        res.json(result);
    } catch (err) {
        res.status(500).send('Error occured while updating user')
    }
}

const deleteUser = async (req, res) => {
    try {
        const { uid } = req.query;
        const result = await userModel.findOneAndDelete({ _id: uid });
        res.json(result);
    } catch (err) {
        res.status(500).send('Error occured while deleting user')
    }
}