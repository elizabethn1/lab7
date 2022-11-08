function init(){
  function myEventFunction(){
    var entry=document.getElementById('entryinput').value;
    var result=document.getElementById('textoutput');
    result.innerHTML=entry;
    alert('Elizabeth Ng: '+entry);
  }
  var button=document.getElementById('entrybutton');
  button.addEventListener('click', myEventFunction);
}
window.addEventListener('load', init);