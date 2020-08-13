const { Notion: Mind } = require("@neurosity/notion");
const { take, share, takeUntil } = require("rxjs/operators");
const { exec } = require("child_process");
const { email, password } = require("./auth");

(async function main() {
  const mind = new Mind();
  await mind.login({ email, password }).catch(console.error);

  console.log("waiting to detect mind push");

  const push$ = mind.kinesis("push").pipe(take(1), share());

  mind
    .predictions("push")
    .pipe(takeUntil(push$))
    .subscribe((prediction) => {
      console.log("mind push probability of", prediction.probability);
    });

  push$.subscribe(() => {
    console.log("detected mind command!");
    exec(
      "git add . && git commit -m ':rocket:' && git push -u origin master -f",
      (err, stdout, stderr) => {
        console.log(err ? stderr : stdout);
        process.exit();
      }
    );
  });
})();
