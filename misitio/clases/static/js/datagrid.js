require(['dojo/_base/declare', 'dijit/form/DateTextBox', 'dojo/date/locale','dojo/_base/array','dojo/_base/json','dijit/DropDownMenu','dijit/MenuItem','dijit/Menu','dijit/PopupMenuBarItem','dijit/MenuBar','dijit/Dialog','dojo/store/JsonRest','dojo/data/ObjectStore','dojo/_base/lang', 'dojox/grid/DataGrid', 'dojo/data/ItemFileWriteStore', 'dijit/form/Button',"dojo/_base/xhr", "dojo/store/Memory", "dijit/form/ComboBox",'dojo/dom', 'dojo/domReady!','dijit/form/ValidationTextBox'],
function(declare, DateTextBox, locale, array,json,DropDownMenu,MenuItem,Menu,PopupMenuBarItem,MenuBar,Dialog,JsonRest,ObjectStore,lang, DataGrid, ItemFileWriteStore, Button, xhr,Memory, ComboBox, dom, domReady, ValidationTextBox) {
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
        label: "Historia de vehiculo",
        onClick:function(){historiaVehiculo.show();}
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
        //content: "<form><div id='flotante'><div class='izquierdad'><legend  style='font-weight: bold;'>Datos del cliente (Dueño del vehiculo)</legend><div class='izquierda'><div><label for='tipi'>Tipo de identificacion: </label><input id='stateSelect'></div><div><label for='pnom'>Primer nombre: </label><input type='text' name='pnom' value='' id='pnom'></input></div><div><label for='snom'>Segundo nombre: </label><input type='text' name='snom' value='' id='snom'></input></div><div><label for='papellido'>Primer apellido: </label><input type='text' name='pape' value='' id='pape'></input></div><div><label for='sapellido'>Segundo apellido: </label><input type='text' name='sape' value='' id='sape'></input></div></div><div class='derecha'><div><label for='nide'>Numero Id </label><input type='text' name='numid' value='' id='numid'></input></div><div><label for='dir'>Direccion: </label><input type='text' name='dir' value='' id='dir'></input></div><div><label for='detail'>Detalle: </label><input type='text' name='deta' value='' id='deta'></input></div><div><label for='cel'>Celular: </label><input type='text' name='cel' value='' id='cel'></input></div></div></div><div class='espacio'></div><div class='grilla'><div class='bajar' ><button id='addRow' type='button' >Agregar Fila</button><button id='deleteRow' type='button' >Eliminar Fila</button><button id='guardar' type='button'>Guardar</button></div><div class='bajarq'><div id='gridDiv'></div></div></div></div></form>",
        content: "<form><div id='flotante'><div class='izquierdad'><legend  style='font-weight: bold;'>Datos del cliente (Dueño del vehiculo)</legend><div class='izquierda'><div><label for='tipi'>Tipo de identificacion: </label><input id='stateSelect'></div><div><label for='pnom'>Primer nombre: </label><input type='text' name='pnom' value='' id='pnom'></input></div><div><label for='snom'>Segundo nombre: </label><input type='text' name='snom' value='' id='snom'></input></div><div><label for='papellido'>Primer apellido: </label><input type='text' name='pape' value='' id='pape'></input></div><div><label for='sapellido'>Segundo apellido: </label><input type='text' name='sape' value='' id='sape'></input></div></div><div class='derecha'><div><label for='nide'>Numero Id </label><input type='text' name='numid' value='' id='numid'></input></div><div><label for='dir'>Direccion: </label><input type='text' name='dir' value='' id='dir'></input></div><div><label for='detail'>Detalle: </label><input type='text' name='deta' value='' id='deta'></input></div><div><label for='cel'>Celular: </label><input type='text' name='cel' value='' id='cel'></input></div></div></div><div class='espacio'></div><div class='grilla'><div class='bajar' ><button id='addRow' type='button' >Agregar Fila</button><button id='deleteRow' type='button' >Eliminar Fila</button><button id='guardar' type='button'>Guardar</button></div><div class='bajarq'><div id='gridDiv'></div></div></div></div></form>",
         
        style: "width: 1100px;"
    });

 
