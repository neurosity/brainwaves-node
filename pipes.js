const { average } = require("@neurosity/pipes");
const { pipe } = require("rxjs");
const { map } = require("rxjs/operators");

function relativeBandPower() {
  return pipe(
    map((bands) => {
      let total = Object.values(bands).reduce((acc, power) => {
        return acc + power;
      }, 0);

      return Object.entries(bands).reduce((acc, [bandName, power]) => {
        return { ...acc, [bandName]: (power / total) * 1 };
      }, {});
    })
  );
}

function averageChannels() {
  return pipe(
    map((data) => {
      return Object.entries(data).reduce(
        (acc, [bandName, channels]) => ({
          ...acc,
          [bandName]: average(channels)
        }),
        {}
      );
    })
  );
}

module.exports = {
  relativeBandPower,
  averageChannels
};
