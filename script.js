let scre=document.getElementById('screen');

function input(x){

    scre.value=scre.value+x;

}

function allClear(){

    scre.value='  ';


}

function del()
{
    scre.value=scre.value.slice(0,-1);
}

function calc(){

    try{

        scre.value=eval(scre.value);
    }
    catch{
        scre.value="error";
    }
    
}
