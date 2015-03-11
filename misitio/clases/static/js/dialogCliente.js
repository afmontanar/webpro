require(["dijit/Dialog", "dojo/domReady!"], function(Dialog){
    myDialog = new Dialog({
        title: "My Dialog",
        content: "Test content.",
        style: "width: 300px"
    });
});