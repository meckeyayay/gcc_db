import Admin from "../model/AdminModel.js"

export const getUsers = async(req, res) => {
    try {
        const response = await Admin.findAll();
        res.status(200).json(response)
        console.log(2)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getUsersById = async(req, res) => {
    try {
        const response = await Admin.findOne({
            where: {
                email: req.params.email
            }
        })
        res.status(200).json(response)
        console.log(2)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}