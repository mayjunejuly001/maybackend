require('dotenv').config()
const { configDotenv } = require('dotenv')
const express = require('express')

const app = express()

const githubData = {
  login: 'mayjunejuly001',
  id: 128578651,
  node_id: 'U_kgDOB6n0Ww',
  avatar_url: 'https://avatars.githubusercontent.com/u/128578651?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/mayjunejuly001',
  html_url: 'https://github.com/mayjunejuly001',
  followers_url: 'https://api.github.com/users/mayjunejuly001/followers',
  following_url:
    'https://api.github.com/users/mayjunejuly001/following{/other_user}',
  gists_url: 'https://api.github.com/users/mayjunejuly001/gists{/gist_id}',
  starred_url:
    'https://api.github.com/users/mayjunejuly001/starred{/owner}{/repo}',
  subscriptions_url:
    'https://api.github.com/users/mayjunejuly001/subscriptions',
  organizations_url: 'https://api.github.com/users/mayjunejuly001/orgs',
  repos_url: 'https://api.github.com/users/mayjunejuly001/repos',
  events_url: 'https://api.github.com/users/mayjunejuly001/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/mayjunejuly001/received_events',
  type: 'User',
  user_view_type: 'public',
  site_admin: false,
  name: 'MAYANK VERMA',
  company: null,
  blog: '',
  location: 'Gwalior , INDIA',
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 23,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: '2023-03-22T07:18:13Z',
  updated_at: '2025-03-02T09:58:33Z',
}

app.get('/' , (req,res) => {
 res.send('Hello World')
})

app.get('/mayank', (req, res) => {
  res.send('<h1>mayank here for backend</h1>')
})

app.get('/github' , (req,res) => {
 res.json(githubData)
})

app.listen(process.env.PORT , () => {
 console.log(`App listening on port ${process.env.PORT}`)
 
})