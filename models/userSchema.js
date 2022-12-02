import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    userId: {
        type: Number,
        required: true,
    },
    mobile: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {          // 0:user,1:admin, 2:super admin
        type: String,
        required: true,
        default: 0,
    },
    registeredDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    profilePicPath: {
        type: String
    },
    tokens: [
        {
            token: {
                type: String,
                // required: true,
            }
        }
    ]
});

//middleWare.  we have also post method
employeeSchema.pre('save', async function (next) {
    //we will not hash password at time of update, it is hashed only at time new user created
    if (this.isModified('password')) {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
    }
    next()
})

//generating token
employeeSchema.methods.generateAuthToken = async function (req, res) {
    try {
        let token = jwt.sign({
            _id: this._id,
            userId: this.userId,
            name: this.firstName,
            role: this.role,
        },
            process.env.SECRET_KEY
        );
        this.tokens = this.tokens.concat({ token: token })
        await this.save();
        return token
    } catch (err) {
        res.status(500).send('Error occured while generating token')
    }
}

export default mongoose.models.user || mongoose.model('user', employeeSchema);
