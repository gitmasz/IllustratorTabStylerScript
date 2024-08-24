if (app.documents.length > 0) {

	var doc = app.activeDocument;
	
	var selection = app.selection;

	var regex = new RegExp("\t","gi");

	var myStyle = doc.characterStyles.getByName("Tab");

	for ( var i = 0; i < selection.length; i++ ) {

		var content = selection[i].contents;
		
		while (regex.test(content)) {

			var result = regex.exec(content);
			
			range = selection[i].characters[result.index];
			
			range.length = result[0].length;
			
			myStyle.applyTo(range);

		}

	}

}