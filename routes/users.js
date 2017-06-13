var express = require('express');
var router = express.Router();

var users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Darek'},
    {id: 3, name: 'Bill'}];

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
    res.json(users);
});

router.get(/\/(\d+)\/orders/, function (req, res) {
    var userId = req.params[0];
    res.json(orders[userId])
});

router.get(/\/items\/(\d+)/, function (req, res) {
    res.json(items[req.params[0]])
});

module.exports = router;
