const express = require('express');
// const urlService = require('../services/urlService');

const router = express.Router();


const path = require('path');

router.get('/', function callback(req, res) {
        res.sendFile('index.html', {
            root: path.join(__dirname, '../public/views/')
        });

    }

);

module.exports = router; // return to outside
