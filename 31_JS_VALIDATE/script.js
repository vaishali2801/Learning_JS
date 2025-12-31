$(document).ready(()=>{
    $("#form").validate({
        rules:{
            name:{
                required:true,
                minlength:3
            },
            email:{
                required:true,
                email:true,
            },
            password:{
                required:true,
                minlength:6,
            }
        },
        message:{
            name:{
                required:"name required",
                minlength:"minimum 2 character is required",
            },
            email:{
                required:"email is required",
                email:"invalid email",
            },
            password:{
                required:"password is required",
                minlength:"password must be atleast 6 character",
            }
        }
    })
})