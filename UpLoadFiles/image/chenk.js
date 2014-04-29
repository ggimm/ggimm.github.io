// JavaScript Document
//Create by yoll

function check()
{ 
   if (document.Myform.txtUserName.value.replace(/^\s|\s$/g,'')=="")
	 {
		alert("联系人不能为空！请输入");
		document.Myform.txtUserName.focus();
		return false;
	  }
   if(document.Myform.txtTel.value.length<6 || document.Myform.txtTel.value.length>12)
       {

         alert("请输入正确的电话号码或手机！");
         document.Myform.txtTel.focus();
         return false;	
	   }
	 else
	 {
		 var res = /^\d+$/; 
		 if(!res.test(document.Myform.txtTel.value))
		 {
			  alert("电话号码格式错误！");
			  document.Myform.txtTel.focus();
              return false;	
		 }
	 }
	 if (document.Myform.txtProNum.value.replace(/^\s|\s$/g,'')=="")
	 {
		alert("请选择您的产品型号，谢谢！");
		document.Myform.txtProNum.focus();
		return false;
	  }
	 if (document.Myform.txtAdd.value.replace(/^\s|\s$/g,'')=="")
	 {
		alert("请正确填写您的地址，方便我们及时送到您手中，谢谢！");
		document.Myform.txtAdd.focus();
		return false;
	  }
	  
}

//文本框限制
function checkLength() {  
   var maxChars =200;  
   var txtcontent=document.getElementById("txtcontent");
	 if (txtcontent.value.length > maxChars)  
	     txtcontent.value = txtcontent.value.substring(0,maxChars);  
            var curr = maxChars - txtcontent.value.length; 
         document.getElementById("ckLeft").innerHTML = curr.toString();
}