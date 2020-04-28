var headerHorizontal = [ 1,2,3,4,5,6,7,8 ];
var headerVertical = [ 1,2,3,4,5 ]

function getElement(ID)
{
  return document.getElementById(ID);
}

function createCell(rowIndex,colIndex)
{
	document.write("<td onClick=\"doAction("+rowIndex+","+colIndex+")\"  id=\"cell"+rowIndex+"_"+colIndex+"\"></td>");
}

function createHeader(rowIndex,colIndex,index)
{
	document.write("<th class='header' id='cell"+rowIndex+"_"+colIndex+"'>"+index+"</th>");
}

function generateTable(rowCount,colCount)
{
	document.write("<table>");
	for (var i=0;i<=headerVertical.length;i++)
	{
		document.write("<tr>");
		for (var k=0;k<=headerHorizontal.length;k++)
		{
			i == 0 && k == 0 ? createHeader(i,k, "") : 
			i == 0 ? createHeader(i,k,headerHorizontal[k-1]):
			k == 0 ? createHeader(i,k,headerVertical[i-1]) : 
			createCell(i,k);
		}
		document.write("</tr>");
	}
	document.write("</table>");
}

function doAction(rowIndex,colIndex)
{
  var modus = getElement("modus");
  switch (modus.value)
  {
    case "0": writeCell(rowIndex,colIndex); break;
    case "1": readCell(rowIndex,colIndex); break;
    case "2": switchCell(rowIndex,colIndex); break;
    case "3": clearCell(rowIndex,colIndex); break;
    case "4": markCell(rowIndex,colIndex); break;
    case "5": unmarkCell(rowIndex,colIndex); break;
  }
}

function writeCell(rowIndex,colIndex)
{
  getElement("cell"+rowIndex+"_"+colIndex).innerHTML= getElement("input").value;
}

function readCell(rowIndex,colIndex)
{
  getElement("input").value = getElement("cell"+rowIndex+"_"+colIndex).innerHTML;
}


function switchCell(rowIndex,colIndex)
{
  var temp = getElement("input").value;
  getElement("input").value = getElement("cell"+rowIndex+"_"+colIndex).innerHTML
  getElement("cell"+rowIndex+"_"+colIndex).innerHTML = temp;
}

function clearCell(rowIndex,colIndex)
{
  getElement("cell"+rowIndex+"_"+colIndex).innerHTML = "";
}

function markCell(rowIndex,colIndex)
{
 	getElement("cell"+rowIndex+"_"+colIndex).style.backgroundColor = getElement("colorinput").value;
  getElement("cell"+rowIndex+"_"+colIndex).classList.add("hover");
}

function unmarkCell(rowIndex,colIndex)
{
	getElement("cell"+rowIndex+"_"+colIndex).style.backgroundColor = "white";
}

function checkUp()
{
	 getElement("modus").value == "4" ? printColorbox() : clearColorbox();
}

function printColorbox()
{
	var colorbox = getElement("colorbox"); 
	colorbox.innerHTML = "<label>Farbe:</label> <input id='colorinput' type= 'color'></input>";
}

function clearColorbox()
{
	var colorbox = getElement("colorbox"); 
	colorbox.innerHTML = "";
}
