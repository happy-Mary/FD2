var ContD1 = document.querySelector(".clock_1");

var DClock1 = new TClock();
DClock1.Start();

var View_1 = new TClockViewDOM();
View_1.Set(ContD1, DClock1);
View_1.Build();


DClock1.Set(View_1);
DClock1.MyViewUpdate();

// setInterval('console.log("прошла секунда")', 1000)
setInterval('DClock1.MyViewUpdate();', 1000)




