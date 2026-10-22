const User = require('../models/User')

module.exports = class UserControllers {
    static async register(req, res) {
        const name = req.body.name
        const email = req.body.email
        const displayname = req.body.displayname
        const photoUrl = req.body.photoUrl
        const createdAt = new Data()

        if (!name) {
            res.status(422).json({
                message: 'O nome é obrigatório!'
            })
            return
        }

        if (!email) {
            res.status(422).json({
                message: 'O email é obrigatório!'
            })
            return
        }
    }
}