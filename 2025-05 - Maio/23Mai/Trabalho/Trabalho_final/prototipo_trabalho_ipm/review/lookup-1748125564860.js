(function(window, undefined) {
  var dictionary = {
    "0a944e4d-a920-4f66-9c1d-42b9dfc4b8d0": "Screen_ajuda",
    "6f65a8af-1732-4d6e-84de-60740ab8a511": "multiplicar",
    "31cfdeb0-9481-4c99-ad10-15f33496b77d": "Erraste",
    "bc19f141-0bff-4340-9eb5-6ce68d941325": "subtrair",
    "c2722747-ee32-4971-a482-49147ae22ebb": "Screen 2",
    "f0b78682-a3d6-447d-a15d-bda144c2ff61": "adicionar",
    "75e27309-d2dd-4f6a-930f-a2c2c71fa6f7": "Acertaste",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);