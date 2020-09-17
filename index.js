// Import Packages
const express = require('express');
const app = new express();
const bodyParser = require("body-parser");
const ejs = require('ejs')
const fs = require('fs')
const fetch = require('node-fetch')

// Showdown
const showdown  = require('showdown')
const converter = new showdown.Converter({tables: true})

// Set view engine as .ejs!
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

base = {
  projects: require('./others/projects.js'),
  config: require('./others/config.js')
}

// guide Map
let guides = new Map()
let guideArray = []

// Handler for Guides
require('./guides/guides.json').forEach(g => {
  let data = {
    name: g.name,
    description: g.description,
    thumbnail: g.thumbnail,
    content: fs.readFileSync(g.file).toString('utf-8')
  }
  
  guideArray.push(data)
  guides.set(g.name.split(' ').join('-').toLowerCase(), data)
});

// If the app gets '/'
app.get('/', function(req, res) {
  res.render(__dirname + '/views/index.ejs', {
    projects: base.projects,
    config: base.config,
    svg: require('./others/svg.js')
  })
  console.log('Ping Received At ' + Date.now())
});

// Guides search
app.get('/guides', (req, res) => {
  let array = []
  if(!req.query.query) array = guideArray
  else{
    guideArray.forEach(a => {
      if(a.name.toLowerCase().startsWith(req.query.query)) array.push(a)
    })
  }

  res.render(__dirname + '/views/search.ejs', {
    array: array,
    config: base.config
  })
})

// Guides
app.get('/guides/:name', (req, res) => {
  let name = req.params.name
  let data = guides.get(name.toLowerCase())
  if(req.query.json == 1){
    if(!data) return res.send('{"message": "invalid guide"}')
    return res.send(data)
  }
  if(!data) return res.render(__dirname + '/views/404.ejs', {config: base.config})
  res.render(__dirname + '/views/guide.ejs', {
    config: base.config,
    content: converter.makeHtml(data.content),
    array: [
      guideArray[Math.floor(Math.random() * guideArray.length)],
      guideArray[Math.floor(Math.random() * guideArray.length)],
      guideArray[Math.floor(Math.random() * guideArray.length)]
    ],
    guide: data
  })
})


// 404 Page
app.get('*', function(req, res) {
  res.render(__dirname + '/views/404.ejs', {config: base.config})
});

// Port Listener
app.listen(process.env.PORT);
