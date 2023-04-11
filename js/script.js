import pizze from './db.js'
import { checkVeg } from './funcitons.js';



const pizzeRemap = pizze.map( pizza => {
  const {name, image, price, description, ingredients, votes} = pizza;
  const isVeg = checkVeg(ingredients);
  return {name, image, price, description, ingredients, votes, isVeg}
} )

pizzeRemap.sort((a,b) => a.price - b.price)

console.log(pizzeRemap);

