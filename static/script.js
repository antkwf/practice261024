$("._inputEmail").on("input",function (){
    if($(this).val()==="abc@gmail.com")
        $(".hideDiv").prop("hidden",false);
    else
        $(".hideDiv").prop("hidden",true);

})