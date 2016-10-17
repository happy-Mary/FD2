// Функция для получения реального имени класса объекта
function GetClassName(Obj) 
{ 
    if ( Obj.constructor && Obj.constructor.name ) 
        return Obj.constructor.name; 
    var C=Object.prototype.toString.apply(Obj); 
    return C.substring(8,C.length-1); 
}