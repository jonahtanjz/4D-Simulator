function simulate() {
    var num = document.getElementById("num").value;
	var sim = document.getElementById("sim").value;
	var divv = document.getElementById("result");
	var w1=0, w2=0, w3=0, st=0, con=0;
    for (let i=0; i<sim; i++)
    {
		var result=[];
		result.fill(10000, 0, 24);
		console.log(result);

		for (let i=0; i<23; i++)
		{
			var same = 1;
			result[i] = Math.floor((Math.random() * 10000));
			
			while (same)
			{
				var hit = 0;
				for (let z=0; z<i; z++)
				{
					if ((result[i]==result[z]))
					{
						result [i] = Math.floor((Math.random() * 10000));
						hit++;
					}
				}
				if (hit==0)
				{
					same = 0;
				}
			}
		}
		
		let para1 = document.createElement("p");
		para1.appendChild(document.createTextNode("1ST: " + result[0] + "  2ND: " + result[1] + "  3RD: "  + result[2]));
		divv.appendChild(para1);
		
		let header1 = document.createElement("p");
		header1.appendChild(document.createTextNode("Starters:"));
		divv.appendChild(header1);
		
		let para2 = document.createElement("p");
		para2.appendChild(document.createTextNode(result[3] + " ,  " + result[4]+ " ,  " + result[5] + " ,  " + result[6] + " ,  " + result[7]));
		divv.appendChild(para2);
		
		let para3 = document.createElement("p");
		para3.appendChild(document.createTextNode(result[8] + " ,  " + result[9]+ " ,  " + result[10] + " ,  " + result[11] + " ,  " + result[12]));
		divv.appendChild(para3);
		
		let header2 = document.createElement("p");
		header2.appendChild(document.createTextNode("Consolations:"));
		divv.appendChild(header2);
		
		let para4 = document.createElement("p");
		para4.appendChild(document.createTextNode(result[13] + " ,  " + result[14]+ " ,  " + result[15] + " ,  " + result[16] + " ,  " + result[17]));
		divv.appendChild(para4);
		
		let para5 = document.createElement("p");
		para5.appendChild(document.createTextNode(result[18] + " ,  " + result[19]+ " ,  " + result[20] + " ,  " + result[21] + " ,  " + result[22]));
		divv.appendChild(para5);
	
	
	for (let i=0; i<23; i++)
	{
	    if (num == result[i])
      	    {
		    if (i==0)
		    {
		    	w1++;
		    }
	            else if (i == 1)
		    {
	    		w2++;
		    }		
	            else if (i == 2)
		    {
		    	w3++;
		    }
	            else if (i < 13)
		    {
		    	st++;
		    }
		    else
		    {
		    	con++;
		    }
	    }
	}
	    
    }
    
	let para6 = document.createElement("p");
    	para6.appendChild(document.createTextNode("1ST: " + w1 + "  2ND:  " + w2 + "  3RD:  " + w3 + "  Starter: " + st + "  Consolation: " + con));
	divv.appendChild(para6);
}
	
