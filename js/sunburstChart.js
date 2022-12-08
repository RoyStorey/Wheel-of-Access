anychart.onDocumentLoad(function () {

 var chart = anychart.sunburst(data, "as-tree");
 // changes text to circular rather than radial
 chart.labels().position("radial");
 // changes size of leaves, balances the size of outermost leaves.
 chart.calculationMode("ordinal-from-leaves");
 // adjustfontsize is default, causes you to not be able to resize font
 chart.labels().adjustFontSize(false);
 chart.labels().wordWrap('break-word');
 chart.level().labels().fontSize('90%');
 chart.labels().padding(0);
 // makes circle in middle of chart for plane me to put plane into chart.
 chart.innerRadius(90);
 // this is the text in the middle of the page.
 var label = anychart.standalones.label();
 label.text("Wheel of Access");
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
;
})