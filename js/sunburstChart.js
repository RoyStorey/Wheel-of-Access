anychart.onDocumentLoad(function () {

var chart = anychart.sunburst(data, "as-tree");

// var pocArray = [];




chart.listen("pointClick", function(e){
    document.getElementById("selectedName").innerText = e.point.getStat("name")
    document.getElementById("selectedDescription").innerText = e.point.getStat("description")
    document.getElementById("selectedVisibility").innerText = e.point.getStat("visibility")
    document.getElementById("pageContainer").style.width = "100%";

    let pocList = document.getElementById('selectedPOCs')
    let completionItemList = document.getElementById('selectedCompletionItems')

    //Looping through POC array and formatting in <ul> format
    while (pocList.firstChild){
        pocList.removeChild(pocList.firstChild)
    }
    for (i=0;i<e.point.getStat("poc").length;i++){
        var li = document.createElement('li');
        li.innerText = e.point.getStat("poc")[i];
        pocList.appendChild(li);
    }
    //Looping through completionItems array and formatting in <ul> format
    while (completionItemList.firstChild){
        completionItemList.removeChild(completionItemList.firstChild)
    }
    for (i=0;i<e.point.getStat("completionItems").length;i++){
        var li = document.createElement('li');
        li.innerText = e.point.getStat("completionItems")[i];
        completionItemList.appendChild(li);
    }
});

 // changes text to circular rather than radial
 chart.labels().position("radial");
 // changes size of leaves, balances the size of outermost leaves.
 chart.calculationMode("ordinal-from-leaves");
 // adjustfontsize is default, causes you to not be able to resize font
 chart.labels().adjustFontSize(false);
 chart.labels().wordWrap('break-word');
 chart.labels().fontFamily("sans")
 chart.level().labels().fontSize('90%');
 chart.labels().padding(0);
 chart.selected().fill('gray')
 // makes circle in middle of chart for plane me to put plane into chart.
 chart.innerRadius(90);
 // this is the text in the middle of the page.
 var background = anychart.standalones.background();
    background.fill({
        src: 'images/af1.jpg',
    })
 background.minWidth("140%");
 background.minHeight("140%");
 background.top('-20%')
 background.left('-20%')
 chart.center().content(background)
 // set the container element 
 chart.container("chartTwo");
 // initiate chart display
 chart.draw();
;
})