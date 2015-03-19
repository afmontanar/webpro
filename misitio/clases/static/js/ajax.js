function myinit() {
    // connect the event with the good handler
    var myButton = dojo.byId("xBtn1")
    dojo.event.connect(myButton, "onclick", "sendForm")
}
function sendForm() {
    var fNode = dojo.byId('xForm')
    var fParms = dojo.io.encodeForm(fNode)
    var bindArgs = {
        url: ".",
        mimetype: 'text/plain',
        method: "post",
        // useCache: true,
        // sync: true,
        transport: "XMLHTTPTransport",
        postContent: fParms,
        error: function(type, error, http){
               // Handle error here
               alert(error.message)
               if (http.responseText)
                   // Return the raw server response
                   // (useful when debugging)
                   document.write(http.responseText)
               return false
        },
        load: function(type, data, http, kwArgs) 
         {
             /*
              * Handle "successful" responses here
              **/  
              var errStr = ''
              var errDiv = dojo.byId('errBox1')
              if(type == 'load'){
                try{
                 var json = eval( '(' + data + ')' )
                }catch (e){
                  // not json
                  // alert(e)
                  if (!http.responseText){
                    document.write(data)
                  } else {
                    document.write(http.responseText)
                  }
                  return false
                }
                var listElement = document.createElement('ul')
                errDiv.innerHTML = 'Testing..'
                if (json.error != null){
                    errDiv.innerHTML = json.error
                }else if(json.errors != null){
                    for (x in json.errors){ 
                        myLi = document.createElement('li')
                        myLi.innerHTML = x + ': ' + json.errors[x].toString()
                        listElement.appendChild(myLi)
                    } 
                    errDiv.appendChild(listElement)
                }
           }}
       };
    var xmlhttp = dojo.io.bind(bindArgs)
    return xmlhttp
};
dojo.addOnLoad(myinit);
