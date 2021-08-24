self.addEventListener("fetch", (e) => {
  console.log("Fetch Event: " + e.request.url);
});
