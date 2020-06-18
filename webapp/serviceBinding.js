function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZINNOV_C_IDEA_VIEWED_QUERY_CDS/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}