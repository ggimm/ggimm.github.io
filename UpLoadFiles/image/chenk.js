// JavaScript Document
//Create by yoll

function check()
{ 
   if (document.Myform.txtUserName.value.replace(/^\s|\s$/g,'')=="")
	 {
		alert("��ϵ�˲���Ϊ�գ�������");
		document.Myform.txtUserName.focus();
		return false;
	  }
   if(document.Myform.txtTel.value.length<6 || document.Myform.txtTel.value.length>12)
       {

         alert("��������ȷ�ĵ绰������ֻ���");
         document.Myform.txtTel.focus();
         return false;	
	   }
	 else
	 {
		 var res = /^\d+$/; 
		 if(!res.test(document.Myform.txtTel.value))
		 {
			  alert("�绰�����ʽ����");
			  document.Myform.txtTel.focus();
              return false;	
		 }
	 }
	 if (document.Myform.txtProNum.value.replace(/^\s|\s$/g,'')=="")
	 {
		alert("��ѡ�����Ĳ�Ʒ�ͺţ�лл��");
		document.Myform.txtProNum.focus();
		return false;
	  }
	 if (document.Myform.txtAdd.value.replace(/^\s|\s$/g,'')=="")
	 {
		alert("����ȷ��д���ĵ�ַ���������Ǽ�ʱ�͵������У�лл��");
		document.Myform.txtAdd.focus();
		return false;
	  }
	  
}

//�ı�������
function checkLength() {  
   var maxChars =200;  
   var txtcontent=document.getElementById("txtcontent");
	 if (txtcontent.value.length > maxChars)  
	     txtcontent.value = txtcontent.value.substring(0,maxChars);  
            var curr = maxChars - txtcontent.value.length; 
         document.getElementById("ckLeft").innerHTML = curr.toString();
}