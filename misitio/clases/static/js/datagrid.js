require(['dojo/_base/lang', 'dojox/grid/DataGrid', 'dojo/data/ItemFileWriteStore', 'dijit/form/Button', 'dojo/dom', 'dojo/domReady!','dijit/form/ValidationTextBox'],
function (lang, DataGrid, ItemFileWriteStore, Button, dom, domReady, ValidationTextBox) {
/*set up data store*/
var data = {
items: []
};
var store = new ItemFileWriteStore({
data: data
});
/*set up layout*/
var layout = [
[{
'name': 'Identificacion',
'field': 'col1',
'width': '100px',
editable: true
}, {
'name': 'Nombres',
'field': 'col2',
'width': '100px',
editable: true
}, {
'name': 'Apellidos',
'field': 'col3',
'width': '200px',
editable: true
}, {
'name': 'Direccion',
'field': 'col4',
'width': '150px',
editable: true
}, {
'name': 'Celular',
'field': 'col5',
'width': '150px',
editable: true
}, {
'name': 'Detalle',
'field': 'col6',
'width': '150px',
editable: true
}]
];
/*create a new grid*/
var grid = new DataGrid({
id: 'grid',
store: store,
structure: layout,
rowSelector: '20px'
});
/*append the new grid to the div*/
grid.placeAt("gridDiv");
/*Call startup() to render the grid*/
grid.startup();

var numid = new ValidationTextBox({
        required: true,
        invalidMessage: "Este campo es necesario"
    }, "numid");

var pnom = new ValidationTextBox({
        required: true,
        invalidMessage: "Este campo es necesario"
    }, "pnom");

var button = new Button({
onClick: function () {
    if(numid.value!=""){
        if(pnom.value!=""){
              alert("vamos pa lante")
         }else{
        alert("Campo Primer nombre No puede ir Vacio")
    }   
    }else{
        alert("Campo Numero de id No puede ir Vacio")
    }
}
}, "guardar");



});