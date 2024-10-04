const wait = (duration: number) => new Promise((resolve) => 
  setTimeout(resolve, duration),
);

const multiplier = 991;
const divider = 997;
let counter = 1;
while (true) {
  console.log(`Counter: ${counter}`);
  await wait(2000);
  debugger;
  counter = (counter * multiplier) % divider;
}

export default {
  wait,
};
