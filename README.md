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

### Linting and formatting:

* `npm run lint`
* `npm run format`

P.S Don't forget to check reports from webpack-bundle-analyzer. (Check this file `dist/report.html`)

## Deployment:

`npm run deploy:gh-pages`
