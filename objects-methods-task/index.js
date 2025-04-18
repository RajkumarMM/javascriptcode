//1) Print all the names and age of all the users using destructuring.
var teamOne = {
  data: [
    {
      name: 'kamaraj',
      age: '23',
      native: 'KVP'
    },
    {
      name: 'KumarSTR',
      age: '45',
      native: 'TVL'
    },
    {
      name: 'Inbaraj',
      age: '32',
      native: 'MDU'
    }
  ]
};
console.log("1) printing all the names of the team1 object");
teamOne.data.forEach((person) =>{
    console.log(person.name);
});

//2) print the rank and grade of the student (use destructure).
let teamTwo = {
  data: [
    {
      name: 'Ajay',
      personal: {
        age: '25',
        native: 'nellai',
        education: {
          rank: '2',
          grade: 'B'
        },
        interest: {
          hobby: 'book reading'
        }
      }
    },
    {
      name: 'vicky',
      personal: {
        age: '26',
        native: 'chennai',
        education: {
          rank: '3',
          grade: 'D'
        },
        interest: {
          hobby: 'playing'
        }
      }
    },
    {
      name: 'muthu',
      personal: {
        age: '35',
        native: 'madurai',
        education: {
          rank: '5',
          grade: 'F'
        },
        interest: {
          hobby: 'writing'
        }
      }
    }
  ]
};
console.log("2) printinng person rank and grade");
teamTwo.data.forEach((person) => {
    console.log(person.name, person.personal.education.grade, person.personal.education.rank);
});


//3) print the streetName and city of the user (use destructure).
let teamThree = {
  data: [
    {
      gender: 'Male',
      requestSource: 'Student',
      requestStatus: 'Pending',
      requestData: {
        educationInfo: [
          {
            userEmail: 'Doaulas@rrigg.com',
            qualification: 'College'
          }
        ],
        personalInfo: [
          {
            userFirstName: 'Doaul',
            userLastName: 'Doaulas',
            designation: 'Developer',
            location: {
              doorNumber: '2323',
              streetName: 'indra nager',
              city: 'kovilaptti'
            }
          }
        ]
      }
    },
    {
      gender: 'Female',
      requestSource: 'Student',
      requestStatus: 'Success',
      requestData: {
        educationInfo: [
          {
            userEmail: 'pooja@rrigg.com',
            qualification: 'College'
          }
        ],
        personalInfo: [
          {
            userFirstName: 'pooja',
            userLastName: 'kekar',
            designation: 'Tester',
            location: {
              doorNumber: '1236',
              streetName: 'gandhi gram',
              city: 'rajasthan'
            }
          }
        ]
      }
    }
  ]
};

console.log("3) printing street name and city");
teamThree.data.forEach((person) => {
    person.requestData.personalInfo.forEach((person) => {
        console.log(person.location.streetName, person.location.city);
    });
});

//4) print the first name, doorNumber, streetName, pincode (use destructure)
 let teamFour =[
      { firstName: 'suresh' },
      'lname',
      23,
      {
        cityCode: 'KVP',
        location: {
          doorNumber: '1236',
          streetName: 'gandhi gram'
        }
      },
      'tamilnadu',
      'india',
      '628502'
    ]; 

    console.log("4) printing streetname, firstname and doornumber");
    console.log(teamFour[0].firstName, teamFour[3].location.doorNumber, teamFour[3].location.streetName);