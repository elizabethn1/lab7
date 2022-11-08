function init(){
  function myEventFunction(){
    var entry=document.getElementById('entrybutton').value;
    var entry=alert('Elizabeth Ng: '+entry);
  }
  var button=document.getElementById('entrybutton');
  button.addEventListener('click', myEventFunction);
}
window.addEventListener('load', init);