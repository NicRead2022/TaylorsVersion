const Boyfriend = require('../models/boyfriend');

const createBoyfriend = async (req, res) => {
    try {
        const boyfriend = await new Boyfriend(req.body)
        await boyfriend.save()
        return res.status(201).json({
            boyfriend,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createBoyfriend,
}