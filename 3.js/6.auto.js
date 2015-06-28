
for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },2000);
}

for(var i=0;i<5;i++){
    (function(i){
        setTimeout(function(){
            console.log(i);
        },2000);
    })(i)
}
