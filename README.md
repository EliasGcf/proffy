<h1 align="center">
  <img src=".github/logo.svg" alt="Logo" height="70">
</h1>

<h3 align="center">
  Proffy - Get in touch with any teacher and learn what you want.
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EliasGcf/proffy?color=%239871F5">

  <a href="https://www.linkedin.com/in/eliasgcf/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-elias%20gabriel-%239871F5">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EliasGcf/proffy?color=%239871F5">

  <a href="https://github.com/EliasGcf/proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EliasGcf/proffy?color=%239871F5">
  </a>

  <a href="https://github.com/EliasGcf/proffy/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/EliasGcf/proffy?color=%239871F5">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/EliasGcf/proffy?color=%239871F5">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=Proffy%20API%20-%20EliasGcf&uri=https%3A%2F%2Fraw.githubusercontent.com%2FEliasGcf%2Fproffy%2Fmaster%2FInsomnia.json" target="_blank">
  <img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
  </a>
</p>

<img alt="Layout" src="https://res.cloudinary.com/eliasgcf/image/upload/v1596552194/proffy/proffy-mockup_a2owui.png">

## 📚 About the project

This project was developed on the Next Level Week #02 event by [Rocketseat](https://rocketseat.com.br/) 🚀&nbsp;💜

This application is designed to connect teachers and students. For teachers, it is possible to define the start and end time of classes, the hourly price and describe themselves. Studens can get in touch and choose favorites teachers.

## 🚀 Technologies

Technologies that I used to develop this application

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)
- [Express](https://expressjs.com/pt-br/)
- [Knex](http://knexjs.org/)
- [SQLite](https://www.sqlite.org/)
- [React Router DOM](https://reacttraining.com/react-router/)
<!-- - [React Navigation](https://reactnavigation.org/) -->
<!-- - [React Icons](https://react-icons.netlify.com/#/) -->

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Expo](https://expo.io/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/EliasGcf/proffy.git && cd proffy
```

**Install dependencies**

```bash
$ yarn
```

**Follow the steps below**

### Backend

```bash
# Use the script to run the migrations
$ yarn server knex:migrate

# To finish, run the api service
$ yarn server dev

# Well done, project is started!
```

### Web

_Obs.: Before to continue, be sure to have the API running_

```bash
# Be sure the file 'packages/web/src/services/api.ts'
# have the IP to your API

# Start the client
$ yarn web start
```

### Mobile

_Obs.: Before to continue, be sure to have the API running_

```bash
# Be sure the file 'packages/mobile/src/services/api.ts'
# have the IP to your API

# Start the expo service and scan the QR code with Expo Client
$ yarn mobile start
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork EliasGcf/proffy
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd proffy

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜&nbsp; by Elias Gabriel 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/eliasgcf/)
