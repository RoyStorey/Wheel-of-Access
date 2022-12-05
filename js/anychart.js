anychart.onDocumentLoad(function () {
  var data = [
    {
      name: "Transport", normal: { fill: '#575757' }, children: [
        {
          name: "Gateway", children: [
            { name: "EACN", normal: { fill: '#096d00' } },
            { name: "DV Home Network" },
            { name: "VIASAT" }
          ]
        },
        {
          name: "SATCOM", children: [
            { name: "MILCOM" },
            { name: "VIASAT" },
            { name: "SATCOM Direct" }
          ]
        },
        {
          name: "Services", children: [
            { name: "SLN" },
            { name: "CMS" },
            { name: "JWICS" }
          ]
        }
      ]
    },
    {
      name: "Customer", normal: { fill: '#575757' }, children: [
        {
          name: "Personal", normal: { fill: '#c20000' }, children: [
            { name: "Personal Devices" }
          ]
        },
        {
          name: "Travel Kit", children: [
            { name: "Host Devices" },
            { name: "Network Devices" }
          ]
        },
      ]
    },
    {
      name: "Aircraft Network", normal: { fill: '#575757' }, children: [
        {
          name: "MCS", children: [
            { name: "Host Devices" },
            { name: "Network Devices" }
          ]
        },
        {
          name: "Avionics Bus", normal: { fill: '#c20000' }, children: [
            { name: "ARINC-429" }
          ]
        },
      ]
    },
    {
      name: "Mission Support Systems", normal: { fill: '#c20000' }, children: [
        {
          name: "Direct Connect", children: [
            { name: "EFB", normal: { fill: '#096d00' } },
            { name: "Mx Laptops", normal: { fill: '#dbb300' } }
          ]
        },
        {
          name: "Air Gap", children: [
            { name: "Mission Planning" },
            { name: "Uprage Media" },
            { name: "NAVAID/Flightline Equip" }
          ]
        },
      ]
    },
  ];
  // create an instance of a pie chart
  var chart = anychart.sunburst(data, "as-tree");
  // changes text to circular rather than radial
  chart.labels().position("radial");
  chart.labels().fontFamily("Candara");
  chart.labels().fontSize(100);
  // chart.labels().wordWrap("normal");
  chart.labels().height('100px');
  // set the container element 
  chart.container("chartTwo");
  // initiate chart display
  chart.draw();
});





// ['Mission Planning', 'Upgrade Media', 'NAVAID/Flightline Equip', 'EFB', 'Mx Laptops', 'SLN', 'CMS', 'JWICS', 'MILCOM', 'VIASAT', 'SATCOM Direct', 'EACN', 'DV Home Network', 'VIASAT', 'Network Devices', 'Host Devices', 'Personal Devices', 'Host Devices', 'Network Devices', 'ARINC']