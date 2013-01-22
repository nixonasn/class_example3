// JavaScript Document




function getChords(){
	$.getJSON("guitar.json", function(chords){
	$('#chordList li').remove(); /*Remove list items, then run forloop. Otherwise list would keep populating*/
	
	alert(chords[1].brand);//first item in array
	//alert(lures.length);//length of array
	
	for(var i=0; i<chords.length; i++){
		document.getElementById('chordList').innerHTML +=
		'<li>' + '<a href="<img src="'+chords[i].image+'"></li>'
	}
	
	$('#chordList').listview('refresh');/*refresh the listview*/
	
	});
}

//-----------------------------------------------------------//