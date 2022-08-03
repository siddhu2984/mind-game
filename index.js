var arr;

function rand(){
    arr=[];
    for(i=0;i<6;i++){
        var x = Math.floor(Math.random()*13)+1;
        if(arr.includes(x) == true){
            i=i-1;
        }
        else{
            if(x>13==false){
                arr.push(x);
            }
        }
    }
    arr = arr.concat(arr);
}
if(arr=[]){
rand();
}
function shuf(){
    for(i=11;i>0;i--){
        var j = Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
}
shuf();
var a = null;
var b = null;
var aa = null , b=null;
var matches = 0;
var turns = 0;
for(let i=1;i<13;i++){
    $("td.img--" + i).click(function(){
        $("img.img-"+i).attr("src","car/"+arr[i-1]+"H.svg")
        if(a==null){
            a=arr[i-1];
            aa = i;
        }
        else if(b==null){
            if(i!=aa){
            b=arr[i-1];
            bb = i;
            }
        }
        if(a!=null && b!=null){
            turns++;
            $("p.tun").text(turns);
            setTimeout(check,1000,a,b,aa,bb);
            a=null;
            b=null;
            aa=null;
            bb=null;
        }
    })
}

function check(a,b,aa,bb){
    console.log(a,b);
    if(a!=null && b!=null){
        if(a!=b){
            console.log(aa,bb);
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
            $("img.img-"+aa).attr("src","images/card.jfif")
            $("img.img-"+bb).attr("src","images/card.jfif")
        }
        else{
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
            matches++;
            $("p.mat").text(matches);
            if(matches==6){
                $("h2.header").text("You Won!!");
                var audio1 = new Audio("sounds/win.mp3");
                audio1.play();
                var audio2 = new Audio("sounds/clap.mp3");
                audio2.play();
            }
        }
    }
}

$("button.btn").click(function(){
    arr=[];
    aa,bb,a,b=null;
    matches=0;
    $("p.mat").text(matches);
    turns = 0;
    $("p.tun").text(turns);
    $("h2.header").text("Mind Game");
    for(var i=1;i<13;i++){
        $("img.img-"+i).attr("src","images/card.jfif")

    }
    rand();
    shuf();
})
