const restaurant = {
    name : "Bakso Mang Dicoding",
    city : "Bandung",
    "favorite drink": "Es Teh",
    isVegan: false
};
let name;
name = restaurant.name;
let favoriteDrink;
favoriteDrink= restaurant["favorite drink"];
delete restaurant["favorite drink"];
console.log(restaurant);