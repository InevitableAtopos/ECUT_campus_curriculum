

//轮转图
var int=self.setInterval("change()",2*1000);
var time=self.setInterval("clock()",3*1000);
var i=1;
function clock(){
	i=i+1;
	if(i==5){
		i=1;
	}
}
function change(){
	var a=document.getElementById("rotate_a1");
	a.style.marginLeft=(1-i)*850+"px";
}


 //得到时间并写入div
function getDate(){
	//获取当前时间
	var date = new Date();
	//格式化为本地时间格式
	var date1 = date.toLocaleString();
	//获取div
	var div1 = document.getElementById("times");
	//将时间写入div
	div1.innerHTML = date1;
}
//使用定时器每秒向div写入当前时间
setInterval("getDate()",1000);



function check(){
    if (search.value.length==0) {
        return false;
    }
    else{
        alert('搜索成功~');
        return true;
    }
}

function user_center(){
	alert('请先登录~');
	return true;
}