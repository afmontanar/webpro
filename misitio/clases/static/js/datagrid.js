require(['dojo/_base/lang', 'dojox/grid/DataGrid', 'dojo/data/ItemFileWriteStore', 'dijit/form/Button', 'dojo/dom', 'dojo/domReady!'],

function (lang, DataGrid, ItemFileWriteStore, Button, dom) {
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

    var button = new Button({
        onClick: function () {
            console.log(arguments);
            store.newItem({
                col1: "col1-",
                col2: "col2-",
                col3: "col3-",
                col4: "col4-",
                col5: "col5-",
                col6: "col6-"
            });
        
        }
    }, "addRow");
});