//traditional way .then
//fetch ('https://data.covid19india.org/v4/min/data.min.json')
//.then((res) => {
//  if (!res.ok) {
//    return console.log("problem");
//  }
//  return res.json();
//})
//.then(data => {
//    const confirmed = document.querySelector('.confirmed');
//    const decreaced = document.querySelector('.decreaced');
//    const recovered = document.querySelector('.recovered');
//    const tested = document.querySelector('.tested');
//    const vaccinated1 = document.querySelector('.vaccinated1');
//    const vaccinated2 = document.querySelector('.vaccinated2');
//    confirmed.innerHTML = data.TN.total.confirmed;
//    decreaced.innerHTML = data.TN.total.deceased;
//    recovered.innerHTML = data.TN.total.recovered;
//    tested.innerHTML = data.TN.total.tested;
//    vaccinated1.innerHTML = data.TN.total.vaccinated1;
//    vaccinated2.innerHTML = data.TN.total.vaccinated2;
//
//})
//.catch(err => console.log(err));
//async and await
// await only use in async function.
const fetchData = async () => {
  try {
    const res = await fetch ('https://data.covid19india.org/v4/min/data.min.json');
     if (!res.ok) {
      return console.log("problem");
      }
    const data = await res.json();

  const confirmed = document.querySelector('.confirmed');
  const decreaced = document.querySelector('.decreaced');
  const recovered = document.querySelector('.recovered'); 
  const tested = document.querySelector('.tested');
  const vaccinated1 = document.querySelector('.vaccinated1');
  const vaccinated2 = document.querySelector('.vaccinated2');
  confirmed.innerHTML = data.TN.total.confirmed;
    decreaced.innerHTML = data.TN.total.deceased;
    recovered.innerHTML = data.TN.total.recovered;
    tested.innerHTML = data.TN.total.tested;
    vaccinated1.innerHTML = data.TN.total.vaccinated1;
    vaccinated2.innerHTML = data.TN.total.vaccinated2;

  } catch (error) {
      console.log(error);
  }

}

fetchData();

