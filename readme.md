# Crypter-JS

## Disclaimer

This script is for educational purposes only, I don't endorse or promote it's illegal usage

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Languages](#languages)
4. [Installations](#installations)
5. [Usage](#usage)
6. [Run](#run)

## Overview

This script encrypts / decrypts a file using Advanced Encryption Standard

## Features

- Encrypts a file
- Decrypts a file

## Languages

- Javacript

## Installations

- Git clone the repository

```shell
git clone https://github.com/favoursyre/crypter-js.git && cd crypter-js
```

- Install dependencies

```bash
npm install
```

- Declare your secret key in the .env file

## Usage

- Instantiate the class

```js
const crypter = new Crypter();
const dataText = "secret of life";
```

- Encrypt data

```js
const cipher = crypter.encrypter(dataText);
console.log("Cipher: ", cipher);
```

- Decrypt data

```js
const normal = crypter.decrypter(cipher);
console.log("Normal: ", normal);
```

- Compare cipher with text

```js
const stat = crypter.compareEncrypter(dataText, cipher);
console.log("Status: ", stat);
```

## Run

```bash
node crypter.js
```
