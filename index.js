let btn = document.getElementById('buttonText');

btn.addEventListener('click', (e)=>{
    let nuevainfo = document.getElementById('inputText').value;
    localStorage.setItem('dato', nuevainfo);
    alert('guardado con exito!');
    document.getElementById('inputText').value = "";
});