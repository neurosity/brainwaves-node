const { Notion } = require("@neurosity/notion");
const { samples, epoch } = require("@neurosity/pipes");

const { email, password, deviceId } = require("./inputs");

(async function main() {
  const mind = new Notion(deviceId ? { deviceId } : {});
  await mind.login({ email, password }).catch(console.error);

  mind
    .brainwaves("raw")
    .pipe(samples(), epoch({ duration: 1000, interval: 1000 }))
    .subscribe((epoch) => {
      console.log(epoch);
    });
})();
