let btnobj = document.getElementsByClassName("btn");

for(let i=0;i<btnobj.length;i++){
    
    if(i!=14 && i!=12){
        btnobj[i].addEventListener("click",function(){
            let n=btnobj[i].id;
            display(n);
        });
    }

    else if(i===12){
        btnobj[i].addEventListener("click",function(){
            document.querySelector("p").innerHTML="";    
        })
    }
        
    else{
        btnobj[i].addEventListener("click",function(){
            let ans=eval(document.querySelector("p").innerHTML);
            document.querySelector("p").innerHTML=ans;
        })
    }
}

function display(key){
    document.querySelector("p").innerHTML+=key;
}

document.addEventListener("keydown" , function(event){
    if(event.key==="Enter"){
        let ans=eval(document.querySelector("p").innerHTML);
        document.querySelector("p").innerHTML=ans;
    }
    else{
        display(event.key);
    }
})