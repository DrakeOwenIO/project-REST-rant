const express = require('express')
const router = require('express').Router()
const places = require('../models/places.js')

// INDEX RENDER
router.get('/', (req, res) => {
  res.render('places/index', { places })
})

// POST ROUTE
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

// NEW RENDER
router.get('/new', (req, res) => {
    res.render('places/new')
  })

// PLACE RENDER
router.get('/:id', (req, res) =>{
  res.render('places/:id')
})

module.exports = router

