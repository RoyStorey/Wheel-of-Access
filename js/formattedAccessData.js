    //Declaring variables to reduce redundundancy in typing.


// let mss = accessData.missionsupportsystems;
//   let airgap = mss.airgap;
//     let missionplanning = airgap.missionplanning;
//     let upgrademedia = airgap.upgrademedia;
//     let navaid = airgap.navaid;
//   let directconnect = mss.directconnect;
//     let efb = directconnect.efb;
//     let mxlaptops = directconnect.mxlaptops;

// let transport = accessData.transport;
//   let services = transport.services;
//     let sln = services.sln;
//     let cms = services.cms;
//     let jwics = services.jwics;
//   let satcom = transport.satcom;
//     let milcom = satcom.milcom;
//     let viasat = satcom.viasat;
//     let satcomdirect = satcom.satcomdirect;
//   let gateway = transport.gateway;
//     let eacn = gateway.eacn;
//     let dvhomenetwork = gateway.dvhomenetwork;
//     let viasat2 = gateway.viasat;

// let customer = accessData.customer;
//   let travelkit = customer.travelkit;
//     let hostdevices = travelkit.hostdevices;
//     let networkdevices = travelkit.networkdevices;
//   let personal = customer.personal;
//     let personaldevices = personal.personaldevices

// let aircraftnetwork = accessData.aircraftnetwork;
//   let mcs = aircraftnetwork.mcs;
//     let mcshostdevices = mcs.hostdevices;
//     let mcsnetworkdevices = mcs.networkdevices;
//   let avionicsbus = aircraftnetwork.avionicsbus;
//     let arinc429 = avionicsbus.arinc429







//Instead of hardcoding each leaf, you COULD for-loop through the json. This means that if you updated the json, then it would auto-update the anychart.
//Do not shit where you sleep.
// function formatValue(val){
//   for (let i = 0; i <)
//     let formattedValue = 'name:'
//     return formattedValue
// }

// We straight up massaging data out here.

// let formattedVals = [];
// var data = accessData;

// function formatLevel(formattedVals){
//   for(const formattedVal in formattedVals){

//   }
// }
// //formats object (val) in uniform object format that anychart uses
// function formatObject(val){
//   let formattedObject = {name: val.name, description: val.description, poc:val.poc, visibility:val.visibility, completionItems:val.completionItems, normal: { fill: val.color }, id: val,children:[]};
//   return formattedObject;
// }
// // formats root objects and pushes to formattedVals
// for(let i = 0; i < accessData.length; i++){
//   if(accessData[i].hasOwnProperty('children')){
//     let objectChild = accessData[i].children
//   }
//   console.log(accessData[i])
//   formattedVals.push(formatObject(accessData[i]))
// }

// console.log(accessData)
// console.log(data)
// console.log(formattedVals)
//   var data2 = [
//     {
//       name: mss.name, description: mss.description, poc:mss.poc, visibility:mss.visibility, completionItems:mss.completionItems, normal: { fill: mss.color }, id: mss, children: [
//         {
//           name: airgap.name, description: airgap.description, poc:airgap.poc, visibility:airgap.visibility, completionItems:airgap.completionItems, normal: { fill: airgap.color }, id: airgap, children: [
//             { name: missionplanning.name, description: missionplanning.description, poc:missionplanning.poc, visibility:missionplanning.visibility, completionItems:missionplanning.completionItems, normal: { fill: missionplanning.color }, id: missionplanning,},
//             { name: upgrademedia.name, description: upgrademedia.description, poc:upgrademedia.poc, visibility:upgrademedia.visibility, completionItems:upgrademedia.completionItems, normal: { fill: upgrademedia.color }, id: upgrademedia },
//             { name: navaid.name, description: navaid.description, poc:navaid.poc, visibility:navaid.visibility, completionItems:navaid.completionItems, normal: { fill: navaid.color }, id: navaid }
//           ]
//         },
//         {
//           name: directconnect.name, description: directconnect.description, poc:directconnect.poc, visibility:directconnect.visibility, completionItems:directconnect.completionItems, normal: { fill: directconnect.color }, id: directconnect, children: [
//             { name: efb.name, description: efb.description, poc:efb.poc, visibility:efb.visibility, completionItems:efb.completionItems, normal: { fill: efb.color }, id: efb},
//             { name: mxlaptops.name, description: mxlaptops.description, poc:mxlaptops.poc, visibility:mxlaptops.visibility, completionItems:mxlaptops.completionItems, normal: { fill: mxlaptops.color }, id: mxlaptops}
//           ]
         
//         },
//       ]
      
//     },
//     {
//       name: transport.name, description: transport.description, poc:transport.poc, visibility:transport.visibility, completionItems:transport.completionItems, normal: { fill: transport.color }, id: transport, children: [
//         {
//           name: services.name, description: services.description, poc:services.poc, visibility:services.visibility, completionItems:services.completionItems, normal: { fill: services.color }, id: services, children: [
//             { name: sln.name, description: sln.description, poc:sln.poc, visibility:sln.visibility, completionItems:sln.completionItems, normal: { fill: sln.color }, id: sln },
//             { name: cms.name, description: cms.description, poc:cms.poc, visibility:cms.visibility, completionItems:cms.completionItems, normal: { fill: cms.color }, id: cms },
//             { name: jwics.name, description: jwics.description, poc:jwics.poc, visibility:jwics.visibility, completionItems:jwics.completionItems, normal: { fill: jwics.color }, id: jwics }
//           ]
          
