// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // use document.body element.childNodes and element.classList
  // element.classList.contains(string)
  var matchedNodes = [];
  var checkForClass = function(node) {
    if(node.children !== []) {
        var children = node.children;
        for (var i = 0; i < children.length; i++) {
            if(children[i].classList.contains(className)) {
                matchedNodes.push(children[i]);
            }
            checkForClass(children[i]);
        }
    }
  };
  checkForClass(document);
  return matchedNodes;
};
