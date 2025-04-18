//Use the destructuring to get following giveg values
//===================================================
//1) Get the David's state value from the gryffindor and street jorge's temporary address street values from the slytherin
//2) Get the city name of Techno solutions company from the slytherin
//3) Get the Don Joeh's details except his phone number from the gryffindor

let dataOne ={
  "gryffindor": {
    "region": [
      {
        "id": 1,
        "name": "John Doe"
      },
      {
        "id": 2,
        "name": "Don Joeh",
	  "age":20,	
	  "phone":978461313021
      },
      {
        "id": 3,
        "name": "David",
        "address": [
          {
            "city": "CBE",
            "state": "TN"
          }
        ]
      }
    ],
    "country": {
      "id": 2,
      "company_name": "ACME"
    }
  },
  "slytherin": {
    "region": [
      {
        "id": 1,
        "name": "John Doe"
      },
      {
        "id": 2,
        "name": "Don Joeh"
      },
      {
        "id": 3,
        "name": "Jorge",
        "address": [
          {
            "city": "CBE",
            "state": "TN",
            "temporary_address": [
              {
                "doorNo": "7g",
                "street": "saint thomas",
                "city": "chennai"
              }
            ]
          }
        ]
      }
    ],
    "country": {
      "canada": [
        {
          "id": 1,
          "company_name": "Techno solutions",
          "address": [
            {
              "street": "Argyle Street",
              "city": "Glasgow"
            }
          ]
        }
      ]
    }
  }
}
console.log("david state : ", dataOne.gryffindor.region[2].address[0].state);
console.log("jorge street : ", dataOne.slytherin.region[2].address[0].temporary_address[0].street);
console.log("techno company city :", dataOne.slytherin.country.canada[0].address[0].city);
console.log("donjoe detail:", dataOne.gryffindor.region[1].id, dataOne.gryffindor.region[1].name, dataOne.gryffindor.region[1].age);