sap.ui.jsview("ui5_chart.GL", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5_chart.GL
	*/ 
	getControllerName : function() {
		return "ui5_chart.GL";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5_chart.GL
	*/ 
	createContent : function(oController) {

		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
		    dimensions : [  { axis : 1, name : 'GL Account', value : "{Hkont}" } ], // 첫 글자만 대문자로 하고 나머지는 소문자로 설정
		    measures : [ { name : 'Amount', value : '{Dmbtr}' } ],
		    data : {  
		        path : "/Z01_03Set",
		        filters: [
//	               new sap.ui.model.Filter("Fldate",sap.ui.model.FilterOperator.EQ,"2010-03-10")
	        ]

		}});
		
		// Bar, Donut, Line
		var oChart = new sap.viz.ui5.Donut({
		    width : "80%",
		    height : "600px",
		    title : {
		        visible : true,
		        text : 'Open Item Chart'
		    },
		});

		oChart.setDataset(oDataset);
		oChart.setModel(oModel);
		return oChart;
		
	}

});
