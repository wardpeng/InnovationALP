sap.ui.controller("com.sap.sdc.innovation.knowledgebase.alp.zinnov_knowledgebase_alp.ext.controller.AnalyticalListPageExt", {

	onClickActionZINNOV_C_IDEA_QUERY1: function (oEvent) {},
	
	onListNavigationExtension: function (oEvent) {
		var oNavigationController = this.extensionAPI.getNavigationController();
		var oBindingContext = oEvent.getSource().getBindingContext();
		var oObject = oBindingContext.getObject();
		// for notebooks we trigger external navigation for all others we use internal navigation
		//ZKnowledgeBase-manage&//ZINNOV_C_Idea(guid'0894ef68-4468-1eea-aca8-b1541fc064bd')
		oNavigationController.navigateExternal("toDetails", {
			"guid": oObject.GUID
		});
		
		// // return false to trigger the default internal navigation
		// return false;
		// return true is necessary to prevent further default navigation
		return true;
	}
});