var display=document.output.isiText;

const result=()=>{
    display.value=eval(display.value);
}

function clear() {
    display.value='';
}

const del=()=>{
    var del=display;
    del.value=del.value.substr(0,del.value.length-1);
}

function init(...num){
    return display.value+=num;
}
