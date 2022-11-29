import db_conn from '../../../../helpers/db_conn';
import questionModel from '../../../../models/questionSchema';
db_conn();

export default function question(req, res) {
    switch (req.method) {
        case 'PUT':
            return updateQuestion(req, res);
        case 'DELETE':
            return deleteQuestion(req, res);
        default:
            res.status(500).send('Use Proper method');
    }
}

const updateQuestion = async (req, res) => {
    try {
        const { qid } = req.query;
        const result = await questionModel.updateOne({ _id: qid }, {
            $set: {
                question: req.body.question,
                options: req.body.options,
                correctOption: req.body.correctOption,
                description: req.body.description,
                keywords: req.body.keywords,
            }
        });
        res.send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occured while updating question');
    }
}

const deleteQuestion = async (req, res) => {
    try {
        const { qid } = req.query;
        const result = await questionModel.findOneAndDelete({ _id: qid });
        res.send(result);
    } catch (err) {
        res.status(500).send('Error occured while deleting question')
    }
}