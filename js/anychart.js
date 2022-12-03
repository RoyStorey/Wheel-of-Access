anychart.onDocumentLoad(function () {
  var data = [
    {
      name: "", children: [
        {
          name: "Technical", children: [
            { name: "Team Leaders" },
            { name: "Architects" },
            { name: "Developers" },
            { name: "Testers" }
          ]
        },
        {
          name: "Sales", children: [
            { name: "Analysts" },
            { name: "Executives" }
          ]
        },
        { name: "HR" },
        { name: "Management" }
      ]
    }];
  // create an instance of a pie chart
  var chart = anychart.sunburst(data, "as-tree");
  // set the container element 
  chart.container("chartTwo");
  // initiate chart display
  chart.draw();
});