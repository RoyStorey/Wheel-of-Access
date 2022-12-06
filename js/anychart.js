anychart.onDocumentLoad(function () {
 
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

  var data = [
    {
      name: mss.name, normal: { fill: mss.color }, children: [
        {
          name: airgap.name, children: [
            { name: airgap.missionplanning.name },
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
  // create an instance of a pie chart
  var chart = anychart.sunburst(data, "as-tree");
  // changes text to circular rather than radial
  chart.labels().position("radial");
  // changes size of leaves, balances the size of outermost leaves.
  chart.calculationMode("ordinal-from-leaves");
  // adjustfontsize is default, causes you to not be able to resize font
  chart.labels().adjustFontSize(false);
  chart.labels().wordWrap('break-word');
  chart.level().labels().fontSize(15);
  chart.labels().padding(0);
  // makes circle in middle of chart for plane me to put plane into chart.
  chart.innerRadius(95);
  // this is the text in the middle of the page.
  var label = anychart.standalones.label();
  label.text("Airplane Picture");
  label.hAlign("center");
  label.vAlign("middle");
  label.width("100%");
  label.height("100%");
  label.fontColor("#dd2c00");
  label.fontSize(12);
  label.fontWeight(600);
  chart.center().content(label)
  // set the container element 
  chart.container("chartTwo");
  // initiate chart display
  chart.draw();
});





// ['Mission Planning', 'Upgrade Media', 'NAVAID/Flightline Equip', 'EFB', 'Mx Laptops', 'SLN', 'CMS', 'JWICS', 'MILCOM', 'VIASAT', 'SATCOM Direct', 'EACN', 'DV Home Network', 'VIASAT', 'Network Devices', 'Host Devices', 'Personal Devices', 'Host Devices', 'Network Devices', 'ARINC']