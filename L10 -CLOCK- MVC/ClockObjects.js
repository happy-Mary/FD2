// DOM1
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

// SVG1
var Field_Svg1 = document.querySelector(".clock_2");
var Mod_Svg1 = new TClock();

var View_Svg1 = new TClockViewSVG();
View_Svg1.Set(Field_Svg1, Mod_Svg1);
View_Svg1.Build();

Mod_Svg1.Set(View_Svg1);
Mod_Svg1.MyViewUpdate();

var Contr_Svg1 = new TClockControllerButtons();
Contr_Svg1.Set(Field_Svg1, Mod_Svg1);

// SVG2
var Field_Svg2 = document.querySelector(".clock_5");
var Mod_Svg2 = new TClock();
var View_Svg2 = new TClockViewSVG();
var Contr_Svg2 = new TClockControllerButtons();

View_Svg2.Set(Field_Svg2, Mod_Svg2);
View_Svg2.Build();
Mod_Svg2.Set(View_Svg2);
Mod_Svg2.MyViewUpdate();
Contr_Svg2.Set(Field_Svg2, Mod_Svg2);

// CANVAS1
var Field_Canv1 = document.querySelector(".clock_3");
var Mod_Canv1 = new TClock();
var View_Canv1 = new TClockViewCanvas();
var Contr_Canv1 = new TClockControllerButtons();

View_Canv1.Set(Field_Canv1, Mod_Canv1);
View_Canv1.Build();


