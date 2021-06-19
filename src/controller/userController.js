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
                phone,
            })

            user.rating = 5
            user.totalRatings = 1
            user.totalPoint = 0
            user.password = undefined
            return res.send({ user, token: tokenUtil.generateToken({ id: user.id }) })
        } catch (error) {
            console.log(error)
            return res.status(400).send({ message: 'Falha ao registrar usuário.' })
        }
    },

    async rating(req, res) {

        try {

            const { email, ratingValue } = req.body

            let user = await User.findOne({ email })

        
            console.log(user)

            let newRating = (Number(user.totalPoints) + Number(ratingValue))/Number(user.totalRatings + 1)


            console.log(newRating)

            let user_id = user._id
            let total = user.totalRatings + 1
            let points = user.totalPoints + ratingValue

            const updatedUser = await User.updateOne({ _id: user_id },
                 {rating: newRating, totalRatings: total, totalPoints: points })

            return res.send({ success: true })

        } catch (error) {
            console.log(error)
            return res.status(400).send({ message: 'Falha ao avaliar doador.' })
        }

    }

}