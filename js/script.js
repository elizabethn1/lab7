function init(){
  function myEventFunction(){
    //alert('Elizabeth Ng:');
    var b = document.getElementById('entrybutton').placeholder;
    alert('Elizabeth Ng: ' + b);
  }
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', myEventFunction);

  //var button = document.getElementById('entrybutton').name;
  //button.addEventListener('click', myEventFunction);
}
window.addEventListener('load', init);