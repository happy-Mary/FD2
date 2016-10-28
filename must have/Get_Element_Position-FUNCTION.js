// получение координат элемента относительно верхнего левого угла страницы
// (возвращает верные результаты только для статически позиционированных элементов,
// не имеющих позиционированных предков)
function GetElementPos(El)
{
    var X=0;
    var Y=0;
    while ( El )
    {
        X+=El.offsetLeft;
        Y+=El.offsetTop;
        El=El.offsetParent;
    }
    return {left:X, top:Y};
}
