require([
    "dijit/MenuBar",
    "dijit/PopupMenuBarItem",
    "dijit/Menu",
    "dijit/MenuItem",
    "dijit/DropDownMenu",
    "dijit/Dialog",
    "dojo/domReady!",
    
], function(MenuBar, PopupMenuBarItem, Menu, MenuItem, DropDownMenu,Dialog){
    var pMenuBar = new MenuBar({});
    var pSubMenu = new DropDownMenu({});
    pSubMenu.addChild(new MenuItem({
        label: "Cliente",
        onClick: function(){ 
            myDialog = new Dialog({
            title: "My Dialog",
            content: "Test content.",
            style: "width: 300px"
            });myDialog.show();}
    }));
    pSubMenu.addChild(new MenuItem({
        label: "Historia de vehiculos"
    }));
    pSubMenu.addChild(new MenuItem({
        label: "Busqueda historial de vehiculos"
    }));
    pMenuBar.addChild(new PopupMenuBarItem({
        label: "Inicio",
        popup: pSubMenu
    }));
    pMenuBar.placeAt("wrapper");
    pMenuBar.startup();
}

);