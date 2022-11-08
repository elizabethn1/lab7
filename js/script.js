function init(){
  function myEventFunction(){
    var b = document.getElementById('entrybutton').value;
    alert('Elizabeth Ng: ' + b);
  }
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', myEventFunction);









  //var button = document.getElementById('entrybutton').name;
  //button.addEventListener('click', myEventFunction);
}
window.addEventListener('load', init);