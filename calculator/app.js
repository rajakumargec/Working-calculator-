function appear(value){
    const display=document.getElementById('display');
    display.value += value;
}

function result(){
    const display=document.getElementById('display');
    try{
        const result=display.value.replace('/').replace('*');
        display.value=eval(result);
    }
    catch{
        display.value='Error';
    }
}

function cleardisplay(){
    const display=document.getElementById('display');
    display.value='';
}

function lastcharacter(){
    const display=document.getElementById('display');
    display.value= display.value.slice(0,-1);
}