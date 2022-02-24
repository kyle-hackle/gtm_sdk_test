import * as Hackle from "@hackler/js-client-sdk";

const hackleClient = Hackle.createInstance("B0AnyAo1k2XLLn3BHaXwPzHBPaidK8t4");
const button = document.getElementById("test-button");
const userId = String(Math.random());

hackleClient.onReady(function () {
  const variation = hackleClient.variation(7, userId);
  console.log(userId);
  if (variation === "A") {
    button.style.backgroundColor = "blue";
  } else if (variation === "B") {
    button.style.backgroundColor = "red";
  }

  button.addEventListener("click", (event) => {
    hackleClient.track("button_click", userId);
  });
});
