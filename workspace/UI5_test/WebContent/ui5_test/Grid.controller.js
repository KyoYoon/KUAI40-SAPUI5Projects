var oModel = '';
var mode = '';

sap.ui.controller("ui5_test.Grid", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5_test.Grid
*/
	onInit: function() {

		oModel = new sap.ui.model.odata.ODataModel("proxy/http/ies.innoever.net:8000/sap/opu/odata/sap/Z01_01_SRV/");
		sap.ui.getCore().setModel(oModel);
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui5_test.Grid
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ui5_test.Grid
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ui5_test.Grid
*/
//	onExit: function() {
//
//	}

});