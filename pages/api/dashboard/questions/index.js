import questionModel from '../../../../models/questionSchema';

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
        const question = new questionModel({
            question: req.body.question,
            questionId: 0,
            options: req.body.options,
            correctOption: req.body.correctOption,
            description: req.body.description,
            keywords: req.body.keywords,
            entryBy: req.body.entryBy,
            slug: req.body.slug,
        })
        await question.save();
        res.send('Question saved sucessfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occured while saving question')
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
        const questions = await questionModel.find(query)
            .skip(parseInt(page) * parseInt(rowsPerPage))
            .limit(parseInt(rowsPerPage));

        const totalCount = await questionModel.countDocuments(query);

        res.json({ questions, totalCount })

    } catch (err) {
        console.log(err);
        res.status(500).send('Error occured while fetching questions')
    }
}