//tn details
/*
{
"TN": {
    "delta": {
      "confirmed": 1009,
      "deceased": 19,
      "recovered": 1183,
      "tested": 123701,
      "vaccinated1": 77325,
      "vaccinated2": 106584
    },
    "delta21_14": {
      "confirmed": 8827
    },
    "delta7": {
      "confirmed": 7407,
      "deceased": 97,
      "recovered": 8852,
      "tested": 858304,
      "vaccinated1": 788134,
      "vaccinated2": 1578082
    },
    "districts": {
      "Airport Quarantine": {
        "delta21_14": {
          "confirmed": 3
        },
        "delta7": {
          "confirmed": 1,
          "recovered": 1
        },
        "total": {
          "confirmed": 2113,
          "deceased": 2,
          "recovered": 2107
        }
      },
      "Ariyalur": {
        "delta": {
          "confirmed": 5,
          "recovered": 3,
          "vaccinated1": 1127,
          "vaccinated2": 3941
        },
        "delta21_14": {
          "confirmed": 51
        },
        "delta7": {
          "confirmed": 35,
          "deceased": 1,
          "recovered": 44,
          "vaccinated1": 19203,
          "vaccinated2": 29689
        },
        "meta": {
          "population": 752481,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 16854,
          "deceased": 261,
          "recovered": 16548,
          "tested": 18285,
          "vaccinated1": 475390,
          "vaccinated2": 157166
        }
      },
      "Chengalpattu": {
        "delta": {
          "confirmed": 83,
          "deceased": 2,
          "recovered": 93,
          "vaccinated1": 3145,
          "vaccinated2": 3415
        },
        "delta21_14": {
          "confirmed": 658
        },
        "delta7": {
          "confirmed": 627,
          "deceased": 5,
          "recovered": 706,
          "vaccinated1": 26704,
          "vaccinated2": 39438
        },
        "meta": {
          "population": 2556244,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 171777,
          "deceased": 2506,
          "recovered": 168327,
          "tested": 51771,
          "vaccinated1": 1337641,
          "vaccinated2": 604784
        }
      },
      "Chennai": {
        "delta": {
          "confirmed": 118,
          "deceased": 4,
          "recovered": 143,
          "vaccinated1": 4126,
          "vaccinated2": 8535
        },
        "delta21_14": {
          "confirmed": 1162
        },
        "delta7": {
          "confirmed": 880,
          "deceased": 12,
          "recovered": 1093,
          "vaccinated1": 52515,
          "vaccinated2": 124932
        },
        "meta": {
          "notes": "[July 22]: 444 backdated deceased entries added to Chennai in TN bulletin.",
          "population": 7100000,
          "tested": {
            "date": "2021-02-01"
          }
        },
        "total": {
          "confirmed": 554672,
          "deceased": 8546,
          "recovered": 544701,
          "tested": 2667777,
          "vaccinated1": 4532809,
          "vaccinated2": 2671294
        }
      },
      "Coimbatore": {
        "delta": {
          "confirmed": 120,
          "deceased": 1,
          "recovered": 126,
          "vaccinated1": 770,
          "vaccinated2": 2853
        },
        "delta21_14": {
          "confirmed": 965
        },
        "delta7": {
          "confirmed": 869,
          "deceased": 15,
          "recovered": 988,
          "vaccinated1": 20971,
          "vaccinated2": 79387
        },
        "meta": {
          "population": 3472578,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 246780,
          "deceased": 2416,
          "recovered": 243070,
          "tested": 102107,
          "vaccinated1": 2717202,
          "vaccinated2": 1205484
        }
      },
      "Cuddalore": {
        "delta": {
          "confirmed": 16,
          "recovered": 18,
          "vaccinated1": 9299,
          "vaccinated2": 22186
        },
        "delta21_14": {
          "confirmed": 141
        },
        "delta7": {
          "confirmed": 129,
          "recovered": 132,
          "vaccinated1": 51773,
          "vaccinated2": 101735
        },
        "meta": {
          "population": 2600880,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 64085,
          "deceased": 867,
          "recovered": 62997,
          "tested": 36434,
          "vaccinated1": 1529591,
          "vaccinated2": 646400
        }
      },
      "Dharmapuri": {
        "delta": {
          "confirmed": 16,
          "recovered": 21,
          "vaccinated1": 811,
          "vaccinated2": 1674
        },
        "delta21_14": {
          "confirmed": 177
        },
        "delta7": {
          "confirmed": 110,
          "deceased": 1,
          "recovered": 161,
          "vaccinated1": 13388,
          "vaccinated2": 27153
        },
        "meta": {
          "population": 1502900,
          "tested": {
            "date": "2020-12-22"
          }
        },
        "total": {
          "confirmed": 28425,
          "deceased": 274,
          "recovered": 27957,
          "tested": 163803,
          "vaccinated1": 770955,
          "vaccinated2": 279901
        }
      },
      "Dindigul": {
        "delta": {
          "confirmed": 9,
          "recovered": 7,
          "vaccinated1": 321,
          "vaccinated2": 1040
        },
        "delta21_14": {
          "confirmed": 64
        },
        "delta7": {
          "confirmed": 58,
          "deceased": 1,
          "recovered": 51,
          "vaccinated1": 19630,
          "vaccinated2": 57260
        },
        "meta": {
          "population": 2161367,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 33099,
          "deceased": 645,
          "recovered": 32348,
          "tested": 27800,
          "vaccinated1": 1236504,
          "vaccinated2": 493453
        }
      },
      "Erode": {
        "delta": {
          "confirmed": 68,
          "deceased": 2,
          "recovered": 94,
          "vaccinated1": 244,
          "vaccinated2": 899
        },
        "delta21_14": {
          "confirmed": 549
        },
        "delta7": {
          "confirmed": 477,
          "deceased": 4,
          "recovered": 573,
          "vaccinated1": 16741,
          "vaccinated2": 46724
        },
        "meta": {
          "population": 2259608,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 104303,
          "deceased": 686,
          "recovered": 102836,
          "tested": 66240,
          "vaccinated1": 1370925,
          "vaccinated2": 552624
        }
      },
      "Kallakurichi": {
        "delta": {
          "confirmed": 14,
          "recovered": 23,
          "vaccinated1": 4089,
          "vaccinated2": 7322
        },
        "delta21_14": {
          "confirmed": 112
        },
        "delta7": {
          "confirmed": 66,
          "recovered": 118,
          "vaccinated1": 22603,
          "vaccinated2": 52087
        },
        "meta": {
          "population": 1370281,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 31364,
          "deceased": 210,
          "recovered": 31056,
          "tested": 28314,
          "vaccinated1": 696213,
          "vaccinated2": 299822
        }
      },
      "Kancheepuram": {
        "delta": {
          "confirmed": 30,
          "recovered": 37,
          "vaccinated1": 679,
          "vaccinated2": 1040
        },
        "delta21_14": {
          "confirmed": 237
        },
        "delta7": {
          "confirmed": 225,
          "deceased": 2,
          "recovered": 259,
          "vaccinated1": 13961,
          "vaccinated2": 24360
        },
        "meta": {
          "population": 1166401,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 74970,
          "deceased": 1258,
          "recovered": 73386,
          "tested": 37505,
          "vaccinated1": 663206,
          "vaccinated2": 250181
        }
      },
      "Kanyakumari": {
        "delta": {
          "confirmed": 17,
          "recovered": 12,
          "vaccinated1": 431,
          "vaccinated2": 1276
        },
        "delta21_14": {
          "confirmed": 132
        },
        "delta7": {
          "confirmed": 120,
          "recovered": 102,
          "vaccinated1": 17732,
          "vaccinated2": 51185
        },
        "meta": {
          "population": 1863178,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 62362,
          "deceased": 1048,
          "recovered": 61112,
          "tested": 79600,
          "vaccinated1": 1100888,
          "vaccinated2": 450620
        }
      },
      "Karur": {
        "delta": {
          "confirmed": 20,
          "recovered": 16,
          "vaccinated1": 74,
          "vaccinated2": 834
        },
        "delta21_14": {
          "confirmed": 80
        },
        "delta7": {
          "confirmed": 136,
          "deceased": 1,
          "recovered": 90,
          "vaccinated1": 5882,
          "vaccinated2": 32339
        },
        "meta": {
          "population": 1076588,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 24091,
          "deceased": 356,
          "recovered": 23523,
          "tested": 17190,
          "vaccinated1": 626136,
          "vaccinated2": 289120
        }
      },
      "Krishnagiri": {
        "delta": {
          "confirmed": 16,
          "recovered": 19,
          "vaccinated1": 404,
          "vaccinated2": 1731
        },
        "delta21_14": {
          "confirmed": 141
        },
        "delta7": {
          "confirmed": 134,
          "deceased": 1,
          "recovered": 160,
          "vaccinated1": 15883,
          "vaccinated2": 37027
        },
        "meta": {
          "population": 1883731,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 43570,
          "deceased": 348,
          "recovered": 43036,
          "tested": 14284,
          "vaccinated1": 1040491,
          "vaccinated2": 407695
        }
      },
      "Madurai": {
        "delta": {
          "confirmed": 13,
          "recovered": 17,
          "vaccinated1": 1060,
          "vaccinated2": 2012
        },
        "delta21_14": {
          "confirmed": 132
        },
        "delta7": {
          "confirmed": 99,
          "deceased": 3,
          "recovered": 122,
          "vaccinated1": 26340,
          "vaccinated2": 42498
        },
        "meta": {
          "population": 3991038,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 75215,
          "deceased": 1172,
          "recovered": 73853,
          "tested": 97279,
          "vaccinated1": 1500331,
          "vaccinated2": 583138
        }
      },
      "Mayiladuthurai": {
        "delta": {
          "confirmed": 3,
          "recovered": 10
        },
        "delta21_14": {
          "confirmed": 82
        },
        "delta7": {
          "confirmed": 41,
          "recovered": 80
        },
        "meta": {
          "population": 901000
        },
        "total": {
          "confirmed": 23280,
          "deceased": 316,
          "recovered": 22878
        }
      },
      "Nagapattinam": {
        "delta": {
          "confirmed": 16,
          "deceased": 1,
          "recovered": 20,
          "vaccinated1": 273,
          "vaccinated2": 953
        },
        "delta21_14": {
          "confirmed": 145
        },
        "delta7": {
          "confirmed": 97,
          "deceased": 10,
          "recovered": 121,
          "vaccinated1": 8662,
          "vaccinated2": 23176
        },
        "meta": {
          "population": 1614069,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 21074,
          "deceased": 346,
          "recovered": 20561,
          "tested": 20984,
          "vaccinated1": 813495,
          "vaccinated2": 289588
        }
      },
      "Namakkal": {
        "delta": {
          "confirmed": 43,
          "recovered": 51,
          "vaccinated1": 168,
          "vaccinated2": 442
        },
        "delta21_14": {
          "confirmed": 376
        },
        "delta7": {
          "confirmed": 315,
          "deceased": 2,
          "recovered": 397,
          "vaccinated1": 12694,
          "vaccinated2": 28265
        },
        "meta": {
          "population": 1721179,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 52245,
          "deceased": 498,
          "recovered": 51253,
          "tested": 24758,
          "vaccinated1": 987830,
          "vaccinated2": 397079
        }
      },
      "Nilgiris": {
        "delta": {
          "confirmed": 20,
          "deceased": 2,
          "recovered": 25,
          "vaccinated1": 71,
          "vaccinated2": 1092
        },
        "delta21_14": {
          "confirmed": 197
        },
        "delta7": {
          "confirmed": 124,
          "deceased": 3,
          "recovered": 220,
          "vaccinated1": 1613,
          "vaccinated2": 31952
        },
        "meta": {
          "population": 735071,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 33566,
          "deceased": 212,
          "recovered": 33164,
          "tested": 45839,
          "vaccinated1": 501986,
          "vaccinated2": 343811
        }
      },
      "Perambalur": {
        "delta": {
          "confirmed": 2,
          "recovered": 5,
          "vaccinated1": 383,
          "vaccinated2": 2161
        },
        "delta21_14": {
          "confirmed": 24
        },
        "delta7": {
          "confirmed": 26,
          "recovered": 27,
          "vaccinated1": 4307,
          "vaccinated2": 17440
        },
        "meta": {
          "population": 564511,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 12067,
          "deceased": 243,
          "recovered": 11790,
          "tested": 7981,
          "vaccinated1": 326872,
          "vaccinated2": 136491
        }
      },
      "Pudukkottai": {
        "delta": {
          "confirmed": 12,
          "recovered": 8,
          "vaccinated1": 554,
          "vaccinated2": 2862
        },
        "delta21_14": {
          "confirmed": 95
        },
        "delta7": {
          "confirmed": 75,
          "deceased": 2,
          "recovered": 68,
          "vaccinated1": 10691,
          "vaccinated2": 34202
        },
        "meta": {
          "population": 1918725,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 30183,
          "deceased": 416,
          "recovered": 29627,
          "tested": 20835,
          "vaccinated1": 827320,
          "vaccinated2": 314780
        }
      },
      "Railway Quarantine": {
        "total": {
          "confirmed": 428,
          "recovered": 428
        }
      },
      "Ramanathapuram": {
        "delta": {
          "confirmed": 3,
          "recovered": 6,
          "vaccinated1": 852,
          "vaccinated2": 2329
        },
        "delta21_14": {
          "confirmed": 59
        },
        "delta7": {
          "confirmed": 25,
          "recovered": 55,
          "vaccinated1": 9961,
          "vaccinated2": 32447
        },
        "meta": {
          "population": 1337560,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 20564,
          "deceased": 357,
          "recovered": 20158,
          "tested": 23389,
          "vaccinated1": 660673,
          "vaccinated2": 280037
        }
      },
      "Ranipet": {
        "delta": {
          "confirmed": 14,
          "recovered": 14,
          "vaccinated1": 506,
          "vaccinated2": 485
        },
        "delta21_14": {
          "confirmed": 85
        },
        "delta7": {
          "confirmed": 69,
          "deceased": 2,
          "recovered": 73,
          "vaccinated1": 10793,
          "vaccinated2": 13744
        },
        "meta": {
          "population": 1210277,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 43436,
          "deceased": 775,
          "recovered": 42557,
          "tested": 20118,
          "vaccinated1": 557267,
          "vaccinated2": 174051
        }
      },
      "Salem": {
        "delta": {
          "confirmed": 62,
          "deceased": 1,
          "recovered": 67,
          "vaccinated1": 396,
          "vaccinated2": 2125
        },
        "delta21_14": {
          "confirmed": 395
        },
        "delta7": {
          "confirmed": 427,
          "deceased": 3,
          "recovered": 442,
          "vaccinated1": 25814,
          "vaccinated2": 66134
        },
        "meta": {
          "population": 3480008,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 99893,
          "deceased": 1685,
          "recovered": 97619,
          "tested": 79660,
          "vaccinated1": 1925084,
          "vaccinated2": 791376
        }
      },
      "Sivaganga": {
        "delta": {
          "confirmed": 13,
          "recovered": 9,
          "vaccinated1": 195,
          "vaccinated2": 564
        },
        "delta21_14": {
          "confirmed": 75
        },
        "delta7": {
          "confirmed": 82,
          "recovered": 78,
          "vaccinated1": 10170,
          "vaccinated2": 31816
        },
        "meta": {
          "population": 1341250,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 20195,
          "deceased": 206,
          "recovered": 19854,
          "tested": 25824,
          "vaccinated1": 726010,
          "vaccinated2": 287468
        }
      },
      "Tenkasi": {
        "delta": {
          "confirmed": 4,
          "recovered": 4,
          "vaccinated1": 291,
          "vaccinated2": 446
        },
        "delta21_14": {
          "confirmed": 13
        },
        "delta7": {
          "confirmed": 25,
          "recovered": 14,
          "vaccinated1": 16935,
          "vaccinated2": 21454
        },
        "meta": {
          "population": 1407627,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 27357,
          "deceased": 484,
          "recovered": 26834,
          "tested": 26338,
          "vaccinated1": 736882,
          "vaccinated2": 233177
        }
      },
      "Thanjavur": {
        "delta": {
          "confirmed": 37,
          "recovered": 59,
          "vaccinated1": 12155,
          "vaccinated2": 2378
        },
        "delta21_14": {
          "confirmed": 426
        },
        "delta7": {
          "confirmed": 310,
          "deceased": 6,
          "recovered": 428,
          "vaccinated1": 49025,
          "vaccinated2": 31228
        },
        "meta": {
          "population": 2402781,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 75352,
          "deceased": 972,
          "recovered": 73874,
          "tested": 67445,
          "vaccinated1": 1224986,
          "vaccinated2": 486660
        }
      },
      "Theni": {
        "delta": {
          "confirmed": 1,
          "deceased": 1,
          "recovered": 5,
          "vaccinated1": 379,
          "vaccinated2": 1536
        },
        "delta21_14": {
          "confirmed": 30
        },
        "delta7": {
          "confirmed": 15,
          "deceased": 1,
          "recovered": 23,
          "vaccinated1": 11199,
          "vaccinated2": 33309
        },
        "meta": {
          "population": 1243684,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 43571,
          "deceased": 521,
          "recovered": 43018,
          "tested": 45839,
          "vaccinated1": 660187,
          "vaccinated2": 304832
        }
      },
      "Thiruvallur": {
        "delta": {
          "confirmed": 28,
          "recovered": 55,
          "vaccinated1": 2328,
          "vaccinated2": 4382
        },
        "delta21_14": {
          "confirmed": 421
        },
        "delta7": {
          "confirmed": 252,
          "deceased": 3,
          "recovered": 396,
          "vaccinated1": 25332,
          "vaccinated2": 47695
        },
        "meta": {
          "population": 3725697,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 119370,
          "deceased": 1842,
          "recovered": 117138,
          "tested": 67948,
          "vaccinated1": 1425728,
          "vaccinated2": 563426
        }
      },
      "Thiruvarur": {
        "delta": {
          "confirmed": 23,
          "deceased": 2,
          "recovered": 22,
          "vaccinated1": 291,
          "vaccinated2": 624
        },
        "delta21_14": {
          "confirmed": 242
        },
        "delta7": {
          "confirmed": 170,
          "deceased": 5,
          "recovered": 253,
          "vaccinated1": 13453,
          "vaccinated2": 29614
        },
        "meta": {
          "population": 1268094,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 41461,
          "deceased": 442,
          "recovered": 40760,
          "tested": 67445,
          "vaccinated1": 630274,
          "vaccinated2": 246969
        }
      },
      "Thoothukkudi": {
        "delta": {
          "confirmed": 11,
          "deceased": 1,
          "recovered": 9,
          "vaccinated1": 11497,
          "vaccinated2": 1612
        },
        "delta21_14": {
          "confirmed": 105
        },
        "delta7": {
          "confirmed": 85,
          "deceased": 1,
          "recovered": 90,
          "vaccinated1": 46323,
          "vaccinated2": 22453
        },
        "meta": {
          "population": 1738376,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 56304,
          "deceased": 409,
          "recovered": 55757,
          "tested": 49288,
          "vaccinated1": 984706,
          "vaccinated2": 328797
        }
      },
      "Tiruchirappalli": {
        "delta": {
          "confirmed": 37,
          "recovered": 49,
          "vaccinated1": 2445,
          "vaccinated2": 892
        },
        "delta21_14": {
          "confirmed": 331
        },
        "delta7": {
          "confirmed": 302,
          "deceased": 5,
          "recovered": 334,
          "vaccinated1": 32150,
          "vaccinated2": 48874
        },
        "meta": {
          "population": 2713858,
          "tested": {
            "date": "2020-08-07"
          }
        },
        "total": {
          "confirmed": 77534,
          "deceased": 1059,
          "recovered": 76038,
          "tested": 92586,
          "vaccinated1": 1468456,
          "vaccinated2": 636356
        }
      },
      "Tirunelveli": {
        "delta": {
          "confirmed": 11,
          "deceased": 1,
          "recovered": 13,
          "vaccinated1": 940,
          "vaccinated2": 627
        },
        "delta21_14": {
          "confirmed": 115
        },
        "delta7": {
          "confirmed": 93,
          "deceased": 1,
          "recovered": 125,
          "vaccinated1": 22582,
          "vaccinated2": 19904
        },
        "meta": {
          "population": 1665253,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 49374,
          "deceased": 432,
          "recovered": 48812,
          "tested": 54208,
          "vaccinated1": 815687,
          "vaccinated2": 275985
        }
      },
      "Tirupathur": {
        "delta": {
          "confirmed": 10,
          "recovered": 8,
          "vaccinated1": 311,
          "vaccinated2": 525
        },
        "delta21_14": {
          "confirmed": 61
        },
        "delta7": {
          "confirmed": 50,
          "recovered": 66,
          "vaccinated1": 11111,
          "vaccinated2": 24743
        },
        "meta": {
          "population": 1111812,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 29301,
          "deceased": 625,
          "recovered": 28600,
          "tested": 23998,
          "vaccinated1": 541496,
          "vaccinated2": 205219
        }
      },
      "Tiruppur": {
        "delta": {
          "confirmed": 69,
          "deceased": 1,
          "recovered": 53,
          "vaccinated1": 133,
          "vaccinated2": 443
        },
        "delta21_14": {
          "confirmed": 556
        },
        "delta7": {
          "confirmed": 504,
          "deceased": 5,
          "recovered": 537,
          "vaccinated1": 20414,
          "vaccinated2": 50762
        },
        "meta": {
          "population": 2471222,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 95405,
          "deceased": 979,
          "recovered": 93683,
          "tested": 36301,
          "vaccinated1": 1671392,
          "vaccinated2": 611015
        }
      },
      "Tiruvannamalai": {
        "delta": {
          "confirmed": 18,
          "recovered": 28,
          "vaccinated1": 4455,
          "vaccinated2": 10228
        },
        "delta21_14": {
          "confirmed": 142
        },
        "delta7": {
          "confirmed": 120,
          "recovered": 158,
          "vaccinated1": 31415,
          "vaccinated2": 73235
        },
        "meta": {
          "population": 2468965,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 54968,
          "deceased": 667,
          "recovered": 54122,
          "tested": 76170,
          "vaccinated1": 1270049,
          "vaccinated2": 533376
        }
      },
      "Vellore": {
        "delta": {
          "confirmed": 12,
          "recovered": 15,
          "vaccinated1": 953,
          "vaccinated2": 1825
        },
        "delta21_14": {
          "confirmed": 119
        },
        "delta7": {
          "confirmed": 117,
          "deceased": 1,
          "recovered": 139,
          "vaccinated1": 18978,
          "vaccinated2": 31716
        },
        "meta": {
          "population": 1614242,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 49864,
          "deceased": 1131,
          "recovered": 48564,
          "tested": 47936,
          "vaccinated1": 763735,
          "vaccinated2": 336366
        }
      },
      "Viluppuram": {
        "delta": {
          "confirmed": 10,
          "recovered": 11,
          "vaccinated1": 12953,
          "vaccinated2": 11812
        },
        "delta21_14": {
          "confirmed": 84
        },
        "delta7": {
          "confirmed": 79,
          "deceased": 1,
          "recovered": 83,
          "vaccinated1": 53748,
          "vaccinated2": 67153
        },
        "meta": {
          "population": 2093003,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 45857,
          "deceased": 356,
          "recovered": 45382,
          "tested": 52064,
          "vaccinated1": 1085842,
          "vaccinated2": 444502
        }
      },
      "Virudhunagar": {
        "delta": {
          "confirmed": 5,
          "recovered": 8,
          "vaccinated1": 1007,
          "vaccinated2": 3437
        },
        "delta21_14": {
          "confirmed": 45
        },
        "delta7": {
          "confirmed": 38,
          "recovered": 45,
          "vaccinated1": 16628,
          "vaccinated2": 50467
        },
        "meta": {
          "population": 1943309,
          "tested": {
            "date": "2020-07-23"
          }
        },
        "total": {
          "confirmed": 46294,
          "deceased": 548,
          "recovered": 45687,
          "tested": 28620,
          "vaccinated1": 1072788,
          "vaccinated2": 505098
        }
      }
    },
    "meta": {
      "date": "2021-10-31",
      "last_updated": "2021-11-01T09:54:14+05:30",
      "notes": "[June 29 2021]: TN has introduced a new district \"Mayiladuthurai\" in the bulletin and has assigned cases from Nagapattinam to the new district.\n[July 22]: 444 backdated deceased entries added to Chennai in TN bulletin.\n2 deaths cross notified to other states from Chennai and Coimbatore.\n1 patient died after turning negative for infection in Chengalpattu.\nThese cases have been added to TN deceased tally",
      "population": 75695000,
      "tested": {
        "date": "2021-10-31",
        "source": "https://t.me/Covid19india_Auxiliary_Test_Data/11882"
      },
      "vaccinated": {
        "date": "2021-10-31"
      }
    },
    "total": {
      "confirmed": 2702623,
      "deceased": 36116,
      "recovered": 2655015,
      "tested": 51159242,
      "vaccinated1": 41279432,
      "vaccinated2": 17619141
    }
  }
}
*/