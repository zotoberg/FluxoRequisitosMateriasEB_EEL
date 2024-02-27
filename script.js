var boxFocused = undefined;
var colourArray = ['#ffffff', '#8888ff', '#88ff88', '#ff8888', 'ffff88'];

function setup()
{

	//to form rows, store which ones are available. Each row adds anything craftable from previous rows.
	let available = {};


	let periodos = new Set([]);
	for (const [key, value] of Object.entries(data)) {
		const periodo = (value.periodo - 1) || 0;
		periodos.add(periodo)
	}
	periodos = Array.from(periodos).sort()

	console.log(periodos)
	for (const periodo of periodos) {
		const main = document.getElementById("main");
		main.appendChild(document.createElement("hr"));


		const h2 = document.createElement("h2");
		h2.innerText = `${periodo + 1}º Período `;

		main.appendChild(h2);


		let rowContainer = document.createElement("div");
		rowContainer.setAttribute("id", "row" + periodo + "container");
		rowContainer.setAttribute("class", "rowContainer");
		document.getElementById("main").appendChild(rowContainer);
	}


	while(Object.keys(available).length < Object.keys(data).length)
	{
		
		for(let [key, value] of Object.entries(data))
		{
			const rowNum = (value.periodo - 1) || 0;
			let possible = true;
			for(let req of value["requisito"])
			{
				if(available[req] === undefined)
				{
					possible = false;
					break;
				}
			}
			if(available[key] === undefined && possible)
			{
				available[key] = rowNum;
				//form html content
				let box = document.createElement("div");
				box.setAttribute("id", key);
				box.setAttribute("class", "row" + rowNum + " modbox");
				box.setAttribute("style", "opacity: 1");

				//Form box title and attach image before text, reward image after text
				let modName = document.createElement("span");
				let text = document.createTextNode(key);
				modName.appendChild(text);
				modName.classList.add("modTitle");
				
				box.appendChild(modName);

				document.getElementById("row" + rowNum + "container").appendChild(box);
				box.addEventListener("mouseover", boxHover);
				box.addEventListener("mouseleave", boxLeave);
				box.addEventListener("click", boxClick);

			}
		}
	}
	document.getElementsByTagName("body")[0].addEventListener("click", bgClick);

	setTimeout(function() {
		drawArrows()
	}, 100);
}

function forceBoxRehighlight(boxFocused)
{
	if (boxFocused) {
		highlight(boxFocused);
	}
}
function drawArrows()
{
	//form arrow
	for(let [key, value] of Object.entries(data))
	{
		let self = document.getElementById(key);
		//if it contains at least 1 parent
		if(value["requisito"].length)
		{
			for(let req of value["requisito"])
			{
				let parent = document.getElementById(req);
				let clone = document.getElementById(req + key);
				//If it hasn't been drawn yet
				if(!clone)
				{
					//Set up drawing
					clone = document.createElementNS("http://www.w3.org/2000/svg", 'line');
					clone.setAttribute("style", "stroke: #ffffff; stroke-width: 1; opacity = 1");
					clone.setAttribute("marker-end", "url(#arrow)");

					//Set up getting it again on resize
					clone.classList.add(req.replaceAll(' ', '_'));
					clone.classList.add(key.replaceAll(' ', '_'));
					clone.setAttribute("id", req + key);
				}
				//get and set coords
				let parentRect = parent.getBoundingClientRect();
				let selfRect = self.getBoundingClientRect();
				let x1 = parseFloat(parentRect.x + parentRect.width/2);
				//Offset by scroll amount for smaller windows
				let y1 = parseFloat(parentRect.bottom + document.documentElement.scrollTop - parent.parentElement.parentElement.offsetTop);
				let x2 = parseFloat(selfRect.x + selfRect.width/2);
				let y2 = parseFloat(selfRect.top + document.documentElement.scrollTop - self.parentElement.parentElement.offsetTop);
				clone.setAttribute("x1", x1 + "px");
				clone.setAttribute("y1", y1 + "px");
				clone.setAttribute("x2", x2 + "px");
				clone.setAttribute("y2", y2 + "px");

				//add to screen
				document.getElementById("svgContainer").appendChild(clone);
			}
		}
	}
}

