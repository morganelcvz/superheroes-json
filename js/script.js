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



// function showdata(data) {
// const members = data["members"];

// for (var i = 0; i < data.members.length; i++) {
//     document.getElementById("mycard").innerHTML += `
//             <div class="card-body">
//                 <h5 class="card-title">${myh5}</h5>
//                 <p class="card-text">
//                     <ul>
//                         <li><b>Secret identity :</b> ${myl2}</li>
//                         <li><b>Age :</b> ${myl1}</li>
//                         <li><b>Superpowers :</b></b>
//                         <ul>
//                             <li>${myl3}</li>
//                         </ul>
//                         </li>
//                     </ul>
//                 </p>
//             </div>
// `
// }

//     for (var i = 0; i < data.members.length; i++) {
//         var mycard = document.createElement("card");
//         var myh5 = document.createElement("h5");
//         var mylist = document.createElement("ul");
//         var myl1 = document.createElement("li");
//         var myl2 = document.createElement("li");
//         var myl3 = document.createElement("li");

//         myh5.textContent = members[i].name;
//         myl1.textContent = "Age: " + members[i].age;
//         myl2.textContent = "Secret identity: " + members[i].secretIdentity;
//         myl3.textContent = "Superpowers:";

//         var superPowers = members[i].powers;
//         for (var j = 0; j < superPowers.length; j++) {
//             var listItem = document.createElement("li");
//             listItem.textContent = superPowers[j];
//             myList.appendChild(listItem);
//         }
//     }
// }


function showdata(data) {
const members = data["members"]

for (var i = 0; i < data.members.length; i++) {
    document.getElementById("mycard").innerHTML += `
            <div class="card-body">
                <h5 class="card-title">${members.name}</h5>
                <p class="card-text">
                    <ul>
                        <li><b>Secret identity :</b> ${members.secretIdentity}</li>
                        <li><b>Age :</b> ${members.age}</li>
                        <li><b>Superpowers :</b></b>
                        <ul>
                            <li>${members.powers}</li>
                        </ul>
                        </li>
                    </ul>
                </p>
            </div>
`
}
}

showdata(data);