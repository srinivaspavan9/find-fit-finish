var time_limit=15;
var now=Date.parse(new Date());
var deadline=new Date(now+time_limit*60*1000);

function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
	var clock = document.getElementById(id);
	function update_clock(){
		var t = time_remaining(endtime);
        if(t.seconds<10){
         clock.innerHTML = t.minutes+':'+'0'+t.seconds;   
        }
        else{
		clock.innerHTML = t.minutes+':'+t.seconds;
        }
		if(t.total<=0){ clearInterval(timeinterval); }
		if(t.minutes==0 && t.seconds==0)
		{
			document.forms["someform"].submit();
		}
	}
	update_clock(); // run function once at first to avoid delay
	var timeinterval = setInterval(update_clock,1000);
}
run_clock('timer',deadline);