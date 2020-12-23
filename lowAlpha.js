const { Notion } = require("@neurosity/notion");
const { fft, powerByBand, pickChannels } = require("@neurosity/pipes");
const { pluck } = require("rxjs/operators");
const { email, password } = require("./auth");
const { averageChannels, relativeBandPower } = require("./pipes");

(async function main() {
  const mind = new Notion();
  await mind.login({ email, password }).catch(console.error);

  mind
    .brainwaves("raw")
    .pipe(
      pickChannels({
        channels: [4, 8] // Pick CP3 and CP4
      }),
      fft(),
      powerByBand({
        lowAlpha: [8, 10],
        highAlpha: [10, 12]
      }),
      averageChannels(),
      relativeBandPower(),
      pluck("lowAlpha")
    )
    .subscribe((brainwaves) => {
      console.log(brainwaves);
    });
})();
