
const asyncMiddleware = require('../middlewares/async');
exports.getTotalAmount = asyncMiddleware(async (req, res) => {
    try {
        let total, discount;
        let result = [];
        if (req.body.item == 'book') {
            total = 100 * req.body.count;
            if (total >= 500) {
                discount = total * 10 / 100
                if (discount > 60) {
                    discount = 60;
                }
                total = total - discount;

            }
            result.push({ book: total })
        } else if (req.body.item == 'sanitizer') {
            total = 250 * req.body.count;
            if (total > 3000) {

                total = total - 100;

            }
            result.push({ sani: total })
        } else if (req.body.item == 'bag') {
            total = 1500 * req.body.count;
            result.push({ bag: total })
        }

        res.send(result)


    } catch (error) {
        return res.send(error);
    }

})
