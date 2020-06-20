<template>
    <div   class ="container-fluid h-100">
        <div   class ="row h-100">
            <div   class ="col-12 col-md-10 scroll-page">
                <div   class ="row d-flex justify-content-center">

                    <HeaderPage />

                    <!-- Form Contact -->
                    <form   @submit.prevent="sendEmail"
                                     class ="col-10 text-center contact-form" 
                                      role ="form"
                                        id ="contact-form" >

                        <div   class ="row">

                            <div   class ="col-lg-1 col-xl-2"></div>

                            <div   class ="col-12 col-sm-6 col-md-6 col-lg-5 col-xl-4 form-group">

                                <label   for ="exampleInputName">
                                    Nom :
                                </label>
                                
                                <input   class ="form-control"
                                          type ="text" 
                                            id ="exampleInputName"
                                          name ="user_name"
                                         value ="Thomas" >
                            </div>

                            <div   class ="col-12 col-sm-6 col-md-6 col-lg-5 col-xl-4 form-group">

                                <label   for ="exampleInputEmail1">
                                    Email :
                                </label>

                                <input   class ="form-control"
                                            id ="exampleInputEmail1"
                                          type ="email"
                                          name ="user_email"
                                         value ="fabre.tomas@hotmail.fr" >
                            </div>

                            <div   class ="col-lg-1 col-xl-2"></div>
                        </div>

                        <div   class ="form-group ">

                            <textarea   name ="message">bonjour
                            </textarea>

                            <div>

                                <input   class ="form-control-filed-flex justify-content-center" 
                                          name ="contact_number"
                                          type ="hidden" >
                            </div>
                        </div>

                        <input   class ="btn btn-primary"
                                  type ="submit"
                                  value ="Send" >
                    </form>

                    <Credits />

                </div>
            </div>

            <Band />
            
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Band from "@/components/Band.vue";
import HeaderPage from "@/components/HeaderPage.vue";
import Credits from "@/components/Credits.vue";
import emailjs from "emailjs-com";
var $ = require('jquery');

export default {
    name      : "creation",
    components: {
        Band,
        HeaderPage,
        Credits
    },
    Create() {
    },
    mounted() {
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/emailjs-com@2.4.1/dist/email.min.js')
        document.head.appendChild(recaptchaScript)
            
        emailjs.init('CharliesCrea');
    },
    methods   : {
        sendEmail: (e) => {
      emailjs.sendForm('default_service', 'template_NSDuCcSJ', e.target, 'user_pdCHYvlVdWV6B7vM1zSsx')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
            /*emailjs.init('YOUR_USER_ID');
            emailjs.sendForm('contact_service', 'contact_form', this);
            /$('#valid_order').click(function () {
            var cart    = "liste"//getCart();
            var total   = "total"//getTotal();
            var name    = "fabre"//$('#name').val();
            var email   = "fabre.tomas@hotmail.fr"//$('#email').val();
            var message = "Hello Thomas"//$('#message').val();
            console.log(cart);

/*             if (!name) {
                alert('Vous avez oublié de renseigner votre nom !');
                return;
            }
            if (!email) {
                alert('Vous avez oublié de renseigner votre adresse mail !');
                return;
            }
            if (!message) {
                var message = name + " n'a pas ajouté de message";
            } 

            $.post('https://api.emailjs.com/api/v1.0/email/send', {
                name   : name,
                email  : email,
                message: message,
                cart   : cart,
                total  : total
            }, function (data, status) {
                    console.log(data, status);
                    //clearCart();
                    //refreshTable();
                    alert("Votre commande à bien été envoyée !");
            }).fail(function (error, a, b, c) {
                    console.log(error, a, b, c);
                    alert('une erreur est survenu veuillez reesayer');
            })
            var data = {
                service_id: 'default_service',
                template_id: 'YOUR_TEMPLATE_ID',
                user_id: 'YOUR_USER_ID',
                template_params: {
                    'username': 'James',
                    'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
                }
            };

                name   : name,
                email  : email,
                message: message,
                cart   : cart,
                total  : total
            $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json'
            }).done(function() {
                alert('Your mail is sent!');
            }).fail(function(error) {
                alert('Oops... ' + JSON.stringify(error));
            });*/
    }
};
</script>

<style scoped>
label {
  font-size      : 2rem;
}

@media (max-width: 1199.98px) {
  label {
    font-size    : 1.8rem;
  }
}

@media (max-width: 991.98px) {
  label {
    font-size    : 1.6rem;
  }
}

@media (max-width: 767.98px) {
  label {
    font-size    : 1.8rem;
  }
}

@media (max-width: 575.98px) {
  label {
    font-size    : 1.6rem;
  }
}
</style>