const svg = require('./svg.js')

module.exports = {
  deno: [
    {
      name: 'Factful.Deno',
      type: 'Deno Package',
      des: 'An easy way to get random facts using Deno!',
      links: [
        'https://raw.githubusercontent.com/Scientific-Guy/factful.deno/master/mod.ts',
        'https://github.com/Scientific-Guy/factful.deno',
        'https://github.com/Scientific-Guy/factful.deno#quick-example'
      ]
    }
  ],

  npm: [
    {
      name: 'Factful.js',
      type: 'NPM Package',
      des: 'An easy way to get facts from a random cateogary or from a paticular cateogary!',
      links: [
        'https://www.npmjs.com/package/factful.js',
        'https://github.com/Scientific-Guy/factful.js',
        'https://www.npmjs.com/package/factful.js'
      ]
    },
    {
      name: 'Node-Periodic-Table',
      type: 'NPM Package',
      des: 'Get whole data of chemical elements of Periodic Table by various type of search!',
      links: [
        'https://www.npmjs.com/package/node-periodic-table',
        'https://github.com/Scientific-Guy/node-periodic-table',
        'https://decimaldocs.glitch.me/node-periodic-table'
      ]
    },
    {
      name: 'Enhanced.DB',
      type: 'NPM Package',
      des: 'A enhanced, quick and smooth database with better sqlite3 wrapper!',
      links: [
        'https://www.npmjs.com/package/enhanced.db',
        'https://github.com/Scientific-Guy/enhanced.db',
        'https://github.com/Scientific-Guy/enhanced.db/blob/master/docs.md'
      ]
    },
    {
      name: 'JsonDB.Ez',
      type: 'NPM Package',
      des: 'Easy way to create database using JSON files!',
      links: [
        'https://www.npmjs.com/package/jsondb.ez',
        'https://github.com/Scientific-Guy/jsondb.ez',
        'https://decimaldocs.glitch.me/jsondb.ez'
      ]
    },
    {
      name: 'ChatCord',
      type: 'NPM Package',
      des: 'Simple chat bot maker!',
      links: [
        'https://www.npmjs.com/package/chatcord',
        'https://github.com/Scientific-Guy/chatcord',
        'https://chatcord.science.repl.co/'
      ]
    }
  ],
  
  discord: [
    {
      name: 'Dashboard Bot',
      type: 'Discord Bot',
      des: 'A Multipurpose bot for your Discord Server! One bot, all your needs!',
      links: [
        'https://dashboat.repl.co/',
        'https://discord.com/oauth2/authorize?client_id=736101542243074108&scope=bot&permissions=8',
        'https://discord.com/invite/FrduEZd'
      ],
      names: [
        svg.website + ' Website',
        svg.link + ' Invite',
        svg.support + ' Support'
      ]
    },
    {
      name: 'Mongo.Eco',
      type: 'NPM Package',
      des: 'A quick framework to make Discord Bot Economic System!',
      links: [
        'https://www.npmjs.com/package/mongo.eco',
        'https://github.com/Scientific-Guy/mongo.eco',
        'https://decimaldocs.glitch.me/mongo.eco'
      ],
      names: [
        '<i class="fab fa-npm"></i>  NPM',
        '<i class="fab fa-github"></i> GitHub',
        svg.docs + ' Docs'
      ]
    }
  ],

  python: [
    {
      name: 'Factful.py',
      des: 'Simple way to get Random Facts using Python',
      links: [
        'https://pypi.org/project/factful.py/',
        'https://github.com/Scientific-Guy/factful.py',
        'https://pypi.org/project/factful.py/'
      ]
    },
    {
      name: 'Quickmongo.py',
      des: 'A simple and quick wrapper for pymongo!',
      links: [
        'https://pypi.org/project/quickmongo.py/',
        'https://github.com/Scientific-Guy/quickmongo.py',
        'https://pypi.org/project/quickmongo.py/'
      ]
    },
    {
      name: 'Python Nasa Api',
      des: 'Simple NASA Api Wrapper written in Python!',
      links: [
        'https://pypi.org/project/python-nasa-api/',
        'https://github.com/Scientific-Guy/python-nasa-api',
        'https://pypi.org/project/python-nasa-api/'
      ]
    }
  ]
}
