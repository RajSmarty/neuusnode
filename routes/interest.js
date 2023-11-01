const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Code = require('../models/Interest');



// ROUTE 3.1: Add a new Interest using: POST "/api/addinterest". Login required {Authentication Required}
router.post('/api/addinterest',fetchuser, async (req, res) => {
    try {
        const { interest } = req.body;


        const code = new Code({
            interest, user: req.user.id
        })
        const savedCode = await code.save()

        res.json(savedCode)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router