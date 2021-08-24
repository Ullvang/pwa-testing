console.log("SW: Registered Event");

self.addEventListener("install", (e) => {
  console.log("SW: Install Event");

  let installPromise = new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  e.waitUntil(installPromise);

  console.log("SW: Install Event Done");
});

self.addEventListener("activate", (e) => {
  console.log("SW: Activate Event");

  let activatePromise = new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  e.waitUntil(activatePromise);
});