var data = {
      items: []
    }
var store = new ItemFileWriteStore({data: data});
 
 var grid = new DataGrid({
     id: 'grid',
     store: store,
     structure: [{name:"Identificacion", field:"name", width: "200px",editable:true},{name:"Nombres", field:"name1", width: "200px",editable:true},{name:"Apellidos", field:"name2", width: "200px",editable:true},{name:"Direccion", field:"name3", width: "200px",editable:true},{name:"Celular", field:"name4", width: "200px",editable:true},{name:"Detalle", field:"name5", width: "200px",editable:true}]
 }); // make sure you have a target HTML element with this id
 
 
 grid.placeAt("gridDiv");


/*
storei = new dojo.store.JsonRest({target:"/guardar_chofer/"});
dataStore = new dojo.data.ObjectStore({objectStore: storei});
*/
/*Call startup() to render the grid*/
//grid.startup();



   /*set up data store*/




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
                                 var datax = {
                                      items: []
                                 }
                                 store = new ItemFileWriteStore({data: datax});                        
                                 grid.setStore(store);
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

var buttoe = new Button({
onClick: function () {
var items = grid.selection.getSelected();
        if(items.length){
            // Iterate through the list of selected items.
            // The current item is available in the variable
            // "selectedItem" within the following function:
            dojo.forEach(items, function(selectedItem){
                if(selectedItem !== null){
                    // Delete the item from the data store:
                    store.deleteItem(selectedItem);
                } // end if
            }); // end forEach
        } // end if
}},"deleteRow").startup();

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



historiaVehiculo = new Dialog({
        title: "Historia de vehiculo",
        content: "<form><div class='derechahhhhhhh'><div><button id='guardarh' type='button'>Guardar</button></div></div><div class='derechahhhhhh'><div><label for='lfeh'>Fecha</label><input type='text' name='oracle' value='' id='oracle'></input></div></div><div class='derechahhhh'><div><label for='lcho'>Chofer</label><input type='text' name='chofec' value='' id='chofec'></input></div></div><div class='derechahhhhh'><div><button type='button' value='...' id='chofe'></button></div></div><div class='derechahh'><div><label for='ldue'>Dueno</label><input type='text' name='duenoc' value='' id='duenoc' disabled></input></div></div><div class='derechahhh'><div><button id='dueno' type='button' value='...'></button></div></div><div class='derechah'><div><label for='lpla'>Placa</label><input type='text' name='qpla' value='' id='qpla'></input></div></div><div class='izquierdah'><div><label for='lnom'>Nombre</label><input type='text' name='qnom' value='' id='qnom'></input></div></div><div class='espaciox'></div><div class='izquierdahb'><div><label for='hora'>Hora</label><input type='text' name='hora' value='' id='hora'></input></div></div><div class='izquierdahhb'><div><label for='minu'>Minuto</label><input type='text' name='minuto' value='' id='minuto'></input></div></div><div class='izquierdahhhb'><div><label for='seg'>Segundo</label><input type='text' name='segundo' value='' id='segundo'></input></div></div><div id='gridDivhh'></div><div class='agrrow'><div><button id='addRowh' type='button' >Agregar Fila</button></div></div><div class='totaldes'><div><label for='totdes'>Total con descuento</label><input type='totdes' name='totald' value='' id='totald'></input></div></div><div class='total'><div><label for='tot'>Total</label><input type='text' name='totalh' value='' id='totalh'></input></div></div></form>",
        style: "width: 1200px;"
    });



var datax = {
      items: []
}

var storex = new ItemFileWriteStore({data: datax});


