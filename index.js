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
