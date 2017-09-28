var oTab=document.getElementById("tap");
	var oBtnGroup = document.getElementById("btn_group");
	var aLi = oBtnGroup.getElementsByTagName("span");
	var aConts = oTab.getElementsByClassName("big_box");
	 
	for(var i=0;i<aLi.length; i++){
		
		aLi[i].index=i;
		aLi[i].onclick=function(){
			for(var i=0;i<aLi.length; i++){
				aLi[i].className="";	
				aConts[i].style.display="none";
			};
			this.className="red";
			aConts[this.index].style.display="block";
			
		}
	}