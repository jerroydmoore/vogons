# The Vogons Project

The Vogons Project helps you manage your albums, efficiently.

## Getting Started

This is a [Node.js](https://nodejs.org/en/) program through a [GitHub repository](https://github.com/jerroydmoore/vogons). In two steps, you will have Vogons bureaucratizing:

```sh
$ git clone https://github.com/jerroydmoore/vogons
$ cd ./vogons
$ npm install
$ npm start
```

## Releasing
This project uses [standard-version](https://github.com/conventional-changelog/standard-version) to aggregate its releases. As such, please adhere to the [Conventional Commits](https://www.conventionalcommits.org/) specification.

There hasn't been a release yet, so the first alpha release should be performed with 

```sh
$ npm run release -- --first-release --prerelease alpha
```

Subsequent releases won't use the `--first-release` option.

## License

[LGPL-3.0](LICENSE)