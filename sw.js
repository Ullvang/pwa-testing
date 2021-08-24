console.log("SW: Registered Event");

self.addEventListener("install", (e) => {
  console.log("SW: Install Event");

  let installPromise = new Promise((resolve) => {
    setTimeout(resolve, 3000);
    console.log("SW: Install Event Done");
  });

  e.waitUntil(installPromise);
});

self.addEventListener("activate", (e) => {
  console.log("SW: Activate Event");

  let activatePromise = new Promise((resolve) => {
    setTimeout(resolve, 3000);
    console.log("SW: Activate Event Done");
  });

  e.waitUntil(activatePromise);
});
