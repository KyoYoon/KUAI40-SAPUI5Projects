sap.ui.jsview("ui5_test.Grid", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5_test.Grid
	*/ 
	getControllerName : function() {
		return "ui5_test.Grid";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5_test.Grid
	*/ 
	createContent : function(oController) {

/*        // create the button instance
        var myButton = new sap.ui.commons.Button("btn");
        
        // set properties, e.g. the text (there is also a shorter way of setting several properties)
        myButton.setText("Hello World!");
        
        // attach an action to the button's "press" event (use jQuery to fade out the button)
        myButton.attachPress(function(){$("#btn").fadeOut()});
        
        // place the button into the HTML element defined below
        myButton.placeAt("content");

        return myButton;  */
		
//		var oModel = new sap.ui.model.json.JSONModel({
//			"ScarrSet" : [
//			      {"Carrid" : "AA", "Carrname" : "American Airlines", "Currcode" : "USD", "Url" : "http://www.aa.com" },
//			      {"Carrid" : "AB", "Carrname" : "Air Berlin", "Currcode" : "EUR", "Url" : "http://www.airberlin.de" },
//			      {"Carrid" : "AC", "Carrname" : "Air Canada", "Currcode" : "CAD", "Url" : "http://www.aircanada.ca" },
//			      {"Carrid" : "AF", "Carrname" : "Air France", "Currcode" : "EUR", "Url" : "http://www.airfrance.fr" },
//			      {"Carrid" : "AZ", "Carrname" : "Alitalia", "Currcode" : "EUR", "Url" : "http://www.alitalia.it" },
//			      {"Carrid" : "BA", "Carrname" : "British Airways", "Currcode" : "GBP", "Url" : "http://www.british-airways.com" },
//			      {"Carrid" : "CO", "Carrname" : "Continental Airlines", "Currcode" : "USD", "Url" : "http://www.continental.com" },
//			      {"Carrid" : "DL", "Carrname" : "Delta Airlines", "Currcode" : "USD", "Url" : "http://www.delta-air.com" },
//			      {"Carrid" : "FJ",  "Carrname" : "Air Pacific", "Currcode" : "USD", "Url" : "http://www.airpacific.com" },
//			      {"Carrid" : "JL",  "Carrname" : "Japan Airlines", "Currcode" : "JPY", "Url" : "http://www.jal.co.jp" },
//			      {"Carrid" : "LH", "Carrname" : "Lufthansa", "Currcode" : "EUR", "Url" : "http://www.lufthansa.com" },
//			      {"Carrid" : "NG","Carrname" : "Lauda Air", "Currcode" : "EUR", "Url" : "http://www.laudaair.com" },
//			      {"Carrid" : "NW", "Carrname" : "Northwest Airlines", "Currcode" : "USD", "Url" : "http://www.nwa.com" },
//			      {"Carrid" : "QF", "Carrname" : "Qantas Airways", "Currcode" : "AUD", "Url" : "http://www.qantas.com.au" },
//			      {"Carrid" : "SA", "Carrname" : "South African Air.", "Currcode" : "ZAR", "Url" : "http://www.saa.co.za" },
//			      {"Carrid" : "SQ", "Carrname" : "Singapore Airlines", "Currcode" : "SGD", "Url" : "http://www.singaporeair.com" },
//			      {"Carrid" : "SR", "Carrname" : "Swiss", "Currcode" : "CHF", "Url" : "http://www.swiss.com" },
//			      {"Carrid" : "UA", "Carrname" : "United Airlines", "Currcode" : "USD", "Url" : "http://www.ual.com" }
//			    ]
//			});
//		
//		var oTable = new sap.ui.table.Table({
//			title: "Scarr table",
//			visibleRowCount: 7,
//			selectionMode: sap.ui.table.SelectionMode.Single,
//			navigationMode: sap.ui.table.NavigationMode.Paginator,
//			fixedColumnCount: 2,
//			width: "650px"});
//		oTable.addColumn(new sap.ui.table.Column({
//			label: new sap.ui.commons.Label({text: "항공사 code"}),
//			template: new sap.ui.commons.TextView().bindProperty("text", "Carrid"),
//			sortProperty: "Carrid", filterProperty: "Carrid", width: "150px" }));
//		oTable.addColumn(new sap.ui.table.Column({
//			label: new sap.ui.commons.Label({text: "항공사 name"}),
//			template: new sap.ui.commons.TextView().bindProperty("text", "Carrname"),
//			sortProperty: "Carrname", filterProperty: "Carrname", width:"150px"}));
//		oTable.addColumn(new sap.ui.table.Column({
//			label: new sap.ui.commons.Label({text: "현지통화"}),
//			template: new sap.ui.commons.TextView().bindProperty("text", "Currcode"),
//			sortProperty: "Currcode", filterProperty: "Currcode", width:"150px"}));
//		oTable.addColumn(new sap.ui.table.Column({
//			label: new sap.ui.commons.Label({text: "URL"}),
//			template: new sap.ui.commons.TextView().bindProperty("text", "Url"),
//			sortProperty: "Url", filterProperty: "Url",  width:"150px"}));
//		oTable.bindRows("/ScarrSet");
//		oTable.setModel(oModel);
//		//return oTable;
//		
//		var oShell = new sap.ui.ux3.Shell({
//			appTitle : "Test Shell",
//			showSearchTool : false,
//			showFeederTool : false,
//			worksetItems : [
//				new sap.ui.ux3.NavigationItem("oNavItem1", {key: "Nav_1", text: "Table"}),
//			],
//			content: oTable,
//			worksetItemSelected :  function(oEvent){
//				var sId = oEvent.getParameter("id");
//				var oShell = oEvent.oSource;
//				switch (sId) {
//				           case "oNavItem1":
//					oShell.setContent(oTable);
//				           break;
//		                                                    default:
//				           break;
//				}
//			}
//		});
//		return oShell;
		
//		var oModel = new sap.ui.model.json.JSONModel({
//			"SflightSet" : [
//			      {"Carrid" : "AA", "Connid" : "0017", "Fldate" : "\/Date(1268179200000)\/", "Price" : "422.94",
//			       "Currency" : "USD","Planetype" : "747-400", "Seatsmax" : 385, "Seatsocc" : 0, "Paymentsum" : "0.00",
//			       "SeatsmaxB" : 31, "SeatsoccB" : 0, "SeatsmaxF" : 21, "SeatsoccF" : 0},
//			      {"Carrid" : "AZ", "Connid" : "0555", "Fldate" : "\/Date(1268179200000)\/", "Price" : "185.00",
//			       "Currency" : "EUR", "Planetype" : "A319", "Seatsmax" : 220, "Seatsocc" : 15, "Paymentsum" : "3777.70",
//			       "SeatsmaxB" : 22, "SeatsoccB" : 2, "SeatsmaxF" : 10, "SeatsoccF" : 1},
//			      {"Carrid" : "AZ", "Connid" : "0789", "Fldate" : "\/Date(1268179200000)\/", "Price" : "1030.00",
//			       "Currency" : "EUR", "Planetype" : "DC-10-10", "Seatsmax" : 380, "Seatsocc" : 19, "Paymentsum" : "24668.50",
//			       "SeatsmaxB" : 41, "SeatsoccB" : 2, "SeatsmaxF" : 18, "SeatsoccF" : 1},
//			      {"Carrid" : "AZ", "Connid" : "0790", "Fldate" : "\/Date(1268179200000)\/", "Price" : "1014.00",
//			       "Currency" : "EUR", "Planetype" : "747-400", "Seatsmax" : 385, "Seatsocc" : 44, "Paymentsum" : "58071.78",
//			       "SeatsmaxB" : 31, "SeatsoccB" : 4, "SeatsmaxF" : 21, "SeatsoccF" : 3},
//			      {"Carrid" : "QF", "Connid" : "0006", "Fldate" : "\/Date(1268179200000)\/", "Price" : "788.64",
//			       "Currency" : "AUD", "Planetype" : "A319", "Seatsmax" : 220, "Seatsocc" : 25, "Paymentsum" : "24881.62",
//			       "SeatsmaxB" : 22, "SeatsoccB" : 3, "SeatsmaxF" : 10, "SeatsoccF" : 1},
//			      {"Carrid" : "SQ", "Connid" : "0015", "Fldate" : "\/Date(1268179200000)\/", "Price" : "2320.04",
//			       "Currency" : "SGD", "Planetype" : "DC-10-10", "Seatsmax" : 380, "Seatsocc" : 16, "Paymentsum" : "49300.85",
//			       "SeatsmaxB" : 41, "SeatsoccB" : 2, "SeatsmaxF" : 18, "SeatsoccF" : 1}
//			    ]
//			});
		
		
//		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
//		    dimensions : [  { axis : 1, name : 'Connid', value : "{Connid}" } ], // 첫 글자만 대문자로 하고 나머지는 소문자로 설정
//		    measures : [ { name : 'Price', value : '{Price}' } ],
//		    data : {  
//		        path : "/SflightSet",
//		        filters: [
////	               new sap.ui.model.Filter("Fldate",sap.ui.model.FilterOperator.EQ,"2010-03-10")
//	        ]
//
//		}});
		
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
		    dimensions : [  { axis : 1, name : 'GL Account', value : "{Hkont}" } ], // 첫 글자만 대문자로 하고 나머지는 소문자로 설정
		    measures : [ { name : 'Amount', value : '{Dmbtr}' } ],
		    data : {  
		        path : "/Z01_01Set",
		        filters: [
//	               new sap.ui.model.Filter("Fldate",sap.ui.model.FilterOperator.EQ,"2010-03-10")
	        ]

		}});

//		// Bar, Donut, Line
//		var oChart = new sap.viz.ui5.Donut({
//		    width : "80%",
//		    height : "600px",
//		    title : {
//		        visible : true,
//		        text : 'Profit and Revenue By Country'
//		    },
//		});
		
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
