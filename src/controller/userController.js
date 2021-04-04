const User = require('../model/user')
const tokenUtil = require('../util/token')

module.exports = {

    async create(req, res) {

        const { email } = req.body

        try {

            if (await User.findOne({ email })) {
                return res.status(400).send({ message: 'Usuário já existe.' })
            }

            const { name, password, phone } = req.body

            const user = await User.create({
                name,
                email,
                password,
                phone
            })

            user.password = undefined
            return res.send({ user, token: tokenUtil.generateToken({ id: user.id }) })
        } catch (error) {
            console.log(error)
            return res.status(400).send({ message: 'Falha ao registrar usuário.' })
        }
    }
}