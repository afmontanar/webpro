require(['dojo/_base/lang', 'dojox/grid/DataGrid', 'dojo/data/ItemFileWriteStore', 'dijit/form/Button',"dojo/_base/xhr", "dojo/store/Memory", "dijit/form/ComboBox",'dojo/dom', 'dojo/domReady!','dijit/form/ValidationTextBox'],
function (lang, DataGrid, ItemFileWriteStore, Button, xhr,Memory, ComboBox, dom, domReady, ValidationTextBox) {
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
//grid.startup();

var stateStore = new Memory({
        data: [
            {name:"CC", id:"CC"},
            {name:"CE", id:"CE"},
            {name:"TI", id:"TI"}
        ]
    });

    var comboBox = new ComboBox({
        id: "stateSelect",
        name: "state",
        value: "",
        store: stateStore,
        searchAttr: "name"
    }, "stateSelect");




var deta = new ValidationTextBox({
        required: false,
        invalidMessage: "Este campo es necesario"
    }, "deta");


var sape = new ValidationTextBox({
        required: false,
        invalidMessage: "Este campo es necesario"
    }, "sape");

var snom = new ValidationTextBox({
        required: false,
        invalidMessage: "Este campo es necesario"
    }, "snom");


var numid = new ValidationTextBox({
        required: true,
        invalidMessage: "Este campo es necesario"
    }, "numid");

var pnom = new ValidationTextBox({
        required: true,
        invalidMessage: "Este campo es necesario"
    }, "pnom");

var pape = new ValidationTextBox({
        required: true,
        invalidMessage: "Este campo es necesario"
    }, "pape");

var cel = new ValidationTextBox({
        required: true,
        invalidMessage: "Este campo es necesario"
    }, "cel");

var dir = new ValidationTextBox({
        required: true,
        invalidMessage: "Este campo es necesario"
    }, "dir");

var button = new Button({
onClick: function () {
    if(comboBox.value!=""){
    if(numid.value!=""){
        if(pnom.value!=""){
            if(pape.value!=""){
              if(cel.value!=""){
                if(dir.value!=""){
                     alert(store.typeMap);
                     xhr.get({
                        // The URL of the request
                        //data:{'id':id},
                        url: '/guardar-pregunta/',
                        //type: 'get',

                        content: {
                            id: numid.value,
                            ti: comboBox.value,
                            pm: pnom.value,
                            sn: snom.value,
                            pa: pape.value,
                            sa: sape.value,
                            di: dir.value,
                            cl: cel.value,
                            dt: deta.value
                        },
                        // The success callback with result from server
                        load: function(newContent) {

                             if(newContent=='{"respuesta": "si"}'){
                                alert("Guardado correctamente");
                                 numid.reset();
                                 comboBox.reset();
                                 pnom.reset();
                                 snom.reset();
                                 pape.reset();
                                 sape.reset();
                                 dir.reset();
                                 cel.reset();
                                 deta.reset();
                             }else{
                                alert("Este cliente ya existe");
                                numid.reset();
                                 comboBox.reset();
                                 pnom.reset();
                                 snom.reset();
                                 pape.reset();
                                 sape.reset();
                                 dir.reset();
                                 cel.reset();
                                 deta.reset();
                             }
                            //dom.byId("contentNode").innerHTML = newContent;
                        },
                        // The error handler
                        error: function() {
                            // Do nothing -- keep old content there
                        }
        });
         }else{
        alert("Campo Direccion No puede ir Vacio")
    }   
         }else{
        alert("Campo Celular No puede ir Vacio")
    }   
         }else{
        alert("Campo Primer apellido No puede ir Vacio")
    }   
         }else{
        alert("Campo Primer nombre No puede ir Vacio")
    }   
    }else{
        alert("Campo Numero de id No puede ir Vacio")
    }
    }else{
        alert("Tiene que escoger el tipo de identificacion")
    }
}
}, "guardar");

var button = new Button({
onClick: function () {
store.newItem({
    col1: "col1-",
    col2: "col2-",
    col3: "col3-",
    col4: "col4-",
    col5: "col5-",
    col6: "col6-"
    });
}}, "addRow");
;
});