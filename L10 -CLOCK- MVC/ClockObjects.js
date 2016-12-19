var Field_Dom1 = document.querySelector(".clock_1");

var Mod_Dom1 = new TClock();
// ModDom_1.Start();

var View_Dom1 = new TClockViewDOM();
View_Dom1.Set(Field_Dom1, Mod_Dom1);
View_Dom1.Build();

Mod_Dom1.Set(View_Dom1);
Mod_Dom1.MyViewUpdate();

var Contr_Dom1 = new TClockControllerButtons();
Contr_Dom1.Set(Field_Dom1, Mod_Dom1);


// DOM2
var Field_Dom2 = document.querySelector(".clock_4");

var Mod_Dom2 = new TClock();
// ModDom_1.Start();

var View_Dom2 = new TClockViewDOM();
View_Dom2.Set(Field_Dom2, Mod_Dom2);
View_Dom2.Build();

Mod_Dom2.Set(View_Dom2);
Mod_Dom2.MyViewUpdate();

var Contr_Dom2 = new TClockControllerButtons();
Contr_Dom2.Set(Field_Dom2, Mod_Dom2);