function boxHover(event)
{
	if(!boxFocused)
	{
		highlight(event.target);
	}
}
function highlight(box)
{
	while(!box.classList.contains("modbox"))
	{
		box = box.parentElement;
	}
	let id = box.id;

	//highlight selected box
	box.style.border = "1px solid rgba(234,116,19,1)";

	//mute all arrows
	let arrows = document.getElementsByTagName("line");
	for(let a = 0; a < arrows.length; a++)
	{
		arrows[a].style.opacity = 0.1;
	}
	//Check if we are used anywhere
	for(let [key, value] of Object.entries(data))
	{
		//hide all boxes first
		document.getElementById(key).style.opacity = 0.2;
	// 	//only highlight boxes that use us...
	// 	if(value["requisito"].includes(id))
	// 	{
	// 		let keyr = key.replace(' ', '_');
	// 		let idr = id.replace(' ', '_');
	// 		if(document.getElementsByClassName(keyr + ' ' + idr))
	// 		{
	// 			document.getElementsByClassName(keyr + ' ' + idr)[0].style.opacity = 1;
	// 			document.getElementsByClassName(keyr + ' ' + idr)[0].style.strokeWidth = 2;
	// 		}
	// 		document.getElementById(key).style.opacity = 1;
	// 	}
	}
	//highlight boxes that we use, and that our parents use
	highlightRecurseDown(id, 1);
	highlightRecurse(id, 1);
}
function highlightRecurseDown(id, depth)
{
	document.getElementById(id).style.opacity = 1;
	for(let [key, value] of Object.entries(data))
	{
		//only highlight boxes that use us...
		if(value["requisito"].includes(id))
		{
			let keyr = key.replaceAll(' ', '_');
			let idr = id.replaceAll(' ', '_');
			if(document.getElementsByClassName(keyr + ' ' + idr))
			{
				document.getElementsByClassName(keyr + ' ' + idr)[0].style.opacity = 1;
				document.getElementsByClassName(keyr + ' ' + idr)[0].style.stroke = colourArray[colourArray.length - depth];
				document.getElementsByClassName(keyr + ' ' + idr)[0].style.strokeWidth = 2;
			}
			document.getElementById(key).style.opacity = 1;
			if(true)
			{
				highlightRecurseDown(key, depth+1);
			}
		}

	}
}
function highlightRecurse(id, height)
{
	document.getElementById(id).style.opacity = 1;
	for(let a = 0; a < data[id]["requisito"].length; a++)
	{
		//replaces are for arrow classes, since classes cannot contain ' ', they contain '_' instead
		let idr = id.replaceAll(' ', '_');
		let parentr = data[id]["requisito"][a].replaceAll(' ', '_');
		//check if arrow with both classes exists (connecting the 2)
		if(document.getElementsByClassName(idr + ' ' + parentr))
		{
			document.getElementsByClassName(idr + ' ' + parentr)[0].style.opacity = 1;
			document.getElementsByClassName(idr + ' ' + parentr)[0].style.stroke = colourArray[height];
			document.getElementsByClassName(idr + ' ' + parentr)[0].style.strokeWidth = 2;
		}
		highlightRecurse(data[id]["requisito"][a], height + 1);
	}
}
function boxLeave()
{
	if(boxFocused === undefined)
	{
		boxes = document.getElementsByClassName("modbox");
		arrows = document.getElementsByTagName("line");
		for(let a = 0; a < boxes.length; a++)
		{
			boxes[a].style.opacity = 1;
			boxes[a].style.border = "1px solid rgba(255,255,255,0)";
		}	
		for(let a = 0; a < arrows.length; a++)
		{
			arrows[a].style.opacity = 1;
			arrows[a].style.stroke = "#ffffff";
			arrows[a].style.strokeWidth = 1;
		}
	}
}
function bgClick(event)
{
	let source = event.target;
	if(source.id === "svgContainer")
	{
		boxFocused = undefined;
		boxLeave();
	}
}
function boxClick(event)
{
	boxFocused = undefined;
	boxLeave();
	let box = event.target;
	while(!box.classList.contains("modbox"))
	{
		box = box.parentElement;
	}
	boxFocused = box;
	highlight(box);
}


document.addEventListener('DOMContentLoaded', setup);
window.addEventListener('resize', drawArrows);

