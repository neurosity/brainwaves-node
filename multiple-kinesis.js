const { Notion } = require("@neurosity/notion");
const { email, password } = require("./inputs");
const { timer } = require("rxjs");
const { switchMap, scan } = require("rxjs/operators");

const kinesisLabels = ["push", "drop"];
const switchInterval = 500; // switch kinesis label every x ms

(async function main() {
  const mind = new Notion();
  await mind.login({ email, password }).catch(console.error);

  const initialKinesis = kinesisLabels.reduce(
    (acc, label) => ({ ...acc, [label]: 0 }),
    {}
  );

  timer(0, switchInterval)
    .pipe(
      switchMap((i) => mind.predictions(kinesisLabels[i % 2])),
      scan(
        (acc, { label, probability }) => ({
          ...acc,
          [label]: probability,
        }),
        initialKinesis
      )
    )
    .subscribe((multipleKinesis) => {
      console.log(multipleKinesis);
    });
})();
