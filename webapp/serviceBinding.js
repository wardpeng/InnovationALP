function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZWPINNOV_C_IDEA_VIEWED_Q_CDS/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}