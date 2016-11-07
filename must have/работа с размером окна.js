	Образовательный центр
Парка высоких технологий	
Разработка веб-приложений на JavaScript
Тема E. Работа с окном браузера и с документом. Объект события
E.05 Полезные функции для работы с окном браузера
предыдущий слайд   слайд 1 из 25   следующий слайд

тестовая страничка 

// Полезные функции:

// возвращает размер открытого документа
function GetDocumentSize()
{
  var TotalHeight=(document.body.scrollHeight > document.body.offsetHeight)?document.body.scrollHeight:document.body.offsetHeight;
  var TotalWidth=(document.body.scrollWidth > document.body.offsetWidth)?document.body.scrollWidth:document.body.offsetWidth;
  return {width:TotalWidth, height:TotalHeight};
}

// возвращает размер клиентской области окна
function GetWindowClientSize()
{
  var uaB=navigator.userAgent.toLowerCase();
  var isOperaB = (uaB.indexOf('opera')  > -1);
  var isIEB=(!isOperaB && uaB.indexOf('msie') > -1);

  var ClientWidth=((document.compatMode||isIEB)&&!isOperaB)?
    (document.compatMode=='CSS1Compat')?
    document.documentElement.clientWidth:
    document.body.clientWidth:
    (document.parentWindow||document.defaultView).innerWidth;

  var ClientHeight=((document.compatMode||isIEB)&&!isOperaB)?
    (document.compatMode=='CSS1Compat')?
    document.documentElement.clientHeight:
    document.body.clientHeight:
    (document.parentWindow||document.defaultView).innerHeight;

  return {width:ClientWidth, height:ClientHeight};
}

// возвращает, насколько проскроллировано окно браузера
function GetWindowScrollPos()
{
  if ( 'pageXOffset' in window )
    return { scrollx: window.pageXOffset, scrolly: window.pageYOffset };
  if ( document.documentElement && ('scrollLeft' in document.documentElement) )
    return { scrollx: document.documentElement.scrollLeft, scrolly: document.documentElement.scrollTop };
  if ( document.body && ('scrollLeft' in document.body) )
    return { scrollx: document.body.scrollLeft, scrolly: document.body.scrollTop };
  return { scrollx: 0, scrolly: 0 };
}

// скроллирует окно к указанному элементу
function ScrollToObj(El,ScrollMode)
{
  // ScrollMode
  // 0 - сделать видимым с минимальным скроллингом
  // 1 - верх объекта - к верху экрана
  // 2 - объект на середину экрана
  // 3 - низ объекта - к низу экрана
  // 4 - верх объекта - почти к верху экрана

  var ObjPos=GetElementPos(El);
  switch ( ScrollMode )
  {
    case 0:
      var ScrollPos=GetWindowScrollPos();
      if ( ObjPos.top<ScrollPos.scrolly )
        window.scrollTo(0,ObjPos.top);
      else
      {
        var ClientSize=GetWindowClientSize();
        if ( ObjPos.top+El.offsetHeight>ScrollPos.scrolly+ClientSize.height )
          window.scrollTo(0,ObjPos.top+El.offsetHeight-ClientSize.height);
      }
      break;
    case 1:
      window.scrollTo(0,ObjPos.top);
      break;
    case 2:
      var ClientSize=GetWindowClientSize();
      window.scrollTo(0,ObjPos.top+El.offsetHeight/2-ClientSize.height/2);
      break;
    case 3:
      var ClientSize=GetWindowClientSize();
      window.scrollTo(0,ObjPos.top+El.offsetHeight-ClientSize.height);
      break;
    case 4:
      var ClientSize=GetWindowClientSize();
      window.scrollTo(0,ObjPos.top-ClientSize.height/5);
      break;
  }
}