//         },
//         {
//           name: satcom.name, description: satcom.description, poc:satcom.poc, visibility:satcom.visibility, completionItems:satcom.completionItems, normal: { fill: satcom.color }, id: satcom, children: [
//             { name: milcom.name, description: milcom.description, poc:milcom.poc, visibility:milcom.visibility, completionItems:milcom.completionItems, normal: { fill: milcom.color }, id: milcom},
//             { name: viasat.name, description: viasat.description, poc:viasat.poc, visibility:viasat.visibility, completionItems:viasat.completionItems, normal: { fill: viasat.color }, id: viasat},
//             { name: satcomdirect.name, description: satcomdirect.description, poc:satcomdirect.poc, visibility:satcomdirect.visibility, completionItems:satcomdirect.completionItems, normal: { fill: satcomdirect.color }, id: satcomdirect }
//           ]
//         },
//         {
//           name: gateway.name, description: gateway.description, poc:gateway.poc, visibility:gateway.visibility, completionItems:gateway.completionItems, normal: { fill: gateway.color }, id: gateway, children: [
//             { name: eacn.name, description: eacn.description, poc:eacn.poc, visibility:eacn.visibility, completionItems:eacn.completionItems, normal: { fill: eacn.color }, id: eacn },
//             { name: dvhomenetwork.name, description: dvhomenetwork.description, poc:dvhomenetwork.poc, visibility:dvhomenetwork.visibility, completionItems:dvhomenetwork.completionItems, normal: { fill: dvhomenetwork.color }, id: dvhomenetwork},
//             { name: viasat2.name, description: viasat2.description, poc:viasat2.poc, visibility:viasat2.visibility, completionItems:viasat2.completionItems, normal: { fill: viasat2.color }, id: viasat2}
//           ]
//         }
//       ]
     
//     },
//     {
//       name: customer.name, description: customer.description, poc:customer.poc, visibility:customer.visibility, completionItems:customer.completionItems, normal: { fill: customer.color }, id: customer, children: [
//         {
//           name: travelkit.name, description: travelkit.description, poc:travelkit.poc, visibility:travelkit.visibility, completionItems:travelkit.completionItems, normal: { fill: travelkit.color }, id: travelkit, children: [
//             { name: hostdevices.name, description: hostdevices.description, poc:hostdevices.poc, visibility:hostdevices.visibility, completionItems:hostdevices.completionItems, normal: { fill: hostdevices.color }, id: hostdevices },
//             { name: networkdevices.name, description: networkdevices.description, poc:networkdevices.poc, visibility:networkdevices.visibility, completionItems:networkdevices.completionItems, normal: { fill: networkdevices.color }, id: networkdevices}
//           ] 
//         },
//         {
//           name: personal.name, description: personal.description, poc:personal.poc, visibility:personal.visibility, completionItems:personal.completionItems, normal: { fill: personal.color }, id: personal, children: [
//             { name: personaldevices.name, description: personaldevices.description, poc:personaldevices.poc, visibility:personaldevices.visibility, completionItems:personaldevices.completionItems, normal: { fill: personaldevices.color }, id: personaldevices }
//           ]
          
//         },
//       ]
     
//     },
//     {
//       name: aircraftnetwork.name, description: aircraftnetwork.description, poc:aircraftnetwork.poc, visibility:aircraftnetwork.visibility, completionItems:aircraftnetwork.completionItems, normal: { fill: aircraftnetwork.color }, id: aircraftnetwork, children: [
//         {
//           name: mcs.name, description: mcs.description, poc:mcs.poc, visibility:mcs.visibility, completionItems:mcs.completionItems, normal: { fill: mcs.color }, id: mcs, children: [
//             { name: mcshostdevices.name, description: mcshostdevices.description, poc:mcshostdevices.poc, visibility:mcshostdevices.visibility, completionItems:mcshostdevices.completionItems, normal: { fill: mcshostdevices.color }, id: mcshostdevices },
//             { name: mcsnetworkdevices.name, description: mcsnetworkdevices.description, poc:mcsnetworkdevices.poc, visibility:mcsnetworkdevices.visibility, completionItems:mcsnetworkdevices.completionItems, normal: { fill: mcsnetworkdevices.color }, id: mcsnetworkdevices }
//           ]
//         },
//         {
//           name: avionicsbus.name, description: avionicsbus.description, poc:avionicsbus.poc, visibility:avionicsbus.visibility, completionItems:avionicsbus.completionItems, normal: { fill: avionicsbus.color }, id: avionicsbus, children: [
//             { name: arinc429.name, description: arinc429.description, poc:arinc429.poc, visibility:arinc429.visibility, completionItems:arinc429.completionItems, normal: { fill: arinc429.color }, id: arinc429 }
//           ]
//         },
//       ]
      
//     },
//   ]
// ;