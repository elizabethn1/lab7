function init(){
  function myEventFunction(){
    alert('Elizabeth Ng:');
    //alert('Elizabeth Ng: ' + button);
  }
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', myEventFunction);

  //var button = document.getElementById('entrybutton').name;
  //button.addEventListener('click', myEventFunction);
}
window.addEventListener('load', init);