//http://javascript.info/tutorial/dom
//https://developer.mozilla.org/en-US/docs/Web/API/document
//http://www.w3schools.com/js/js_function_definition.asp
//https://jsperf.com/innerhtml-vs-removechild/6

function inspectDom(){
  //Check properties of document
  //https://developer.mozilla.org/en-US/docs/Web/API/document
  documentProperties();

  //Traverse through the DOM
  //http://javascript.info/tutorial/traversing-dom
  traverseThroughDOM();

  //Dom properties
  //http://javascript.info/tutorial/basic-dom-node-properties
  domProperties();

  //Call Dom methods
  domMethods();
}

//Check properties of document
function documentProperties(){
  console.log("document.readyState: " + document.readyState);

  console.log("document.doctype: " + document.doctype);

  console.log("document.implementation: " + document.implementation);

  console.log("document.documentElement: " + document.documentElement.nodeName);  //top most HTML element

  console.log("document.styleSheets: " + document.styleSheets);

  console.log("document.scripts: " + document.scripts.length);

  console.log("document.domain: " + document.domain);

  //document URI, URL, location: all return the same property
  function getURL_URI_Location() {
    console.log("document.documentURI: " + document.documentURI);
    console.log("document.location: " + document.location);
    console.log("document.URL: " + document.URL);
  }
  getURL_URI_Location();

  //get links/anchors
  function getAnchor_Links() {
    console.log("document.anchors: " + document.anchors.length); //<a>
    console.log("document.links: " + document.links[0].nodeName); //<links>
  }
  getAnchor_Links();

  console.log("document.cookie: " + document.cookie);

  console.log("document.forms.length: " + document.forms.length);
}

//Traverse through DOM
function traverseThroughDOM(){
  //Inspect children/child nodes
  function inspectChildren() {
    var body = document.body;
    //child elements, TextNodes are excluded
    console.log("Length of body.children: " + body.children.length);  //same as body.childElementCount

    //childNodes
    var childNodes = body.childNodes;
    console.log("Length of body.childNodes.length: " + body.childNodes.length);

    for (var i = 0; i < body.childElementCount; i++) {
      console.log("document body's child type: " + printNodeTypeNameValue(childNodes[i]));
      //http://www.w3schools.com/jsref/prop_node_nodetype.asp
      //children[i].nodeType = 1 ==> element node
      //children[i].nodeType = 2 ==> attribute node
      //children[i].nodeType = 3 ==> text node
      //children[i].nodeType = 8 ==> comment node
    }

    //difference between children and childNodes:
    console.log("difference between children and childNodes:");
    //http://stackoverflow.com/questions/7935689/what-is-the-difference-between-children-and-childnodes-in-javascript
    var fooDiv = document.createElement("div");
    fooDiv.textContent = "foo";
    console.log("fooDiv.childNodes.length: " + fooDiv.childNodes.length);  //1 TextNode child
    console.log("fooDiv.children.length: " + fooDiv.children.length);  //0 children element
  }
  inspectChildren();

  //Traverse through siblings and children
  function traverseThroughDom() {
    var body = document.body;

    //traverse through DOM elements
    console.log("body.firstElementChild type/name/value: " + printNodeTypeNameValue(body.firstElementChild));
    console.log("body.lastElementChild type/name/value: " + printNodeTypeNameValue(body.lastElementChild));
    var form = document.getElementById("bootstrapFormExampleId");
    console.log("form.nextSibling type/name/value: " + printNodeTypeNameValue(form.nextElementSibling));
    console.log("form.previousSibling type/name/value: " + printNodeTypeNameValue(form.previousElementSibling));
    var checkBoxes = document.getElementById("checkBoxesDiv").childNodes[0];
    console.log("checkBoxes.parentNode type/name/value: " + printNodeTypeNameValue(checkBoxes.parentNode) + ", " + checkBoxes.parentNode.getAttribute("id"));
  }
  traverseThroughDom();

  //helper method
  function printNodeTypeNameValue(node){
    return "==> " + node.nodeType + "(" + node.nodeName + "): " + node.nodeValue;
  }
}

function domProperties(){
  //set innerHtml then append more text
  function setInnerHTML(){
    var innerHTMLDiv = document.getElementById("innerHTMLDiv");
    console.log("innerHTMLDiv's innerHTML - START: " + innerHTMLDiv.innerHTML);
    innerHTMLDiv.innerHTML = "text 1 set";
    console.log("innerHTMLDiv's innerHTML -  TEXT_START: " + innerHTMLDiv.innerHTML);
    innerHTMLDiv.innerHTML += " new text added";
    console.log("innerHTMLDiv's innerHTML -  TEXT_THEN: " + innerHTMLDiv.innerHTML);
  }
  setInnerHTML();
}

//Play with dom methods
function domMethods(){
  //set a custom attribute on element using code
  function setCustomAttributeByCode() {
    var chkBoxDiv = document.getElementById("checkBoxesDiv");
    chkBoxDiv.setAttribute("jsAttr", "checkBoxesDivAttr_Value");
    console.log("chkBoxDiv.jsAttr: " + chkBoxDiv.getAttribute("jsAttr"));
  }
  setCustomAttributeByCode();
}
