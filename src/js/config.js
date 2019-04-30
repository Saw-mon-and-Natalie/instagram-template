// initialize Packery
var $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    // columnWidth helps with drop positioning
    columnWidth: 150,
    gutter: 5
  });
  
  // make all grid-items draggable
  $grid.find('.grid-item').each( function( i, gridItem ) {
    var draggie = new Draggabilly( gridItem );
    // bind drag events to Packery
    $grid.packery( 'bindDraggabillyEvents', draggie );
  });