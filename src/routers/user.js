
const express = require('express');
const router = new express.Router();
const UserDetail = require('./../model')
const uniqid = require('uniqid');

router.post('/add',async(req,res)=>{
    const user = new UserDetail({uniqueID: uniqid(),...req.body})
    try {
        await user.save();
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get('/users', async(req, res) => {
    try {
        const allData = await UserDetail.find()
        res.send(allData)
    } catch(error) {
        res.status(500).send(error);
    }
})

router.get('/users/:id', async(req, res) => {
    try {
        const singleDetail = await UserDetail.findOne({_id: req.params.id});
        res.send(singleDetail)
    } catch(error) {
        res.status(500).send(error);
    }
})

router.put('/users/:id', async(req, res) => {
    try {
        const userUpdate = await UserDetail.findOneAndUpdate({_id: req.params.id}, {...req.body}, {new: true})
        res.send(userUpdate)
    } catch(error) {
        res.status(404).send(error);
    }
})

router.delete('/users/:id', async(req, res) => {
    try {
        const userDelete = await UserDetail.findOneAndDelete({_id: req.params.id})
        res.status(204).send(userDelete)
    } catch(error) {
        res.status(404).send(error);
    }
})

module.exports = router;