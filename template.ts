import { OkroshkaRecipe, ChickenNoodleSoupRecipe } from "./src/patterns/templateClasses";

const okroshkaRecipe = new OkroshkaRecipe();
okroshkaRecipe.makeSoup();
console.log("------------------------");
const chickenNoodleSoupRecipe = new ChickenNoodleSoupRecipe();
chickenNoodleSoupRecipe.makeSoup();
