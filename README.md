# Backend Application Boilerplate

It is a basic application to give you a head start with your backend development

## Pre-Requisites

The project uses [MySQL](https://www.mysql.com/) as the primary database solution. It uses [Firebase](https://www.console.firebase.google.com) for authentication purposes.

## Environment requirements

- NODE: 16.13.0
- SEQUELIZE-CLI: 6.3.0

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or yarn to install the dependencies.

```bash
npm install
```

## Development

To start development, make sure you have the following file set up at `config/environments/development.json`

```json
{
  "port": YOUR PORT,
  "db": {
    "host": "YOUR HOST",
    "name": "YOUR DATABASE NAME",
    "username": "YOUR DATABASE USERNAME",
    "password": "YOUR DATABASE PASSWORD"
  },
  "firebase": {
    "api_key": "YOUR FIREBASE PROJECT's API KEY",
    "type": "YOUR FIREBASE PROJECT's TYPE",
    "project_id": "YOUR FIREBASE PROJECT's ID",
    "private_key_id": "YOUR FIREBASE PROJECT's PRIVATE KEY ID",
    "private_key": "YOUR FIREBASE PROJECT's PRIVATE KEY",
    "client_email": "YOUR FIREBASE PROJECT's CLIENT EMAIL",
    "client_id": "YOUR FIREBASE PROJECT's CLIENT ID",
    "auth_uri": "YOUR FIREBASE PROJECT's AUTH URI",
    "token_uri": "YOUR FIREBASE PROJECT's TOKEN URI",
    "auth_provider_x509_cert_url": "YOUR FIREBASE PROJECT's AUTH PROVIDER X509 CERT URL"
  }
}
```

Also, have an environment file (`config/environments/.env`) set up as well, at least it should contain the version of your API, an example `.env` file can be:

```
PORT=3000
VERSION=0.0.1
```

## Test

To run the tests, make sure you have a `test.json` similar to `development.json` pointing to the same or a different database, to run all the tests run the following command:

```bash
npm test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

![GitHub](https://img.shields.io/github/license/UmairJibran/basic-backend-app?style=for-the-badge)

## Social

![Twitter Follow](https://img.shields.io/twitter/follow/umairjibran7?label=Follow%20Me&logo=twitter&style=for-the-badge)
![Discord](https://img.shields.io/discord/774624937318285322?style=for-the-badge)

## Status

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/umairjibran/basic-backend-app/TESTER?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/UmairJibran/basic-backend-app?style=for-the-badge)
![Lines of code](https://img.shields.io/tokei/lines/github/UmairJibran/basic-backend-app?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/UmairJibran/basic-backend-app?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/UmairJibran/basic-backend-app?style=for-the-badge)
