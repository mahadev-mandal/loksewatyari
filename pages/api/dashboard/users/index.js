import userModel from '../../../../models/userSchema';

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
            userId: 0,
            mobile: req.body.mobile,
            email: req.body.email,
            role: req.body.role,
            profilePicPath: req.body.profilePicPath
        });
        user.save();
        res.send('User saved');
    } catch (err) {
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
        res.json({ users, totalCount });
    } catch (err) {
        res.status(500).send('Error occured while getting users')
    }
}