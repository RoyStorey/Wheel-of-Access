accessData = {"missionsupportsystems": {
  "name": "Mission Support Systems",
  "poc": ["Joe"],
  "description": "This is mission support systems...",
  "completionItems": ["develop", "design", "defend"],
  "color": "#790000",
  "visibility":"No visibility or monitoring",
  //figure out if it's necessary to make the name as the key. Doesn't seem like it would be. I think children would be the key, with the value being the array of
  //children. Then you could select the object by doing missionsupportsystems.children[i].children[j].name...
  "children":[{"airgap": {
    "name": "Air Gap",
    "poc": ["Joe"],
    "description": "This is mission support systems...",
    "completionItems": ["develop", "design", "defend"],
    "color": "#790000",
    "visibility":"No visibility or monitoring",
    "children":[{
      "name": "NAVAID/Flightline Equipment",
      "poc": ["Joe","Wendy","Bill"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#790000",
      "visibility":"No visibility or monitoring"
    },{
      "name": "Upgrade Media",
      "poc": ["Joe"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#790000",
      "visibility":"No visibility or monitoring"
    },{
      "name": "Mission Planning",
      "poc": ["Joe"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#790000",
      "visibility":"No visibility or monitoring"
    }]
  },
  "directconnect": {
    "name": "Direct Connect",
    "poc": ["Joe"],
    "description": "This is mission support systems...",
    "completionItems": ["develop", "design", "defend"],
    "color": "#790000",
    "visibility":"No visibility or monitoring",
    "children":[{"efb": {
      "name": "EFB",
      "poc": ["John Doe"],
      "description": "Electronic Flight Bags, used by flight crew during missions for tracking of mission/flight data.",
      "completionItems": ["None"],
      "color": "#0b5a00",
      "visibility":"Full MDT monitoring"
    },
    "mxlaptops": {
      "name": "Mx Laptops",
      "poc": ["Joe"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#8f7a00",
      "visibility":"No visibility or monitoring"
    }}]
  }}]
},
"transport":{
  "name": "Transport",
  "poc": ["Joe"],
  "description": "This is mission support systems...",
  "completionItems": ["develop", "design", "defend"],
  "color": "#292932",
  "visibility":"No visibility or monitoring",
  "children":[{"services":{  
    "name": "Services",
    "poc": ["Joe"],
    "description": "This is mission support systems...",
    "completionItems": ["develop", "design", "defend"],
    "color": "#292932",
    "visibility":"No visibility or monitoring",
    "children":[{"sln": {
      "name": "SLN",
      "poc": ["Joe"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#292932",
      "visibility":"No visibility or monitoring"}
    },{"cms": {
      "name": "CMS",
      "poc": ["Joe"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#292932",
      "visibility":"No visibility or monitoring"}
    },{"jwics": {
      "name": "JWICS",
      "poc": ["Joe"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#292932",
      "visibility":"No visibility or monitoring"}
  }]}},
  {"satcom":{
    "name": "SATCOM",
    "poc": ["Joe"],
    "description": "This is mission support systems...",
    "completionItems": ["develop", "design", "defend"],
    "color": "#292932",
    "visibility":"No visibility or monitoring",
    "children":[{"milcom": {
      "name": "MILCOM",
      "poc": ["Joe"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#292932",
      "visibility":"No visibility or monitoring"
    },
    "viasat": {
      "name": "VIASAT",
      "poc": ["Joe"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#292932",
      "visibility":"No visibility or monitoring"
    },
    "satcomdirect": {
      "name": "SATCOM Direct",
      "poc": ["Joe"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#292932",
      "visibility":"No visibility or monitoring"
    }}]}},
  {"gateway":{
    "name": "Gateway",
    "poc": ["Joe"],
    "description": "This is mission support systems...",
    "completionItems": ["develop", "design", "defend"],
    "color": "#292932",
    "visibility":"No visibility or monitoring",
    "children":[{"eacn": {
      "name": "EACN",
      "poc": ["Ian","Emily","Scott"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#0b5a00",
      "visibility":"No visibility or monitoring"
    },
    "dvhomenetwork": {
      "name": "DV Home Network",
      "poc": ["Joe"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#292932",
      "visibility":"No visibility or monitoring"
    },
    "viasat": {
      "name": "VIASAT",
      "poc": ["Joe"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#292932",
      "visibility":"No visibility or monitoring"
    }}]}}]},

"customer":{
  "name": "Customer",
  "poc": ["Joe"],
  "description": "This is mission support systems...",
  "completionItems": ["develop", "design", "defend"],
  "color": "#292932",
  "visibility":"No visibility or monitoring",
  "children":[{
    "travelkit":{
      "name": "Travel Kit",
      "poc": ["Joe"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#292932",
      "visibility":"No visibility or monitoring"}
  },{"networkdevices": {
      "name": "Network Devices",
      "poc": ["Joe"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#292932",
      "visibility":"No visibility or monitoring"},
  },
  {"personal": {
    "name": "Personal",
    "poc": ["Joe"],
    "description": "This is mission support systems...",
    "completionItems": ["develop", "design", "defend"],
    "color": "#790000",
    "visibility":"No visibility or monitoring",
    "children":[{
      "personaldevices": {
        "name": "Personal Devices",
        "poc": ["Joe"],
        "description": "This is mission support systems...",
        "completionItems": ["develop", "design", "defend"],
        "color": "#790000",
        "visibility":"No visibility or monitoring"
    }}]
  }},
]},

"aircraftnetwork":{
  "name": "Aircraft Network",
  "poc": ["Joe"],
  "description": "This is mission support systems...",
  "completionItems": ["develop", "design", "defend"],
  "color": "#292932",
  "visibility":"No visibility or monitoring",
  "children":[{
    "mcs":{
      "name": "MCS",
      "poc": ["Joe"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#292932",
      "visibility":"No visibility or monitoring",
      "children":[{"hostdevices": {
        "name": "Host Devices",
        "poc": ["Joe"],
        "description": "This is mission support systems...",
        "completionItems": ["develop", "design", "defend"],
        "color": "#292932",
        "visibility":"No visibility or monitoring"
    }},{"networkdevices": {
      "name": "Network Devices",
      "poc": ["Joe"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#292932",
      "visibility":"No visibility or monitoring"
    }}]},
  },{"avionicsbus":{ 
      "name": "Avionics Bus",
      "poc": ["Joe"],
      "description": "This is mission support systems...",
      "completionItems": ["develop", "design", "defend"],
      "color": "#790000",
      "visibility":"No visibility or monitoring",
      "children":[{
        "arinc429": {
        "name": "ARINC-429",
        "poc": ["Joe"],
        "description": "This is mission support systems...",
        "completionItems": ["develop", "design", "defend"],
        "color": "#790000",
        "visibility":"No visibility or monitoring"
        }
      }]
  }}]}
}
















// accessDataBackup = {"missionsupportsystems": {
//   "airgap": {
//     "navaid": {
//       "name": "NAVAID/Flightline Equipment",
//       "poc": ["Joe","Wendy","Bill"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#790000",
//       "visibility":"No visibility or monitoring"
//     },
//     "upgrademedia": {
//       "name": "Upgrade Media",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#790000",
//       "visibility":"No visibility or monitoring"
//     },
//     "missionplanning": {
//       "name": "Mission Planning",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#790000",
//       "visibility":"No visibility or monitoring"
//     },
//     "name": "Air Gap",
//     "poc": ["Joe"],
//     "description": "This is mission support systems...",
//     "completionItems": ["develop", "design", "defend"],
//     "color": "#790000",
//     "visibility":"No visibility or monitoring"
//   },
//   "directconnect": {
//     "efb": {
//       "name": "EFB",
//       "poc": ["John Doe"],
//       "description": "Electronic Flight Bags, used by flight crew during missions for tracking of mission/flight data.",
//       "completionItems": ["None"],
//       "color": "#0b5a00",
//       "visibility":"Full MDT monitoring"
//     },
//     "mxlaptops": {
//       "name": "Mx Laptops",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#8f7a00",
//       "visibility":"No visibility or monitoring"
//     },
//     "name": "Direct Connect",
//     "poc": ["Joe"],
//     "description": "This is mission support systems...",
//     "completionItems": ["develop", "design", "defend"],
//     "color": "#790000",
//     "visibility":"No visibility or monitoring"
//   },
//   "name": "Mission Support Systems",
//   "poc": ["Joe"],
//   "description": "This is mission support systems...",
//   "completionItems": ["develop", "design", "defend"],
//   "color": "#790000",
//   "visibility":"No visibility or monitoring"
// },
// "transport":{
//   "services": {
//     "sln": {
//         "name": "SLN",
//         "poc": ["Joe"],
//         "description": "This is mission support systems...",
//         "completionItems": ["develop", "design", "defend"],
//         "color": "#292932",
//         "visibility":"No visibility or monitoring"
//     },"cms": {
//         "name": "CMS",
//         "poc": ["Joe"],
//         "description": "This is mission support systems...",
//         "completionItems": ["develop", "design", "defend"],
//         "color": "#292932",
//         "visibility":"No visibility or monitoring"
//     },"jwics": {
//         "name": "JWICS",
//         "poc": ["Joe"],
//         "description": "This is mission support systems...",
//         "completionItems": ["develop", "design", "defend"],
//         "color": "#292932",
//         "visibility":"No visibility or monitoring"
//     },
//     "name": "Services",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#292932",
//       "visibility":"No visibility or monitoring"
//   },
//   "satcom": {
//     "milcom": {
//       "name": "MILCOM",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#292932",
//       "visibility":"No visibility or monitoring"
//     },
//     "viasat": {
//       "name": "VIASAT",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#292932",
//       "visibility":"No visibility or monitoring"
//     },
//     "satcomdirect": {
//       "name": "SATCOM Direct",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#292932",
//       "visibility":"No visibility or monitoring"
//     },
//     "name": "SATCOM",
//     "poc": ["Joe"],
//     "description": "This is mission support systems...",
//     "completionItems": ["develop", "design", "defend"],
//     "color": "#292932",
//     "visibility":"No visibility or monitoring"
//   },
//   "gateway": {
//     "eacn": {
//       "name": "EACN",
//       "poc": ["Ian","Emily","Scott"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#0b5a00",
//       "visibility":"No visibility or monitoring"
//     },
//     "dvhomenetwork": {
//       "name": "DV Home Network",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#292932",
//       "visibility":"No visibility or monitoring"
//     },
//     "viasat": {
//       "name": "VIASAT",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#292932",
//       "visibility":"No visibility or monitoring"
//     },
//     "name": "Gateway",
//     "poc": ["Joe"],
//     "description": "This is mission support systems...",
//     "completionItems": ["develop", "design", "defend"],
//     "color": "#292932",
//     "visibility":"No visibility or monitoring"
//   },
//   "name": "Transport",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#292932",
//       "visibility":"No visibility or monitoring"
// },
// "customer":{
//   "travelkit": {
//     "hostdevices": {
//       "name": "Host Devices",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#292932",
//       "visibility":"No visibility or monitoring"
//     },
//     "networkdevices": {
//       "name": "Network Devices",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#292932",
//       "visibility":"No visibility or monitoring"
//     },
//     "name": "Travel Kit",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#292932",
//       "visibility":"No visibility or monitoring"
//   },
//   "personal": {
//     "personaldevices": {
//       "name": "Personal Devices",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#790000",
//       "visibility":"No visibility or monitoring"
//     },
//     "name": "Personal",
//     "poc": ["Joe"],
//     "description": "This is mission support systems...",
//     "completionItems": ["develop", "design", "defend"],
//     "color": "#790000",
//     "visibility":"No visibility or monitoring"
//   },
//   "name": "Customer",
//   "poc": ["Joe"],
//   "description": "This is mission support systems...",
//   "completionItems": ["develop", "design", "defend"],
//   "color": "#292932",
//   "visibility":"No visibility or monitoring"
// },
// "aircraftnetwork":{
//   "mcs": {
//     "hostdevices": {
//       "name": "Host Devices",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#292932",
//       "visibility":"No visibility or monitoring"
//     },
//     "networkdevices": {
//       "name": "Network Devices",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#292932",
//       "visibility":"No visibility or monitoring"
//     },
//     "name": "MCS",
//     "poc": ["Joe"],
//     "description": "This is mission support systems...",
//     "completionItems": ["develop", "design", "defend"],
//     "color": "#292932",
//     "visibility":"No visibility or monitoring"
//   },
//   "avionicsbus": {
//     "arinc429": {
//       "name": "ARINC-429",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#790000",
//       "visibility":"No visibility or monitoring"
//     },
//     "name": "Avionics Bus",
//     "poc": ["Joe"],
//     "description": "This is mission support systems...",
//     "completionItems": ["develop", "design", "defend"],
//     "color": "#790000",
//     "visibility":"No visibility or monitoring"
//   },
//   "name": "Aircraft Network",
//       "poc": ["Joe"],
//       "description": "This is mission support systems...",
//       "completionItems": ["develop", "design", "defend"],
//       "color": "#292932",
//       "visibility":"No visibility or monitoring"
//   }
// }