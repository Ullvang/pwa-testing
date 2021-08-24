if ("serviceWorker" in navigator) {
  console.log("in navigator");
  navigator.serviceWorker
    .register("./sw.js")
    .then((registration) => {
      console.log("SW Registered");
    })
    .catch(console.log);
}
