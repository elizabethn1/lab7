function init(){
  function myEventFunction(){
    //alert('Elizabeth Ng:');
    var button = document.getElementById('entrybutton').name;
    alert('Elizabeth Ng: ' + button);
  }
  //var button = document.getElementById('entrybutton');
  //button.addEventListener('click', myEventFunction);

}
window.addEventListener('load', init);