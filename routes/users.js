var express = require('express');
var router = express.Router();

var userIds = [1, 2, 3];

var orders = {
    "1": {
        itemIds: [1, 2]
    },

    "2": {
        itemIds: [1]
    },

    "3": {
        itemIds: [2]
    }
};

var items = {
    "1": {
        price: 10
    },

    "2": {
        price: 3
    },

    "3": {
        price: 5
    }
};

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json(userIds);
});

router.get(/\/(\d+)\/orders/, function (req, res) {
    var userId = req.params[0];
    res.json(orders[userId])
});

router.get(/\/items\/(\d+)/, function (req, res) {
    res.json(items[req.params[0]])
});

module.exports = router;
