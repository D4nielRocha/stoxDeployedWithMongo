const router = require('express').Router();
const faceoffService = require('../services/faceoffService');
const Stox = require('../models/stox')
const faceoffRepository = require('../repositories/faceoffRepository');
const stoxValidator = require('../validator/stoxValidator');
const { authConfig, checkJwt, checkAuth } = require('../middleware/jwtAuth');
const GET_STOX = "SELECT * FROM stox";



router.get('/', async (req, res) => {

    let message = await faceoffService.displayFaceoff();
    res.json(message);

});


router.get('/:author',  async (req, res) => {

    let authorId = req.params.author;
    console.log(authorId);

    let result = await faceoffService.showComparison(authorId);
    res.json(result);

});

router.get('/:author/:date', async (req, res) => {

    let authorId = req.params.author;
    let date = req.params.date;
    console.log(authorId, date);

    let result = await faceoffService.showComparisonByDate(authorId, date);
    res.json(result);

});

router.post('/', async (req, res) => {

    console.log(req.body);

    const result = await faceoffService.createStox(req.body);
    
    res.json(result);
    

})


module.exports = router;