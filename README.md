<h1 align="center">Welcome to Workkit 👋</h1>
<img alt="codevsoft" style="width: 100%" src="https://github.com/codevsoft/workkit/blob/master/apps/workkit-fe/src/assets/workkit.svg" />
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="documentacion-url.com" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/codevsoft/workkit/blob/master/LICENSE" target="_blank">
    <img alt="License: MPL--2.0 License" src="https://img.shields.io/badge/License-MPL--2.0 License-yellow.svg" />
  </a>
</p>

> This is an app to handle the clocked schedule of the workers in your company

### ✨ [Demo](https://www.codevsoft.dev)

## Install

```sh
yarn install
```

## Config enviroments

In `.env-cmdrc` you can set up the enviroment variables.

Enviroments:

-   `fe` for frontend developers in Atlas DB.
-   `be` for backend developers in local.
-   `pro` for finally production use.

Variables:

-   `NX_DB_URL` for DB URL.
-   `NX_DB_USER` for DB user.
-   `NX_DB_PASSWORD` for DB user password.

## Usage

```sh
// Workkit-FE with Frontend Env.
npm run start-fe workkit-fe
// Workkit-FE with Backend Env.
npm run start-be workkit-fe
// Workkit-FE with Production Env.
npm run start-pro workkit-fe

// in another terminal
// Workkit-BE with Frontend Env.
npm run start-fe workkit-be
// Workkit-BE with Backend Env.
npm run start-be workkit-be
// Workkit-BE with Production Env.
npm run start-pro workkit-be
```

## Run tests

```sh
npx nx affected:test
```

## Author

👤 **codevsoft**

-   Github: [@codevsoft](https://github.com/codevsoft)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/codevsoft/workkit/issues). You can also take a look at the [contributing guide](https://github.com/codevsoft/workkit/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [codevsoft](https://github.com/codevsoft).<br />
This project is [MPL--2.0 License](https://github.com/codevsoft/workkit/blob/master/LICENSE) licensed.

---
