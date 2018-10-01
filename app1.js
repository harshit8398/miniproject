//linkedin automated script
function handle(){
 var arr = document.getElementsByClassName("pymk-card ember-view");
 var matchArr  = ["founder","marketing","director","president","ceo","entrepreneur","chief ","cto","media.net","at directi","adfactors","edelman","investor","marketeer","brand management","pr and communica","pr & communica","publisher partnership","brand partnership","brand strategy","business head","head of business"]; 
 var matchArr2 = ["politic","founder","director","president","ceo","entrepreneur","chief ","recruit","hiring","talent","human resources","hr at","hr specialist","hr business","hr officer"];
 matchArr = matchArr2;
 var count =0;
 for(var i=0;i<arr.length;i++)
 {
  for(var j=0;j<matchArr.length;j++)
  { 
   if (arr[i].textContent.toLowerCase().indexOf(matchArr[j])>-1){
     console.log(arr[i].getElementsByClassName("button-secondary-small")[0].click());
     var name = arr[i].getElementsByClassName("button-secondary-small")[0].textContent.split("nvite ")[1].trim().split(" to ")[0];
     console.log(name+" : "+arr[i].textContent.toLowerCase().split("member’s occupation")[1].trim().split("\n")[0]);
     try{
     document.getElementsByClassName("artdeco-toast-dismiss")[0].click(); 
     }catch(err){}
     try{
     document.getElementsByClassName("artdeco-toast-dismiss")[0].click(); 
     }catch(err){}
     count++;
     return;
   };
  }
 }

var ar = document.getElementsByTagName("img");
for(var i=0;i<ar.length;i++){
ar[i].src="";
}
 var ar = document.getElementsByClassName("mn-pymk-list");
for(var i=0;i<ar.length-10;i++){
ar[i].innerHTML="";
}



   console.log("No match");
  window.scrollTo(0,100);
  setTimeout(function(){window.scrollTo(0,document.body.scrollHeight);},400);
}

var timeout = setInterval(function(){handle()},1200);
