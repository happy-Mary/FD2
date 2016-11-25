function DetectFlash()
{
    var flash=((typeof navigator.plugins!="undefined") && (typeof navigator.plugins["Shockwave Flash"]=="object"));
    if ( !flash )
    {
        try
        {
            flash=(window.ActiveXObject && (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) != false)
        }
        catch(err)
        {
            flash=false;
        }
    }
    return flash;
}

console.log( 'Поддержка flash: ' + DetectFlash() );