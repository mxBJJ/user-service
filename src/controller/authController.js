const User = require('../model/user')
const bcrypt = require('bcryptjs')
const tokenUtil = require('../util/token')

module.exports = {

    async login(req, res) {

        const { email, password } = req.body

        try {
            const user = await User.findOne({ email }).select('+password')

            if (!user) {
                return res.status(404).send({ message: 'Email não encontrado.' })
            }

            if (!await bcrypt.compare(password, user.password)) {
                return res.status(404).send({ message: 'Senha inválida.' })
            }

            user.password = undefined

            res.send({
                user,
                token: tokenUtil.generateToken({ id: user.id })
            })
        } catch (error) {
            console.log(error)
            return res.status(400).send({ message: 'Falha ao fazer login. Tente novamente, mais tarde.' })
        }
    }
}