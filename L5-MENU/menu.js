var MenuA =
[
  {name:'Пункт 1',submenu:
    [
      {name:'Пункт 1.1',submenu:
        [
          {name:'Пункт 1.1.1',url:'http://www.tut.by'},
          {name:'Пункт 1.1.2 длинный',url:'http://www.tut.by'}
        ]
      },
      {name:'Пункт 1.2',url:'http://www.tut.by'},
      {name:'Пункт 1.3 длинный',submenu:
        [
          {name:'Пункт 1.3.1',url:'http://www.tut.by'},
          {name:'Пункт 1.3.2',url:'http://www.tut.by'},
          {name:'Пункт 1.3.3',url:'http://www.tut.by'},
          {name:'Пункт 1.3.4 длинный',url:'http://www.tut.by'}
        ]
      }
    ]
  },
  {name:'Пункт 2 длинный',url:'http://www.tut.by'},
  {name:'Пункт 3',submenu:
    [
      {name:'Пункт 3.1 длинный',url:'http://www.tut.by'},
      {name:'Пункт 3.2',url:'http://www.tut.by'}
    ]
  }
];


function makeMenu(MassM) {

var MainMenu = document.createElement("ul");
MainMenu.style.cssText = "border: 1px solid blue; border-left: 0; display: inline-block; padding: 0"

for (var i = 0; i < MassM.length; i++) {
  var MainLi = document.createElement("li");
  MainLi.style.cssText = "display: inline-block; width: 150px; height: 50px; background-color: yellow;  border-left: 1px solid blue;";
  MainMenu.appendChild(MainLi);

  if(MassM[i].url === undefined) {
    var MainA = document.createElement('span');
  } else {
  var MainA = document.createElement('a');
   MainA.setAttribute("href", MassM[i].url);
  }
  var MainText = document.createTextNode(MassM[i].name);
  MainA.appendChild(MainText);
  MainA.style.cssText = "display: block; height: 100%; text-align: center; line-height: 50px; cursor: pointer";
  MainLi.appendChild(MainA);

  // ПЕРВОЕ СУБМЕНЮ
  if ("submenu" in MassM[i]) {
    var S1 = MassM[i].submenu;
    console.log("first sub-m length: "+S1.length);

  // создание первого субменю
      var SubMenu1 = document.createElement("ul");
      // пoзиционирование и стили для первого субменю
      MainLi.style.position = "relative";
      SubMenu1.style.cssText = "display: none; position: absolute; top: 90%; left: 10px; padding: 0; background-color: lightblue";
      SubMenu1.style.width = "fit-content";
      SubMenu1.style.border = "1px solid blue";
      SubMenu1.style.borderBottom= '0';
      // подвешиваем 1 субменю к определеннным ли
      MainLi.appendChild(SubMenu1);

        // пункты 1 субменю
        for (var k = 0; k < S1.length; k++) {
        var SubLi_1 = document.createElement("li");
        // стили ли субменю li
        SubLi_1.style.cssText = " height: 30px; border-bottom: 1px solid blue";
        SubMenu1.appendChild(SubLi_1);

          // создание текста 1 субменю
          if(S1[k].url === undefined) {var SubA_1 = document.createElement('span');
          } else { var SubA_1 = document.createElement('a');
                  SubA_1.setAttribute("href", MassM[i].url); } //конец создания текста
          var SubText_1 = document.createTextNode(S1[k].name);
          SubA_1.appendChild(SubText_1);

        // стили текста 1 субменю
        SubA_1.style.cssText = "display: block; height: 100%; text-align: left; line-height: 30px; cursor: pointer";
        SubA_1.style.padding= "0 5px";
        SubLi_1.appendChild(SubA_1);
       

             // ВТОРОЕ СУБМЕНЮ
              if ("submenu" in S1[k]) {
              var S2 = S1[k].submenu;
              console.log("second sub-m length: "+S2.length);

                  // создание первого субменю
                  var SubMenu2 = document.createElement("ul");

                  // пoзиционирование и стили для второго субменю
                  SubLi_1.style.position = "relative";
                  SubMenu2.style.cssText = "display: none; position: absolute; top: 90%; left: 130px; padding: 0; background-color: lightgreen";
                  // SubMenu2.style.width = "fit-content";
                  SubMenu2.style.width = "200px";
                  SubMenu2.style.zIndex = "2000";
                  SubMenu2.style.border = "1px solid blue";
                  SubMenu2.style.borderBottom= '0';
                  // подвешиваем 1 субменю к определеннным ли
                  SubLi_1.appendChild(SubMenu2);


                  // пункты 1 субменю
                  for (var d = 0; d < S2.length; d++) {
                    var SubLi_2 = document.createElement("li");
                    // стили ли субменю li
                    SubLi_2.style.cssText = " height: 25px; border-bottom: 1px solid blue";
                    SubMenu2.appendChild(SubLi_2);

                    // создание текста 2 субменю
                    if(S2[d].url === undefined) {var SubA_2 = document.createElement('span');
                    } else { var SubA_2 = document.createElement('a');
                  SubA_2.setAttribute("href", S2[d].url); } //конец создания текста
                  var SubText_2 = document.createTextNode(S2[d].name);
                  SubA_2.appendChild(SubText_2);

                  // стили текста 2 субменю
                  SubA_2.style.cssText = "display: block; height: 100%; text-align: left; line-height: 30px; cursor: pointer";
                  SubA_2.style.padding= "0 5px";
                  SubLi_2.appendChild(SubA_2);
                  } //конец цикла пунктов 2 субменю
              } //конец цикла 2 субменю
      } //конец цикла пунктов 1 субменю
  }//конец цикла  1 субменю
}// конец главного цикла
var Box = document.getElementById("header");
Box.appendChild(MainMenu);
DisplayMenu();
}

makeMenu(MenuA);

// СОБЫТИЯ МЕНЮ
function DisplayMenu() {
  var FFF = document.getElementsByTagName("li");
  var Mass = [];
  for (var i = 0; i < FFF.length; i++) {
  if(FFF[i].lastChild.tagName === 'UL') {
      var F = FFF[i];
      var C = FFF[i].lastChild;
      Mass.push(F);
      }
   }

     for (var x = 0; x < Mass.length; x++) {
       var El = Mass[x];
       var T = El.lastChild;
       El.ST = T;
      El.onmouseover = function(EO) {
        EO.stopPropagation();
        this.ST.style.display = "block";
      }

      El.onmouseleave = function(EO) {
        EO.stopPropagation();
        this.ST.style.display = "none";
      }
   }
}