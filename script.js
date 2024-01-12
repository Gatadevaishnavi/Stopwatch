let [hr,min,sec]=[0,0,0];
let time = document.getElementById('time');
let timer= null;
  function start()
  {
    if (timer!= null) 
    {
        clearInterval(timer);
    }
    timer = setInterval(Stopwatch,1000);
  }
  function Stop() 
  {
        clearInterval(timer); 
  }
function Reset() 
{
    [hr,min,sec]=[0,0,0];
    clearInterval(timer);
    time.innerHTML="00:00:00"
    Stop();
}   
function Stopwatch() 
{
    sec++;
    if (sec==60) 
    {
        min++;
        sec=0;
    }
    if (min==60) 
    {
        hr++;
        min=0; 
    }
        let s = sec > 10 ? sec : "0" + sec ;
        let m = min > 10 ? min : "0" + min ;
        let h = hr > 10 ? hr : "0" + hr ;

        time.innerHTML=h+":"+m+":"+s;  
}
