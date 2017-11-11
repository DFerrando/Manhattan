function character (charName,charSTR,charDEX,charCON,charINT,charWIS,charCHA,charBio) {
	this.name = charName
	this.strength = charSTR
	this.dexterity = charDEX
	this.constitution = charCON
	this.intelligence = charINT
	this.wisdom = charWIS
	this.charisma = charCHA
	this.biography = charBio
}

function gridLoad() {
	var minsc = new character ('Minsc','18/93','15','15','8','6','9','When asked about his past, Minsc proudly announces that he is a berserker warrior from the nation of Rasheman in the utter east. He is currently undertaking his dejemma, a ritual journey to manhood, and is seeking adventure and glory in battle. It is also his honor to be the bodyguard of a young Wychalarn of Rasheman named Dynaheir, and if anyone tries to harm her he will beat sense into their heads until they reconsider. He is unsure as to why she has led them to the Sword Coast, but his loyalty is unquestioning. If he serves her well and distinguishes himself in battle he hopes to be accepted into the ice dragon berserker lodge upon return to their homeland. So far Minsc considers his most notable experience in the world abroad, to be the acquisition of his animal companion Boo, a creature that he claims is a miniature giant space hamster. Apparently such things do exist in the Realms, but Minsc has surely taken too many blows to the head. He seems a good-natured fellow, but is all too willing to indulge in his berserker nature.')
	var jaheira = new character ('Jaheira','15','14','17','10','14','15','When asked about her past, JAHEIRA glares as she speaks. She says that she was born in the Tethyr region to a loyalist of the King Alemander regime, unfortunately during the Tethyrian civil war. Her family was among the nobles targeted by the angry mobs of peasants, and she was only spared because a servant girl took her from their castle before it fell. They fled into the forest of Tethyr and stumbled across an enclave of druids willing to take the child.<br /> Jaheira grew up a very headstrong girl, believing that the only way to protect nature was to have an active role in the world. She seems to have little in common with Khalid, but even though her manner is often confrontational, she apparently cares deeply for him. Her admiration of Gorion is obvious, and she plainly states that whomever was responsible for his death will suffer an equal fate.')
	var khalid = new character ('Khalid','','','','','','','')
	var xzar = new character ('Xzar','','','','','','','')
	var montaron = new character ('Montaron','','','','','','','')
	var edwin = new character ('Edwin','','','','','','','')
	var branwen = new character ('Branwen','','','','','','','')

	var characters = new Array()
	characters.push(minsc)
	characters.push(jaheira)
	characters.push(khalid)
	characters.push(xzar)
	characters.push(montaron)
	characters.push(edwin)
	characters.push(branwen)

	var colCount = 0
	var banCol = false
	var tableHeader = document.getElementById('tableHeader')
	var tableBody = document.getElementById('tableBody')
	var string = '<tr>'
	for (i = 0; i < characters.length; i++) {		
		if (colCount < 4) {
			string += '<td><img src="images/' + characters[i].name + '.png" id="header"><br />' + characters[i].name + '</td>'
			colCount++
		} else {
<<<<<<< HEAD
			string += '</tr><tr><td><img src="images/' + characters[i].name + '.png" id="header"><br />' + characters[i].name + '</td></tr>'
			colCount = 1			
			tableHeader.setAttribute('colSpan','4')
=======
			string += '</tr><tr><td><img src="images/' + characters[i].name + '.png" id="header"><br />' + characters[i].name + '</td>'
			colCount = 0			
>>>>>>> 1805dd33c3feae9346a48e649ec4bb8f68530a62
			banCol = true
		}
	}
	string += '</tr>'
	tableBody.innerHTML += string
	if (!banCol){		
		tableHeader.colSpan = colCount
	} else {
		tableHeader.colSpan = '4'
	}
}

window.onload = gridLoad