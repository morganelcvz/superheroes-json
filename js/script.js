// data à travailler : il s'agit d'un objet contenant un tableau de membres
const data = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality"
            ]
        },
        {
            "name": "Fatality",
            "age": 33,
            "secretIdentity": "Isaac Mewton",
            "powers": [
                "Fatality resistance"
            ]
        },
        {
            "name": "Running Lady",
            "age": 24,
            "secretIdentity": "Britney Sears",
            "powers": [
                "Speed of light"
            ]
        }
    ]
}

// data.squadName 
// data.homeTown 
// data.formed 
// data.secretBase 
// data.active

// for (var i = 0; i < data.members.length; i++) {
//     console.log(data.members[i].name)
//     console.log(data.members[i].age)
//     console.log(data.members[i].secretIdentity)
//     console.log(data.members[i].powers)
// }

function showdata(jsonObj) {
    var members = jsonObj["members"];
  
    for (var i = 0; i < data.members.length; i++) {
      var mycard = document.createElement("card");
      var myh5 = document.createElement("h5");
      var mylist = document.createElement("ul");
      var myl1 = document.createElement("li");
      var myl2 = document.createElement("li");
      var myl3 = document.createElement("li");
  
      myh5.textContent = members[i].name;
      myl1.textContent = "Age: " + members[i].age;
      myl2.textContent = "Secret identity: " + members[i].secretIdentity;
      myl3.textContent = "Superpowers:";
  
      var superPowers = members[i].powers;
      for (var j = 0; j < superPowers.length; j++) {
        var listItem = document.createElement("li");
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }

      mycard.appendChild(myH5);
      mycard.appendChild(myl1);
      mycard.appendChild(myl2);
      mycard.appendChild(myl3);
      mycard.appendChild(mylist);
  
      section.appendChild(mycard);
    }
}