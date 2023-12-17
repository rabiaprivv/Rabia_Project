const e = require("express");
const router = e.Router()



router.get('/' , (req ,res) => {
        res.send('User Called!!')
})






module.exports = router;