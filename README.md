# Neurosity Brainwaves in Node 🤯

Quickly get started streaming brainwave data in Node via the [notion-js](https://github.com/neurosity/notion-js) API.

```js
const { Notion } = require("@neurosity/notion");
const { email, password } = require("./auth");

(async function main() {
  const mind = new Notion();
  await mind.login({ email, password }).catch(console.error);

  // mind.brainwaves("psd")
  mind.brainwaves("raw").subscribe((brainwaves) => {
    console.log(brainwaves);
  });
})();
```

> 💡 You'll need a [Neurosity account](https://console.neurosity.co).

## Getting started

Run in the terminal:

1. Clone this repo and run `npm install`
2. Turn on your Neurosity headset
3. Run the following command in the terminal:

```
node index.js --email=NEUROSITY_EMAIL --password=NEUROSITY_PASSWORD
```

Another way to provide credentials is to create a `.env` file on the root of the repo and add:

```
NEUROSITY_EMAIL=*******
NEUROSITY_PASSWORD=********
```

## Specify a Device ID (optional)

If you only have 1 Crown, you can skip this step.

With multiple Crowns, by default, the Neurosity SDK will select the oldest device on your account. If you wish to specify a device by id, you can do the following:

```
node index.js --email=NEUROSITY_EMAIL --password=NEUROSITY_PASSWORD --deviceId=NEUROSITY_DEVICE_ID
```

or add it to the `.env` file:

```
NEUROSITY_EMAIL=*******
NEUROSITY_PASSWORD=********
NEUROSITY_DEVICE_ID=********
```

### MIT License

Copyright 2020 Alex Castillo, Neurosity

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
