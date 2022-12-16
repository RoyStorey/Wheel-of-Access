anychart.onDocumentLoad(function () {
//define chart to be the sunburst chart(data-source,"type of chart")
var chart = anychart.sunburst(accessData, "as-tree");

var tempText = {}

// document.getElementById('editNetworkName').innerText = JSON.stringify(accessData[0].name)

// document.getElementById('jsonName').textContent = JSON.stringify(accessData[0].name);
// document.getElementById('jsonDescription').innerText = JSON.stringify(accessData[0].description);
// document.getElementById('jsonPOC').innerText = JSON.stringify(accessData[0].poc);
// document.getElementById('jsonCompletionItems').innerText = JSON.stringify(accessData[0].completionItems);
// document.getElementById('jsonVisibility').innerText = JSON.stringify(accessData[0].visibility);

function handleSubmit(event){
    event.preventDefault()
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    tempText = value
    console.log(tempText)
    document.getElementById('formattedForm').innerText = JSON.stringify(tempText)
    document.getElementById('previewDescription').innerText = tempText.description
    document.getElementById('previewPOC').innerText = tempText.poc
    document.getElementById('previewVisibility').innerText = tempText.visibility
    document.getElementById('previewCompletionItems').innerText = tempText.completionItems
    document.getElementById('editNetworkName').innerText = tempText.name;
}
const form = document.getElementById('editForm');
form.addEventListener('submit',handleSubmit);

//leaf click listener to do functions when selecting leaves
chart.listen("pointClick", function(e){
    document.getElementById("editNetworkName").innerText = e.point.getStat("name")
    document.getElementById("jsonName").innerText = e.point.getStat("name")
    document.getElementById("jsonDescription").innerText = e.point.getStat("description")
    document.getElementById("jsonPOC").innerText = e.point.getStat("poc")
    document.getElementById("jsonCompletionItems").innerText = e.point.getStat("completionItems")
    document.getElementById("jsonVisibility").innerText = e.point.getStat("visibility")
});


//chart styling stuff
chart.labels().position("radial");
chart.calculationMode("ordinal-from-leaves");
chart.labels().adjustFontSize(false);
chart.innerRadius(40);

//render chart
chart.container("chart");
chart.draw();

});