let result=[]
function arry1(word){
    for(i=0;i<word.length;i++){
        if(word[i].startsWith("h")){
            result.push(word[i])
            
        }
        

    }
    console.log(result);
}
 let arry=["hello","world","this","is","a","test"]
arry1(arry)



let str1=["hello","world","this","is","a","test"]
result=[]
for(i=0;i<str1.length;i++){
    if(!(str1[i].includes("o"))){
        result.push(str1[i])
        
    }
}
console.log(result)
 


let result=[]
function arry1(string){
    for(i=0;i<string.length;i++){
        if(arr[i]){
            res=string[i].charAt(0)
            result.push(res)
        }
    }
    console.log(result);

}
let arr=["hello","world","this","is","a","test"]
arry1(arr)


let num=50;
for(i=1;i<=num;i++){
    if(i%2==0 && i%3==0){
        console.log("Fizz_buzz")
    }
    else if(i%2==0){
        console.log("Fizz");
    }
    else if(i%3==0){
        console.log("Buzz");
    }
    
   else{
    console.log(i)
   }
}

let num=10;
for(i=1;i<=num;i++){
    console.log(`2x${i}=${i*2}`);
}


let str1="python"
 let res=""
 for(i=str1.length-1;i>=0;i--){
    res=res+str1[i]
    
 }
 console.log(res)


to print the numbers in below given the number 
let num=prompt("enter a no.series")
a=0,b=1,i=1
while(a<num){
    console.log(a)
    c=a+b
    a=b
    b=c
    i++
}


let num=prompt("enter a number")
a=0,b=1,nonfibb=0
while(nonfibb!=num){
    for(i=a+1;i<b;i++){
        console.log(i)
        nonfibb++
        if(nonfibb==num){
            break;
        }
    }
    c=a+b
    a=b
    b=c
}

let str1=["äpple","banana","juice"]
let result=str1.lastIndexOf("juice")
console.log(result);


(print the numbers in reverse in negative numbers)


let num=+prompt("enter a number")
negative=false
rem=0
if(num<0){
    num=num*-1
    negative=true
}
while(num!=0){
    res=num%10
    rem=rem*10+res
    num=Math.floor(num/10)
}
if(negative){
    console.log(rem*-1);
}
else{
    console.log(rem);
}