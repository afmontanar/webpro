require(['dojo/_base/json','dijit/DropDownMenu','dijit/MenuItem','dijit/Menu','dijit/PopupMenuBarItem','dijit/MenuBar','dijit/Dialog','dojo/store/JsonRest','dojo/data/ObjectStore','dojo/_base/lang', 'dojox/grid/DataGrid', 'dojo/data/ItemFileWriteStore', 'dijit/form/Button',"dojo/_base/xhr", "dojo/store/Memory", "dijit/form/ComboBox",'dojo/dom', 'dojo/domReady!','dijit/form/ValidationTextBox'],
function(json,DropDownMenu,MenuItem,Menu,PopupMenuBarItem,MenuBar,Dialog,JsonRest,ObjectStore,lang, DataGrid, ItemFileWriteStore, Button, xhr,Memory, ComboBox, dom, domReady, ValidationTextBox) {
/*set up data store*/

/*
var storei = new JsonRest({
   target: "/guardar_chofer/"
});
*/

var pMenuBar = new MenuBar({});

    var pSubMenu = new DropDownMenu({});
    pSubMenu.addChild(new MenuItem({
        label: "Cliente",
        onClick:function(){myDialog.show();}
    }));
    pSubMenu.addChild(new MenuItem({
        label: "Historia de vehiculo"
    }));

    pSubMenu.addChild(new MenuItem({
        label: "Busqueda historial de vehiculos"
    }));
    
    pMenuBar.addChild(new PopupMenuBarItem({
        label: "Inicio",
        popup: pSubMenu
    }));    

    pMenuBar.placeAt("wrapper");

myDialog = new Dialog({
        title: "Cliente",
        content: "<form><div id='flotante'><div class='izquierdad'><legend  style='font-weight: bold;'>Datos del cliente (Dueño del vehiculo)</legend><div class='izquierda'><div><label for='tipi'>Tipo de identificacion: </label><input id='stateSelect'></div><div><label for='pnom'>Primer nombre: </label><input type='text' name='pnom' value='' id='pnom'></input></div><div><label for='snom'>Segundo nombre: </label><input type='text' name='snom' value='' id='snom'></input></div><div><label for='papellido'>Primer apellido: </label><input type='text' name='pape' value='' id='pape'></input></div><div><label for='sapellido'>Segundo apellido: </label><input type='text' name='sape' value='' id='sape'></input></div></div><div class='derecha'><div><label for='nide'>Numero Id </label><input type='text' name='numid' value='' id='numid'></input></div><div><label for='dir'>Direccion: </label><input type='text' name='dir' value='' id='dir'></input></div><div><label for='detail'>Detalle: </label><input type='text' name='deta' value='' id='deta'></input></div><div><label for='cel'>Celular: </label><input type='text' name='cel' value='' id='cel'></input></div></div></div><div class='espacio'></div><div class='grilla'><div class='bajar' ><button id='addRow' type='button' >Agregar Fila</button><button id='guardar' type='button'>Guardar</button></div><div class='bajarq'><div id='gridDiv'></div></div></div></div></form>",
        style: "width: 1100px;"
    });

/*
storei = new dojo.store.JsonRest({target:"/guardar_chofer/"});
dataStore = new dojo.data.ObjectStore({objectStore: storei});
*/
   /*set up data store*/
    var data = {
      items: []
    }
    var store = new ItemFileWriteStore({data: data});


/*
var store = new ItemFileWriteStore({
data: data
});

/*
set up layout
*/



var grid = new DataGrid({
id: 'grid',
store: store,
structure: [{name:"Identificacion", field:"name", width: "200px"},{name:"Nombres", field:"name1", width: "200px"},{name:"Apellidos", field:"name2", width: "200px"},{name:"Direccion", field:"name3", width: "200px"},{name:"Celular", field:"name4", width: "200px"},{name:"Detalle", field:"name5", width: "200px"}]
}); // make sure you have a target HTML element with this id


/*create a new grid*/

/*
var grid = new DataGrid({
id: 'grid',
store: store,
structure: layout,
rowSelector: '20px'
});
*/



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
    }, "numid");myList[2]

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



var buttonn = new Button({
onClick: function () {
    if(comboBox.value!=""){
    if(numid.value!=""){
        if(pnom.value!=""){
            if(pape.value!=""){
              if(cel.value!=""){
                if(dir.value!=""){
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
                            dt: deta.value,
                            st: updateAll()
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
},"guardar").startup();


var button = new Button({
onClick: function () {
store.newItem({
    name: "Hernan",
    name1: "col2-",
    name2: "col3-",
    name3: "col4-",
    name4: "col5-",
    name5: "col6-"
    });
}},"addRow").startup();


function updateAll(){
            // Callback for processing a returned list of items.
            var jsonStore="";
            function gotAll(items, request){
                    var i;
                    for(i = 0; i < items.length; i++){
                         var item = items[i];
                         //alert(covertJson(store, item));
                         jsonStore += covertJson(store, item);
                                                   //store.setValue(item, "name1", value);
                    }
            }
            // Callback for if the lookup fails.
            function fetchFailed(error, request){
                alert("lookup failed.");
                alert(error);
            }
            // Fetch the data.
            store.fetch({query: {}, onComplete: gotAll, onError: fetchFailed, queryOptions: {deep:true}});
            return jsonStore;
        }

function covertJson(store, item){
            //    summary: Function to convert an item into a simple JS object.
            //    store:
            //    The datastore the item came from.
            //    item:
            //    The item in question.
            var js = {};
            if(item && store){
                // Determine the attributes we need to process.
                var attributes = store.getAttributes(item);
                if(attributes && attributes.length > 0){
                    var i;
                    for(i = 0; i < attributes.length; i++){
                        var values = store.getValues(item, attributes[i]);
                        if(values){
                            // Handle multivalued and single-valued attributes.
                            if(values.length > 1 ){
                                var j;
                                js[attributes[i]] = [];
                                for(j = 0; j < values.length; j++ ){
                                    var value = values[j];
                                    // Check that the value isn't another item. If it is, process it as an item.
                                    if(store.isItem(value)){
                                        js[attributes[i]].push(itemToJS(store, value));
                                    }else{
                                        js[attributes[i]].push(value);
                                    }
                                }
                            }else{
                                if(store.isItem(values[0])){
                                    js[attributes[i]] = itemToJS(store, values[0]);
                                }else{
                                    js[attributes[i]] = values[0];
                                }
                            }
                        }
                    }
                }
            }
             //
            return json.toJson(js, true);
        };
});