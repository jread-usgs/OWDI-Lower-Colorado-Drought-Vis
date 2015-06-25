(function () {
  new Dygraph(
    // containing div
    document.getElementById("natural-flow-graph"),
    
    // data file
    "data/natural_flow_history.tsv",
    
    // options
    {
      "delimiter": "\t",
      "title": "Colorado River Natural Flow at Lees Ferry, AZ",
      "labels": [ "year", "Tree-Ring Reconstructed", "Observed", "15-Year Average", "Average", "Lowest 15-Year Average in Record" ],
      "axes": {
       "x": [],
      "y": [] 
      },
      "showRangeSelector": true,
      "dateWindow": [ "1812-06-12T00:00:00Z", "2012-06-12T00:00:00Z" ],
      "rangeSelectorHeight":                40,
      "rangeSelectorPlotFillColor": " #A7B1C4",
      "rangeSelectorPlotStrokeColor": "#808FAB",
      "interactionModel": "Dygraph.Interaction.defaultModel",
      "customBars": true,
      "series": {
         "Tree-Ring Reconstructed": {
         "axis": "y" 
        },
        "Observed": {
         "axis": "y" 
        },
        "15-Year Average": {
         "axis": "y" 
        },
        "Average": {
         "axis": "y" 
        },
        "Lowest 15-Year Average in Record": {
         "axis": "y" 
        } 
      },
      "colors": [
         "#00CCFF",
        "#3333FF",
        "red",
        "forestgreen",
        "gold" 
      ],
      "ylabel": "Flow (million acre-feet per year)",
      "xlabel": "Year",
      "legend": "auto",
      "labelsDivWidth":               400,
      "labelsShowZeroValues": true,
      "labelsSeparateLines": false,
      "hideOverlayOnMouseOut": true 
    }
  );
})();