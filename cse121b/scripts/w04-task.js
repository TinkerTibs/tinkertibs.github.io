/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Christina Thibodeau",
    photo: "images/easter.jpg",
    favoriteFoods: [
        'Tacos', 
        'Beef Ribs', 
        'Sirloin', 
        'Lasagna', 
        'Strawberries', 
        'Bacon Avocado Burgers', 
        'Burritos'
    ],
    hobbies: [
        'Woodworking',
        'Resin Working',
        'Board Games',
        'Card Games',
        'Tabletop RPGs',
        'Reading',
        'Movies'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
{
    place: 'San Diego, CA',
    length: '24 Years'
},
{
    place: 'Hemet, CA',
    length:'1 Year'
},
{
    place: 'Richmond, VA',
    length:'1 Year'
},
{
    place: 'Logan, UT',
    length:'1 Year'
},
{
    place: 'Boise, ID',
    length:'2 Years'
},
{
    place: 'Alpine, CA',
    length: '2 Years'
},
{
    place: 'Saint Joseph, MO',
    length:'3 Years'
}
);

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
})

