// получение целевого элемента события
// EO - объект события
function GetEventElement(EO)
{
  if ( window.event && window.event.srcElement )
    return window.event.srcElement;

  if ( EO.target )
    return EO.target;

  return null;
}

// остановка распространения события
// EO - объект события
function StopPropagation(EO)
{
  if ( EO.stopPropagation )
    EO.stopPropagation();
  else
    EO.cancelBubble=true;
}

// отмена обработки события по умолчанию
// EO - объект события
function PreventDefault(EO)
{
  if ( EO.preventDefault )
      EO.preventDefault(); 
  else
      EO.returnValue=false;
}

// получение нажатой кнопки мыши
// EO - объект события
function GetMouseWhich(EO)
{
  if ( EO.which ) return EO.which;
  if ( EO.button&1 ) return 1;
  if ( EO.button&4 ) return 2;
  if ( EO.button&2 ) return 3;
  return 0;
}

// получение нажатого на клавиатуре символа
// EO - объект события
function GetKeyboardChar(EO)
{
  if ( EO.which==null )   // IE
  {
    if ( EO.keyCode<32) return null; // управляющая клавиша
    return String.fromCharCode(EO.keyCode); // печатный символ
  }
  if ( EO.which!=0 && EO.charCode!=0 )   // остальные браузеры
  {
    if ( EO.which<32 ) return null; // управляющая клавиша
    return String.fromCharCode(EO.which); // печатный символ
  }
  return null; // управляющая клавиша
}
