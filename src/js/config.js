// initialize Packery

var grid = document.querySelector('.grid');
var pckry = new Packery( grid, {
  itemSelector: '.grid-item',
  columnWidth: 150,
  gutter: 5
});

var draggableElems = grid.querySelectorAll('.grid-item');
for(var i = 0; i < draggableElems.length; i++) {
  var draggie = new Draggabilly( draggableElems[i] );
  pckry.bindDraggabillyEvents( draggie );
}

grid.addEventListener('dragover', function(e) {
  e.stopPropagation();
  e.preventDefault();
  e.dataTransfer.dropeffect = 'copy';
});

grid.addEventListener('drop', function(e) {
  e.stopPropagation();
  e.preventDefault();
  var files = e.dataTransfer.files;

  for (var i=0, file; file=files[i]; i++) {
    if(file.type.match(/image.*/)) {
      var reader = new FileReader();

      reader.onload = function(e2) {
        var data = e2.target.result;
        var newItem = document.createElement('div');
        newItem.className = 'grid-item';
        newItem.style.cssText = 'background-image: url(' + data + ');';
        newItem.style.cssText += 'background-size: contain;';

        grid.append(newItem);

        var draggie = new Draggabilly( newItem );
        pckry.appended( newItem );
        pckry.bindDraggabillyEvents( draggie );
      }

      reader.readAsDataURL(file);

    }
  }
});