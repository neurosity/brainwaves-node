const { Notion } = require("@neurosity/notion");
const { samples } = require("@neurosity/pipes");

const { email, password, deviceId } = require("./inputs");

(async function main() {
  const mind = new Notion(deviceId ? { deviceId } : {});
  await mind.login({ email, password }).catch(console.error);

  mind
    .brainwaves("raw")
    .pipe(samples())
    .subscribe((sample) => {
      console.log(sample);
    });
})();
