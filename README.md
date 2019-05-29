This is a minimal boilerplate for React development

## Installation guide:

- `git clone git@github.com:tabomors/react-minimal-boilerplate.git [your-app-name]`
- `rm -rf .git`

Because most likely you don't want to have git history and origin from react-minimal-boilerplate.git

- Change `name`, `author`, `description` fields in `package.json` file
- `npm init -y`
- `npm i`

### Run development server:

`npm run dev`

### Create production build:

`npm run build`

P.S Don't forget to check reports from webpack-bundle-analyzer. (Check this file `dist/report.html`)

### Linting and formatting:

* `npm run lint`
* `npm run format`

### Run tests

`npm run test`

### Run backend (optional)

`node index.js`

## Deployment:

### Github pages:

`npm run deploy:gh-pages`


### Heroku:

You should make these steps before deployment:

* Create your app on Heroku https://dashboard.heroku.com/new-app
* `heroku git:remote -a [your-heroku-app-name]`

Deploy your master branch to Heroku:
`git push heroku master`
