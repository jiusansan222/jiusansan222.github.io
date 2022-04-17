function doGet(e) {

	var params = e.parameter;

	var SpreadSheet = SpreadsheetApp.openById("16K6vZ5332wR1YHcYXL3DVkyFrFa3OeTlp7zgzVt_qJs");
	var Sheet = SpreadSheet.getSheets()[0];
	var LastRow = Sheet.getLastRow();

	Sheet.getRange(LastRow+1, 1).setValue(params.name);
	Sheet.getRange(LastRow+1, 2).setValue(params.mail);
	Sheet.getRange(LastRow+1, 3).setValue(params.formid);

	for (var i = 1; i <= 3; i++) {
		Sheet.getRange(LastRow+1, 3+i).setValue(params["q" + i.toString()]);
	}

	return ContentService.createTextOutput(params.thank);
}
