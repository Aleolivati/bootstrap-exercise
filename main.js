$(document).ready(function () {

    $('#phone').mask('(00) 0000-00009', {
        placeholder: '(00) 0000-0000'
    })

    $('#phone').on('keydown', function() {
        const validatePhone = $('#phone').val().length

        if (validatePhone>=14) {
            $('#phone').mask('(00) 00000-0000', {
                placeholder: '(00) 00000-0000'
            })
        } else {
            $('#phone').mask('(00) 0000-0000', {
                placeholder: '(00) 0000-0000'
            })
        }
    })

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email:true
            },
            phone: {
                required: true
            },
            message: {
                required: true
            },
            agree: {
                required: true
            }
        },
        messages: {
            name: 'Please insert your full name',
            email: 'Please insert a valid e-mail',
            phone: 'Please insert a valid phone number',
            message: 'Please! Leave your message here! We really want to hear from you!',
            agree: 'You NEED to check this box!'
        },
        submitHandler: function(form) {
            const modalContact = new bootstrap.Modal('#modal-contact-send')
            
            modalContact.show() ;

            $('#name').val('') ;
            $('#email').val('') ;
            $('#phone').val('') ;
            $('#message').val('') ;
            $('#agree').prop('checked', false) ;
        }
    })
})
