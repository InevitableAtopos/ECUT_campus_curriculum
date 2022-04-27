function check(){
    if (email.value.length==0) {
        alert('用户名不能为空！');
        return false;
    }
    else if (!email.value.match(/^[a-zA-Z][a-zA-Z0-9_]{5,17}/)){
        alert("用户名由6～18个字符组成，可使用字母、数字、下划线，需要以字母开头。");
        return false;
    }
    else if (pwd.value.length==0) {
        alert('密码不能为空！');
        return false;
    }
    else if(!pwd.value.match(/[a-zA-Z]+/) || !pwd.value.match(/[0-9]+/) || !repwd.value.match(/[a-zA-Z]+/) || !repwd.value.match(/[0-9]+/)){
        alert('密码由8-16个字符组成，需包含字母和数字。');
        return false;
    }
    else if(pwd.value!=repwd.value){
        alert('两次输入的密码不一致，请重新输入！');
        return false;
    }
    else{
        alert('登录成功~');
        return true;
    }
}
 




