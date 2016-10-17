// округление до произвольного модуля
function RoundMod(N,M)
{
    return Math.round(N/M)*M;
}

// получение целого случайного числа в заданном диапазоне
function RandomDiap(N,M)
{
    return Math.floor(Math.random()*(M-N+1))+N;
}
