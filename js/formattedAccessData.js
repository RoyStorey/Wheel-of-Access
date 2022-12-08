    //Declaring variables to reduce redundundancy in typing.
let mss = accessData.missionsupportsystems;
let airgap = mss.airgap;
let directconnect = mss.directconnect;

let transport = accessData.transport;
let services = transport.services;
let satcom = transport.satcom;
let gateway = transport.gateway;

let customer = accessData.customer;
let travelkit = customer.travelkit;
let personal = customer.personal;

let aircraftnetwork = accessData.aircraftnetwork;
let mcs = aircraftnetwork.mcs;
let avionicsbus = aircraftnetwork.avionicsbus;

//Instead of hardcoding each leaf, you COULD for-loop through the json. This means that if you updated the json, then it would auto-update the anychart.
//Do not shit where you sleep.

  var data = [
    {
      name: mss.name, description: mss.description, visibility:mss.visibility, normal: { fill: mss.color }, children: [
        {
          name: airgap.name, children: [
            { name: airgap.missionplanning.name,},
            { name: airgap.upgrademedia.name },
            { name: airgap.navaid.name }
          ]
        },
        {
          name: directconnect.name, children: [
            { name: directconnect.efb.name, normal: { fill: directconnect.efb.color } },
            { name: directconnect.mxlaptops.name, normal: { fill: directconnect.mxlaptops.color } }
          ]
         
        },
      ]
      
    },
    {
      name:transport.name, normal: { fill: transport.color }, children: [
        {
          name: services.name, children: [
            { name: services.sln.name },
            { name: services.cms.name },
            { name: services.jwics.name }
          ]
          
        },
        {
          name: satcom.name, children: [
            { name: satcom.milcom.name},
            { name: satcom.viasat.name },
            { name: satcom.satcomdirect.name }
          ]
        },
        {
          name: gateway.name, children: [
            { name: gateway.eacn.name, normal: { fill: gateway.eacn.color } },
            { name: gateway.dvhomenetwork.name},
            { name: gateway.viasat.name }
          ]
        }
      ]
     
    },
    {
      name: customer.name, normal: { fill: customer.color }, children: [
        {
          name: travelkit.name, children: [
            { name: travelkit.hostdevices.name },
            { name: travelkit.networkdevices.name}
          ] 
        },
        {
          name: personal.name, normal: { fill: personal.color }, children: [
            { name: personal.personaldevices.name }
          ]
          
        },
      ]
     
    },
    {
      name: aircraftnetwork.name, normal: { fill: aircraftnetwork.color }, children: [
        {
          name: mcs.name, children: [
            { name: mcs.hostdevices.name },
            { name: mcs.networkdevices.name }
          ]
        },
        {
          name: avionicsbus.name, normal: { fill: avionicsbus.color }, children: [
            { name: avionicsbus.arinc429.name }
          ]
        },
      ]
      
    },
  ]
;

let selectedData = mss;
let selectedHeader = selectedData;
let selectedDescription = selectedData.description;
//POCs and Completion Criteria are going to be arrays, need to loop when time comes.
let selectedPOCs = selectedData.poc;
let selectedVisibility = selectedData.visibility;
let selectedCompletionCriteria = selectedData.completionItems;


// ['Mission Planning', 'Upgrade Media', 'NAVAID/Flightline Equip', 'EFB', 'Mx Laptops', 'SLN', 'CMS', 'JWICS', 'MILCOM', 'VIASAT', 'SATCOM Direct', 'EACN', 'DV Home Network', 'VIASAT', 'Network Devices', 'Host Devices', 'Personal Devices', 'Host Devices', 'Network Devices', 'ARINC']