var gridh = new DataGrid({
id: 'gridh',
store: storex,
structure: [{name:"Cantidad", field:"nameh", width: "200px",editable:false},{name:"Marca", field:"nameh1", width: "200px",editable:true},{name:"Referencia", field:"nameh2", width: "200px",editable:true},{name:"Detalle", field:"nameh3", width: "200px",editable:true},{name:"Rueda", field:"nameh4", width: "200px",editable:true},{name:"Valor unitario", field:"nameh5", width: "200px",editable:false},{name:"Valor total", field:"nameh6", width: "200px",editable:false},{name:"Valor con descuento", field:"nameh7", width: "200px",editable:false}]
}); // {"Cantidad", "Marca", "Referencia", "Detalle", "Rueda", "Valor unitario", "Valor total", "Valor con descuento"};---,type: dojox.grid.cells.TextBox, onKeyUp: function (evt) {totar.setValue(canti.get("value")*this.get("value")); updateAllh();}

gridh.placeAt("gridDivhh");

        //Interfaz de historia
      var stateStorem = new Memory({
        data: [
            {name:"00", id:"00"},
            {name:"01", id:"01"},
            {name:"02", id:"02"},
            {name:"03", id:"03"},
            {name:"04", id:"04"},
            {name:"05", id:"05"},
            {name:"06", id:"06"},
            {name:"07", id:"07"},
            {name:"02", id:"02"},
            {name:"08", id:"08"},
            {name:"09", id:"09"},
            {name:"10", id:"10"},
            {name:"11", id:"11"},
            {name:"12", id:"12"},
            {name:"13", id:"13"},
            {name:"14", id:"14"},
            {name:"15", id:"15"},
            {name:"16", id:"16"},
            {name:"17", id:"17"},
            {name:"18", id:"18"},
            {name:"19", id:"19"},
            {name:"20", id:"20"},
            {name:"21", id:"21"},
            {name:"22", id:"22"},         
            {name:"23", id:"23"},
            {name:"24", id:"24"}
          ]
      });

      var hora = new ComboBox({
          id: "hora",
          name: "hora",
          value: "",
          store: stateStorem,
          searchAttr: "name"
      }, "hora");

      var stateStoreh = new Memory({
        data: [
            {name:"00", id:"00"},
            {name:"01", id:"01"},
            {name:"02", id:"02"},
            {name:"03", id:"03"},
            {name:"04", id:"04"},
            {name:"05", id:"05"},
            {name:"06", id:"06"},
            {name:"07", id:"07"},
            {name:"02", id:"02"},
            {name:"08", id:"08"},
            {name:"09", id:"09"},
            {name:"10", id:"10"},
            {name:"11", id:"11"},
            {name:"12", id:"12"},
            {name:"13", id:"13"},
            {name:"14", id:"14"},
            {name:"15", id:"15"},
            {name:"16", id:"16"},
            {name:"17", id:"17"},
            {name:"18", id:"18"},
            {name:"19", id:"19"},
            {name:"20", id:"20"},
            {name:"21", id:"21"},
            {name:"22", id:"22"},         
            {name:"23", id:"23"},
            {name:"24", id:"24"},
            {name:"25", id:"25"},
            {name:"26", id:"26"},
            {name:"27", id:"27"},
            {name:"28", id:"28"},
            {name:"29", id:"29"},
            {name:"30", id:"30"},
            {name:"31", id:"31"},
            {name:"32", id:"32"},
            {name:"33", id:"33"},
            {name:"34", id:"34"},
            {name:"35", id:"35"},
            {name:"36", id:"36"},
            {name:"37", id:"37"},
            {name:"38", id:"38"},
            {name:"39", id:"39"},
            {name:"40", id:"40"},
            {name:"41", id:"41"},
            {name:"42", id:"42"},
            {name:"43", id:"43"},
            {name:"44", id:"44"},
            {name:"45", id:"45"},
            {name:"46", id:"46"},
            {name:"47", id:"47"},
            {name:"48", id:"48"},
            {name:"49", id:"49"},         
            {name:"50", id:"50"},
            {name:"51", id:"51"},
            {name:"52", id:"52"},
            {name:"53", id:"53"},
            {name:"54", id:"54"},
            {name:"55", id:"55"},
            {name:"56", id:"56"},
            {name:"57", id:"57"},         
            {name:"58", id:"58"},
            {name:"59", id:"59"},
            {name:"60", id:"60"},
          ]
      });

      var minuto = new ComboBox({
          id: "minuto",
          name: "minuto",
          value: "",
          editable: false,
          store: stateStoreh,
          searchAttr: "name"
      }, "minuto");

      var segundo = new ComboBox({
          id: "segundo",
          name: "segundo",
          value: "",
          editable: false,
          store: stateStoreh,
          searchAttr: "name"
      }, "segundo");

      var totalh = new dijit.form.TextBox({
                  name: "totalh",
                  editable: false,
                  value: "" /* no or empty value! */,
                  placeHolder: "",
                  style: "width: 11em;"
             }, "totalh");

      var totald = new dijit.form.TextBox({
                  name: "totald",
                  editable: false,
                  value: "" /* no or empty value! */,
                  placeHolder: "",
                  style: "width: 11em;"
             }, "totald");

      function updateAllh(){
            function gotAllh(items, request){
                            var i;
                            var tote=0;
                            for(i = 0; i < items.length; i++){
                                 var item = items[i];
                                 //alert(covertJson(store, item));
                                 
                                 //store.setValue(item, "name1", value);
                                 var valueo = storex.getValues(item, "nameh6");
                                 //console.log(valueo);
                                 var td = parseInt(valueo[0].displayedValue)
                                 tote=tote+td;
                            }
                            totalh.setValue(tote);
                        }

            storex.fetch({query: {}, onComplete: gotAllh, queryOptions: {deep:true}});
            return "";
      };

      function updateAlls(){
            function gotAlls(items, request){
                            var i;
                            var tote=0;
                            for(i = 0; i < items.length; i++){
                                 var item = items[i];
                                 var valueo = storex.getValues(item, "nameh7");
                                 var td = parseInt(valueo[0].displayedValue);
                                 tote=tote+td;
                            }
                            totald.setValue(tote);
                        }

            storex.fetch({query: {}, onComplete: gotAlls, queryOptions: {deep:true}});
            return "";
      };
     
      var buttonh = new Button({
        onClick: function () {
        // alert("Se va a insertar un nuevo registro")
        var canti = new dijit.form.TextBox({
            name: "nameh",
            value: "" /* no or empty value! */,
            placeHolder: ""
        }, "canti");
         var totar = new dijit.form.TextBox({
            name: "nameh5",
            value: "" /* no or empty value! */,
            placeHolder: "",
            disabled: "true"
        }, "totar");
        
        var totarConDes = new dijit.form.TextBox({
            name: "nameh7",
            value: "" /* no or empty value! */,
            placeHolder: "",
            onKeyUp: function (evt) {
                
                updateAlls();
                    /*
                    int parseInt = Integer.parseInt(text);
                    int parseInt1 = Integer.parseInt(jTable1.getValueAt(jTable1.getSelectedRow(), 0).toString());
                    int resultado = parseInt * parseInt1;
                    jTable1.setValueAt(resultado + "", jTable1.getSelectedRow(), 6);
                 `  */

            }
        }, "totar");

        var myTextBox = new dijit.form.TextBox({
            name: "nameh4",
            value: "",
            placeHolder: "",
            onKeyUp: function (evt) {
                totar.setValue(canti.get("value")*this.get("value"));
                updateAllh();
                    /*
                    int parseInt = Integer.parseInt(text);
                    int parseInt1 = Integer.parseInt(jTable1.getValueAt(jTable1.getSelectedRow(), 0).toString());
                    int resultado = parseInt * parseInt1;
                    jTable1.setValueAt(resultado + "", jTable1.getSelectedRow(), 6);
                 `  */

            }
        }, "ou");
        
        storex.newItem({
            nameh: canti,
            nameh1: "",
            nameh2: "",
            nameh3: "",
            nameh4: "",
            nameh5: myTextBox,
            nameh6: totar,
            nameh7: totarConDes
            });
        }},"addRowh").startup();
        
        /*
         int sumTot = 0;
         for (int i = 0; i < this.jTable1.getRowCount(); i++) {
              try {
                  int parseInt = Integer.parseInt((String) this.jTable1.getValueAt(i, 6));
                  sumTot = sumTot + parseInt;1100688003
              } catch (Exception e) {chofer
                  sumTot = +sumTot;
              }
              this.Total.setText(sumTot + "");
        }
        */

       var buttonz = new Button({
        onClick: function () {
          if(qnom.value!=""){
            if(qpla.value!=""){
                if(duenoc.value!=""){
                    if(chofec.value!=""){
                      if(showServerValue()!=""){

                        //Perdoname, Tu sabes que yo seria incapaz de pegarte...
                        //tu sabes que yo no le puedo pegar a mi mama; eso es una muestra de que tampoco te pegaria a ti
                       
                        if(guardax()){

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
                                 var datax = {
                                      items: []
                                 }
                                 store = new ItemFileWriteStore({data: datax});                        
                                 grid.setStore(store);
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
                alert("LLene algun registro")
            }      
                 }else{
                alert("Escoja una Fecha")
            }   
                 }else{
                alert("Escoja el chofer")
            }   
                 }else{
                alert("Escoja el dueno")
            }   
            }else{
                alert("Tiene que decir la placa del carro")
            }
            }else{
                alert("Tiene que escribir algun nombre")
            }          
        }},"guardarh").startup();

        interDueno = new Dialog({
                title: "Dueño",
                content: "<form><div class='derechad'><div><label for='cnomp'>Nombres</label><input type='text' name='nombrec' value='' id='nombrec'></input></div></div><div class='derechadd'><div><label for='capes'>Apellidos</label><input type='text' name='capesi' value='' id='capesi'></input></div></div><div class='derechaddd'><div><label for='ciden'>Identificacion</label><input type='text' name='identificacionc' value='' id='identificacionc'></input></div></div><div class='derechadddd'><div><label for='cdir'>Direccion</label><input type='text' name='cdiri' value='' id='cdiri'></input></div></div><div class='derechaddddd'><div><label for='ccel'>Celular</label><input type='text' name='cceli' value='' id='cceli'></input></div></div><div class='derechadddddd'><div><button id='llenartc' type='button' >Reiniciar busqueda</button></div></div><div id='gridDivc'></div></form>",
                style: "width: 800px;"
            });

        storecx = null;

            var gridc = new DataGrid({
                id: 'gridc',
                store: storecx,
                structure: [{name:"Identificacion", field:"namec1", width: "200px"},{name:"primeroNombre", field:"namec2", width: "200px"},{name:"primeroApellido", field:"namec3", width: "200px"},{name:"direccion", field:"namec4", width: "200px"},{name:"celular", field:"namec5", width: "200px"},{name:"detalle", field:"namec5", width: "200px"}],
                onRowDblClick: function(evt) {
                     var items = this.selection.getSelected();
                    if(items.length) {
                        /* Iterate through the list of selected items.
                        The current item is available in the variable
                        'selectedItem' within the following function: */
                        array.forEach(items, function(selectedItem){
                            if(selectedItem !== null){
                                /* Iterate through the list of attributes of each item.
                                The current attribute is available in the variable
                                'attribute' within the following function: */
                                array.forEach(storecx.getAttributes(selectedItem), function(attribute){
                                    /* Get the value of the current attribute:*/
                                    var value = storecx.getValues(selectedItem, attribute);
                                    /* Now, you can do something with this attribute/value pair.
                                    Our short example shows the attribute together
                                    with the value in an alert box, but we are sure, that
                                    you'll find a more ambitious usage in your own code:*/
                                    if(attribute=='namec1'){

                                        duenoc.setValue(value);
                                        interDueno.hide();
                                    }
                                    
                                }); /* end forEach */
                            } /* end if */
                        }); /* end forEach */
                    } /* end if */
                }
            }); // {"Cantidad", "Marca", "Referencia", "Detalle", "Rueda", "Valor unitario", "Valor total", "Valor con descuento"};

             
            gridc.placeAt("gridDivc");

            function llenarTabla(){
                xhr.get({
                   url: '/busqueda_filtreada/',
                        //type: 'get',

                        content: {
                                 
                        },
                        // The success callback with result from server
                        load: function(newContent) {
                            var obj = JSON.parse(newContent);
                            var dataxc = {
                                      items: obj
                                 }
                            
                            storecx = new ItemFileWriteStore({data: dataxc}); 
                            gridc.setStore(storecx); 
                            
                            //dom.byId("contentNode").innerHTML = newContent;
                            //storec = new dojo.store.JsonRest(data:newContent)
                            //dataStore = new dojo.data.ObjectStore({objectStore: storec});
                        },
                        // The error handler
                        error: function() {
                            // Do nothing -- keep old content there
                        }
                });
            };
         
            var buttod = new Button({
              onClick: function () {           
                llenarTabla();
                interDueno.show();
            }},"dueno").startup();

            var datad = {
                  items: []
            }

            var stored = new ItemFileWriteStore({data: datad});


            var gridd = new DataGrid({
            id: 'gridd',
            store: stored,
            structure: [{name:"Identificacion", field:"named", width: "200px",editable:false},{name:"Nombres", field:"named1", width: "200px",editable:false},{name:"Apellidos", field:"named2", width: "200px",editable:false},{name:"Direccion", field:"named3", width: "200px",editable:false},{name:"Celular", field:"named4", width: "200px",editable:false},{name:"Detalle", field:"named5", width: "200px",editable:false}],
            onRowDblClick: function(evt) {
                     var items = this.selection.getSelected();
                    if(items.length) {
                        /* Iterate through the list of selected items.
                        The current item is available in the variable
                        'selectedItem' within the following function: */
                        array.forEach(items, function(selectedItem){
                            if(selectedItem !== null){
                                /* Iterate through the list of attributes of each item.
                                The current attribute is available in the variable
                                'attribute' within the following function: */
                                array.forEach(storedx.getAttributes(selectedItem), function(attribute){
                                    /* Get the value of the current attribute:*/
                                    var value = storedx.getValues(selectedItem, attribute);
                                    /* Now, you can do something with this attribute/value pair.
                                    Our short example shows the attribute together
                                    with the value in an alert box, but we are sure, that
                                    you'll find a more ambitious usage in your own code:*/
                                    if(attribute=='named'){

                                        chofec.setValue(value);
                                        interChofer.hide();
                                    }
                                    
                                }); /* end forEach */
                            } /* end if */
                        }); /* end forEach */
                    } /* end if */
                }
            }); // {"Cantidad", "Marca", "Referencia", "Detalle", "Rueda", "Valor unitario", "Valor total", "Valor con descuento"};---,type: dojox.grid.cells.TextBox, onKeyUp: function (evt) {totar.setValue(canti.get("value")*this.get("value")); updateAllh();}


            interChofer = new Dialog({
                title: "Chofer",
                content: "<form><div id='gridDivd'></div></form>",
                style: "width: 800px;"
            });


            gridd.placeAt("gridDivd");

            var buttoc = new Button({
              onClick: function () {           
                if(duenoc.value!=""){
                   interChofer.show();
                   mandarClienteaChofer(duenoc.value);
                }else{
                   alert("Debe escoger un chofer");
                }
            }},"chofe").startup();

            function mandarClienteaChofer(idCliente){
                xhr.get({
                   url: '/tener_Chofe_client/',
                        //type: 'get',
                        content: {
                              id: idCliente    
                        },
                        // The success callback with result from server
                        load: function(newContent) {
                            var obj = JSON.parse(newContent);
                            var datadc = {
                                      items: obj
                                 }
                            storedx = new ItemFileWriteStore({data: datadc}); 
                            gridd.setStore(storedx);
                            //dom.byId("contentNode").innerHTML = newContent;
                            //storec = new dojo.store.JsonRest(data:newContent)
                            //dataStore = new dojo.data.ObjectStore({objectStore: storec});
                        },
                        // The error handler
                        error: function() {
                            // Do nothing -- keep old content there
                        }
                });
            }

            var identificacionc = new dijit.form.TextBox({
            name: "identificacionc",
            value: "" /* no or empty value! */,
            placeHolder: "",
            onKeyUp: function (evt) {  
                
                gridc.filter({namec1: this.get("value")}); 
                if(this.get("value")==""){
                    llenarTabla();
                }   
                 /*
                    totar.setValue(canti.get("value")*this.get("value"));
                    updateAllh();
                    int parseInt = Integer.parseInt(text);
                    int parseInt1 = Integer.parseInt(jTable1.getValueAt(jTable1.getSelectedRow(), 0).toString());
                    int resultado = parseInt * parseInt1;
                    jTable1.setValueAt(resultado + "", jTable1.getSelectedRow(), 6);
                 */
            },
            style: "width: 11em;"
        }, "identificacionc");

        var nombrec = new dijit.form.TextBox({
            name: "nombrec",
            value: "" /* no or empty value! */,
            placeHolder: "",
            onKeyUp: function (evt) {  
                gridc.filter({namec2: this.get("value")}); 
                if(this.get("value")==""){
                    llenarTabla();
                }   
            },
            style: "width: 11em;"
        }, "nombrec");
        

        var qpla = new dijit.form.TextBox({
            name: "qpla",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 11em;"
        }, "qpla");

        var qnom = new dijit.form.TextBox({
            name: "qnom",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 11em;"
        }, "qnom");

        var duenoc = new dijit.form.TextBox({
            name: "duenoc",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 11em;",
            disabled: "true"
        }, "duenoc");

        var chofec = new dijit.form.TextBox({
            name: "chofec",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 11em;",
            disabled: "true"
        }, "chofec");
             
        declare("OracleDateTextBox", DateTextBox, {
            oracleFormat: {selector: 'date', datePattern: 'yyyy/MM/dd', locale: 'en-us'},
            value: "", // prevent parser from trying to convert to Date objectdeclare, DateTextBox, locale, 
            postMixInProperties: function(){ // change value string to Date object
                this.inherited(arguments);
                // convert value to Date object
                this.value = locale.parse(this.value, this.oracleFormat);
            },
            // To write back to the server in Oracle format, override the serialize method:
            serialize: function(dateObject, options){
                return locale.format(dateObject, this.oracleFormat).toUpperCase();
            }
        });

        function showServerValue(){
            return document.getElementsByName('oracle')[0].value;
        }

        function guardax(){
            if(gridh.rowCount> 0){
                if(totald.value!=""){
                    if(totalh.value!=""){
                        return true;
                    }
                }else{
                        alert("Llene el total con descuento");
                    }
            }
               return false;
        }

        new OracleDateTextBox({
            value: "31-DEC-2009",
            name: "oracle",
            style: "width: 11em;",
            onChange: function(v){ setTimeout(showServerValue, 0)}
        }, "oracle").startup();

        
              
            /*
             dojo.connect(gridh, "onRowClick", function(evt)  {identificacionc
                     //item = this.getItem(evtx.rowIndex);
                     //var valuex = this.store.getValue(item, "nameh"); 
                     console.log(evt);          
            });     


             dojo.connect( gridh, "onRowClick", function(evt) {
             
            var idx = evt.rowIndex;
            var idy = evt.cellIndex;
            item = this.getItem(idx);
             
            //  get a value out of the item

            
            var value = this.store.getValue(item, "nameh");   
            console.log(value);
   

            var handle = dojo.connect(gridh, "onApplyCellEdit", function(value,idx,idy)  {
                     console.log(value);          
               });  

            if (evt.cellIndex==0) {
                     var handle=dojo.connect(gridh, "onKeyPress", function(evtk)  {
                      console.log(evtk.keyCode);
                      dojo.disconnect(handle);
                    });
             }

              });
             */
});