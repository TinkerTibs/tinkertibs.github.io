//html file links to this main js page which links to the  HikeController js code
//next we link to the HikeModel and HikesView js code
//our HikeModel code sill store the list of hikes as the class HikeModel
import HikeModel from "./hikemodel.js";

import HikesView from "./hikesview.js";


export default class HikesController {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
  }
  showHikeList() {
    // the list of hikes will come from the model now...
    const hikeList = this.hikeModel.getAllHikes();
    // send the list of hikes and the element we would like those placed into to the view.
    this.hikesView.renderHikeList(this.parentElement, hikeList);
    // after the hikes have been rendered...add our listener
    this.addHikeListener();
  }
  showOneHike(hikeName) {
    const hike = this.hikeModel.getHikeByName(hikeName);
    this.hikesView.renderOneHikeFull(this.parentElement, hike).ontouchend =
      () => {
        this.showHikeList();
      };
  }
  // adds listener after the list of hikes has been built
  addHikeListener() {
    // loops through the children of our list and attach a listener to each, remember though that children is a nodeList...
    //not an array. So in order to use something like a forEach we need to convert it to an array.
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach((child) => {
      child.addEventListener('touchend', (e) => {
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }
}
