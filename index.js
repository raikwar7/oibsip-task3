 const convertor = () =>{
    const t1=document.getElementById("tem").value;
   const t2= document.getElementById("option");
   const value=option.options[t2.selectedIndex].value;

   const cf = (cel) =>{
//celsius to farenhiet 
let fh = cel*9/5  + 32;
return fh;
   }
   //farenhiet to celsius
   const fc = (t) =>{
    let ce = (t-32)*5/9;
    return ce;
       }
   let results;
   if(value=='celsius'){
    results = cf(t1);
    document.getElementById('result').innerHTML=`= ${results} degree farenhiet` ;
   }
   else{
    results = fc(t1);
    document.getElementById('result').innerHTML=`= ${results}  degree celsius` ;
   }

 }