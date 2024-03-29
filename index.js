const { Notion } = require("@neurosity/notion");
const { email, password, deviceId } = require("./inputs");

(async function main() {
  const mind = new Notion(deviceId ? { deviceId } : {});
  await mind.login({ email, password }).catch(console.error);
  const deviceInfo = await mind.getInfo();

  // mind.brainwaves("psd")
  mind.brainwaves("raw").subscribe((brainwaves) => {
    console.log(brainwaves);
    console.log("deviceInfo", deviceInfo);
  });
})();
