//html file links to this main js page
//next we link to the HikeController js code
import HikesController from "./hikescontroller.js";
//on load grab the array and insert it into the page
const myHikesController = new HikesController("hikes");
window.addEventListener("load", () => {
  myHikesController.showHikeList();
});
