function init(){
  function myEventFunction(){
    var entry=document.getElementById('entryinput').value;
    alert('Elizabeth Ng: '+entry);
  }
  var button=document.getElementById('entrybutton');
  button.addEventListener('click', myEventFunction);
}
window.addEventListener('load', init);