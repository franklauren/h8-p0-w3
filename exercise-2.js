function balikString(string) {
    var kata = '';
    var gabung = '';
    for (var i=string.length-1; i>-1;i--){
      kata = string[i];
      gabung+=kata;
    }
    console.log(gabung);
  }
    console.log(balikString('Hello World!'));
  