// DOM1
var Field_Dom1 = document.querySelector(".clock_1");
var Mod_Dom1 = new TClock();
var View_Dom1 = new TClockViewDOM();
var Contr_Dom1 = new TClockControllerButtons();
Mod_Dom1.Start();
View_Dom1.Set(Field_Dom1, Mod_Dom1);
View_Dom1.Build();

var offset_d1 = Field_Dom1.querySelector(".utc").innerHTML;
Mod_Dom1.Set(View_Dom1, offset_d1);
Mod_Dom1.MyViewUpdate();
Contr_Dom1.Set(Field_Dom1, Mod_Dom1);


// DOM2
var Field_Dom2 = document.querySelector(".clock_4");
var Mod_Dom2 = new TClock();
var View_Dom2 = new TClockViewDOM();
var Contr_Dom2 = new TClockControllerButtons();
Mod_Dom2.Start();
View_Dom2.Set(Field_Dom2, Mod_Dom2);
View_Dom2.Build();

var offset_d2 = Field_Dom2.querySelector(".utc").innerHTML;
Mod_Dom2.Set(View_Dom2, offset_d2);
Mod_Dom2.MyViewUpdate();
Contr_Dom2.Set(Field_Dom2, Mod_Dom2);

// SVG1
var Field_Svg1 = document.querySelector(".clock_2");
var Mod_Svg1 = new TClock();
var View_Svg1 = new TClockViewSVG();
var Contr_Svg1 = new TClockControllerButtons();
Mod_Svg1.Start();
View_Svg1.Set(Field_Svg1, Mod_Svg1);
View_Svg1.Build();

var offset_s1 = Field_Svg1.querySelector(".utc").innerHTML;
Mod_Svg1.Set(View_Svg1, offset_s1);
Mod_Svg1.MyViewUpdate();
Contr_Svg1.Set(Field_Svg1, Mod_Svg1);

// // SVG2
var Field_Svg2 = document.querySelector(".clock_5");
var Mod_Svg2 = new TClock();
var View_Svg2 = new TClockViewSVG();
var Contr_Svg2 = new TClockControllerButtons();
Mod_Svg2.Start();
View_Svg2.Set(Field_Svg2, Mod_Svg2);
View_Svg2.Build();

var offset_s2 = Field_Svg2.querySelector(".utc").innerHTML;
Mod_Svg2.Set(View_Svg2, offset_s2);
Mod_Svg2.MyViewUpdate();
Contr_Svg2.Set(Field_Svg2, Mod_Svg2);


// CANVAS1
var Field_Canv1 = document.querySelector(".clock_3");
var Mod_Canv1 = new TClock();
var View_Canv1 = new TClockViewCanvas();
var Contr_Canv1 = new TClockControllerButtons();
Mod_Canv1.Start();
View_Canv1.Set(Field_Canv1, Mod_Canv1);
View_Canv1.Build();
View_Canv1.createContH();
View_Canv1.BuildHands();

var offset_c1 = Field_Canv1.querySelector(".utc").innerHTML;
Mod_Canv1.Set(View_Canv1, offset_c1);
Mod_Canv1.MyViewUpdate();
Contr_Canv1.Set(Field_Canv1, Mod_Canv1);


// CANVAS2
var Field_Canv2 = document.querySelector(".clock_6");
var Mod_Canv2 = new TClock();
var View_Canv2 = new TClockViewCanvas();
var Contr_Canv2 = new TClockControllerButtons();
Mod_Canv2.Start();
View_Canv2.Set(Field_Canv2, Mod_Canv2);
View_Canv2.Build();
View_Canv2.createContH();
View_Canv2.BuildHands();

var offset_c2 = Field_Canv2.querySelector(".utc").innerHTML;
Mod_Canv2.Set(View_Canv2, offset_c2);
Mod_Canv2.MyViewUpdate();
Contr_Canv2.Set(Field_Canv2, Mod_Canv2);
