/* function promedioL(){
    let Luis_n1=+document.getElementById("Luis-n1").value;
    let Luis_n2=+document.getElementById("Luis-n2").value;
    let Luis_n3=+document.getElementById("Luis-n3").value;
    let Luis_n4=+document.getElementById("Luis-n4").value;
    let res1=+(Luis_n1+Luis_n2+Luis_n3+Luis_n4)/4;
    document.getElementById("Luis-p1").innerHTML=res1;
    let Fernando_n1=+document.getElementById("Fernando-n1").value;
    let Fernando_n2=+document.getElementById("Fernando-n2").value;
    let Fernando_n3=+document.getElementById("Fernando-n3").value;
    let Fernando_n4=+document.getElementById("Fernando-n4").value;
    let res2=+(Fernando_n1+Fernando_n2+Fernando_n3+Fernando_n4)/4;
    document.getElementById("Fernando-p1").innerHTML=res2;
    let Cesar_n1=+document.getElementById("Cesar-n1").value;
    let Cesar_n2=+document.getElementById("Cesar-n2").value;
    let Cesar_n3=+document.getElementById("Cesar-n3").value;
    let Cesar_n4=+document.getElementById("Cesar-n4").value;
    let res3=+(Cesar_n1+Cesar_n2+Cesar_n3+Cesar_n4)/4;
    document.getElementById("Cesar-p1").innerHTML=res3;
    let Francis_n1=+document.getElementById("Francis-n1").value;
    let Francis_n2=+document.getElementById("Francis-n2").value;
    let Francis_n3=+document.getElementById("Francis-n3").value;
    let Francis_n4=+document.getElementById("Francis-n4").value;
    let res4=+(Francis_n1+Francis_n2+Francis_n3+Francis_n4)/4;
    document.getElementById("Francis-p1").innerHTML=res4;
    let Jose_n1=+document.getElementById("Jose-n1").value;
    let Jose_n2=+document.getElementById("Jose-n2").value;
    let Jose_n3=+document.getElementById("Jose-n3").value;
    let Jose_n4=+document.getElementById("Jose-n4").value;
    let res5=+(Jose_n1+Jose_n2+Jose_n3+Jose_n4)/4;
    document.getElementById("Jose-p1").innerHTML=res5;
    let Gerardo_n1=+document.getElementById("Gerardo-n1").value;
    let Gerardo_n2=+document.getElementById("Gerardo-n2").value;
    let Gerardo_n3=+document.getElementById("Gerardo-n3").value;
    let Gerardo_n4=+document.getElementById("Gerardo-n4").value;
    let res6=+(Gerardo_n1+Gerardo_n2+Gerardo_n3+Gerardo_n4)/4;
    document.getElementById("Gerardo-p1").innerHTML=res6;
    let Anghelo_n1=+document.getElementById("Anghelo-n1").value;
    let Anghelo_n2=+document.getElementById("Anghelo-n2").value;
    let Anghelo_n3=+document.getElementById("Anghelo-n3").value;
    let Anghelo_n4=+document.getElementById("Anghelo-n4").value;
    let res7=+(Anghelo_n1+Anghelo_n2+Anghelo_n3+Anghelo_n4)/4;
    document.getElementById("Anghelo-p1").innerHTML=res7;
    let Sebastian_n1=+document.getElementById("Sebastian-n1").value;
    let Sebastian_n2=+document.getElementById("Sebastian-n2").value;
    let Sebastian_n3=+document.getElementById("Sebastian-n3").value;
    let Sebastian_n4=+document.getElementById("Sebastian-n4").value;
    let res8=+(Sebastian_n1+Sebastian_n2+Sebastian_n3+Sebastian_n4)/4;
    document.getElementById("Sebastian-p1").innerHTML=res8;
    let Juan_n1=+document.getElementById("Juan-n1").value;
    let Juan_n2=+document.getElementById("Juan-n2").value;
    let Juan_n3=+document.getElementById("Juan-n3").value;
    let Juan_n4=+document.getElementById("Juan-n4").value;
    let res9=+(Juan_n1+Juan_n2+Juan_n3+Juan_n4)/4;
    document.getElementById("Juan-p1").innerHTML=res9;
    let Alexander_n1=+document.getElementById("Alexander-n1").value;
    let Alexander_n2=+document.getElementById("Alexander-n2").value;
    let Alexander_n3=+document.getElementById("Alexander-n3").value;
    let Alexander_n4=+document.getElementById("Alexander-n4").value;
    let res10=+(Alexander_n1+Alexander_n2+Alexander_n3+Alexander_n4)/4;
    document.getElementById("Alexander-p1").innerHTML=res10;
} */


let n1=["Luis-n1","Fernando-n1","Cesar-n1","Francis-n1","Jose-n1","Gerardo-n1","Anghelo-n1","Sebastian-n1","Juan-n1","Alexander-n1",]
let n2=["Luis-n2","Fernando-n2","Cesar-n2","Francis-n2","Jose-n2","Gerardo-n2","Anghelo-n2","Sebastian-n2","Juan-n2","Alexander-n2",]
let n3=["Luis-n3","Fernando-n3","Cesar-n3","Francis-n3","Jose-n3","Gerardo-n3","Anghelo-n3","Sebastian-n3","Juan-n3","Alexander-n3",]
let n4=["Luis-n4","Fernando-n4","Cesar-n4","Francis-n4","Jose-n4","Gerardo-n4","Anghelo-n4","Sebastian-n4","Juan-n4","Alexander-n4",]
let np=["Luis-p1","Fernando-p1","Cesar-p1","Francis-p1","Jose-p1","Gerardo-p1","Anghelo-p1","Sebastian-p1","Juan-p1","Alexander-p1",]

function promedioL(){
    for(let i=0;i<11;i++){
        let q="n1[i]";
        let p="n2[i]";
        let r="n3[i]";
        let s="n4[i]";
        q=+document.getElementById(n1[i]).value;
        p=+document.getElementById(n2[i]).value;
        r=+document.getElementById(n3[i]).value;
        s=+document.getElementById(n4[i]).value;
        res=+((p+q+r+s)/4);
        document.getElementById(np[i]).innerHTML=res;
    }
}
let Promedio=document.getElementById("promedio");
Promedio.addEventListener("mouseup",promedioL);