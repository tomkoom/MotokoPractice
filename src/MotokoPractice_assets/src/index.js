import { MotokoPractice } from "../../declarations/MotokoPractice";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with MotokoPractice actor, calling the greet method
  const greeting = await MotokoPractice.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
