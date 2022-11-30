import db_conn from '../../../../helpers/db_conn';
import questionModel from '../../../../models/questionSchema';

db_conn();

export default function questions(req, res) {
    switch (req.method) {
        case 'POST':
            return addQuestion(req, res);
        case 'GET':
            return getQuestions(req, res)
        default:
            res.status(405).send('Use proper method')
    }
}

const addQuestion = async (req, res) => {
    try {
        const lastDoc = await questionModel.findOne().sort({ _id: -1 });
        const question = new questionModel({
            question: req.body.question,
            questionId: lastDoc.questionId + 1,
            options: 'jkdj',
            correctOption: req.body.correctOption,
            description: req.body.description,
            keywords: req.body.keywords,
            entryBy: 'mahadev',
            slug: req.body.slug,
        })
        await question.save();
        res.send('Question saved sucessfully');
    } catch (err) {
        const keyPatternObj = err.keyPattern;
        if (keyPatternObj) {
            const key = Object.keys(keyPatternObj)[0];
            res.status(500).send(`${key} already presents`)
        } else {
            res.status(500).send('Error occured while saving question')
        }
    }
}

const getQuestions = async (req, res) => {
    try {
        const { page, rowsPerPage, question, entryBy, correctOption } = req.query;
        const query = {};
        [{ question }, { entryBy }, { correctOption }].forEach((d) => {
            for (let key in d) {
                if (d[key]) {
                    query[key] = { $regex: d[key].trim(), '$options': 'i' }
                }
            }
        })
        const data = await questionModel.find(query)
            .skip(parseInt(page) * parseInt(rowsPerPage))
            .limit(parseInt(rowsPerPage));

        const totalCount = await questionModel.countDocuments(query);
        res.json({ data, totalCount })

    } catch (err) {
        console.log(err);
        res.status(500).send('Error occured while fetching questions')
    }
}