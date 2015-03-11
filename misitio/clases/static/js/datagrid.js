require(['dojo/_base/lang', 'dojox/grid/DataGrid', 'dojo/data/ItemFileWriteStore', 'dojox/grid/cells/dijit', 'dojo/dom', 'dojo/domReady!'],
  function(lang, DataGrid, ItemFileWriteStore, cells, dom){
    /*set up data store*/
    var data = {
      identifier: "id",
      items: []
    };
    var data_list = [
    /*{ col1: "normal", col2: false, col3: 'But are not followed by two hexadecimal', col4: 29.91},
      { col1: "important", col2: false, col3: 'Because a % sign always indicates', col4: 9.33},
      { col1: "important", col2: false, col3: 'Signs can be selectively', col4: 19.34}
    */];
   /* var rows = 60;
    for(var i = 0, l = data_list.length; i < rows; i++){
      data.items.push(lang.mixin({ id: i+1 }, data_list[i%l]));
    }*/
    var store = new ItemFileWriteStore({data: data});

    /*set up layout*/
    var layout = [[
      {'name': 'Identificacion', 'field': 'id', 'width': '100px', editable: true},
      {'name': 'Nombres', 'field': 'col2', 'width': '100px', editable: true, type: dojox.grid.cells.CheckBox,styles: 'text-align: center;'},
      {'name': 'Apellidos', 'field': 'col3', 'width': '200px', editable: true},
      {'name': 'Direccion', 'field': 'col4', 'width': '150px', editable: true},
      {'name': 'Celular', 'field': 'id', 'width': '100px', editable: true},
      {'name': 'Detalle', 'field': 'col3', 'width': '200px', editable: true}
    ]];

    /*create a new grid*/
    var grid = new DataGrid({
        id: 'grid',
        store: store,
        structure: layout,
        rowSelector: '20px'});

    /*append the new grid to the div*/
    grid.placeAt("gridDiv");

    /*Call startup() to render the grid*/
    grid.startup();
});
