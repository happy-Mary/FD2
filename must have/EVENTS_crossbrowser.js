// установка обработчика событий
function AddEventHandler(Elem,EventName,HandlerFunc,CaptureFlag)
{
  if ( Elem.addEventListener )
    Elem.addEventListener(EventName,HandlerFunc,CaptureFlag); // современные браузеры и IE >=9
  else
    if ( !CaptureFlag ) // перехват вообще невозможен
    {
      var EventName2='on'+EventName;
      if ( Elem.attachEvent ) // IE <=8
      {
        // создаём обёртку для обработчика, чтобы обработчику правильно передавался this
        var IEHandlerF=function() { HandlerFunc.call(Elem); } 
        Elem.attachEvent(EventName2,IEHandlerF);
        var StoreName="__IEHandlerF_"+EventName;
        Elem[StoreName]=IEHandlerF; // сохраняем ссылку на обёртку, чтобы найти её при удалении обработчика
      }
      else // устаревшие браузеры
        if ( !Elem[EventName2] )
          Elem[EventName2]=HandlerFunc; // не сработает если несколько обработчиков одного события
    }
}

// отмена обработчика событий
function RemoveEventHandler(Elem,EventName,HandlerFunc,CaptureFlag)
{
  if ( Elem.removeEventListener )
    Elem.removeEventListener(EventName,HandlerFunc,CaptureFlag);
  else
  {
    if ( !CaptureFlag ) // перехват был вообще невозможен
    {
      var EventName2='on'+EventName;
      if ( Elem.attachEvent ) // IE <=8
      {
        var StoreName="__IEHandlerF_"+EventName;
        if ( Elem[StoreName] )
        {
          // при установке обработчика была создана и запомнена обёртка - удаляем
          Elem.detachEvent(EventName2,Elem[StoreName]);
          // не сработает правильно если было установлено несколько обработчиков одного события!
          Elem[StoreName]=null;
        }
        else
        {
          // обёртки нет, пытаемся удалить хотя бы сам обработчик на всякий случай
          Elem.detachEvent(EventName2,HandlerFunc);
        }
      }
      else  // устаревшие браузеры
      {
        // удаляем обработчик только если удаляется именно тот что был ранее установлен
        if ( Elem[EventName2]==HandlerFunc )
          Elem[EventName2]=null;
      }
    }
  }
}
