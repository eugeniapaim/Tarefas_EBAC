$(document).ready( function() {
    $('#sim').click(function () {
        $('.cadastro').hide();
        $('form').hide();
        $('form').show();
    })

    $('#tel').mask('(00)00000-0000', {placeholder: '(00)00000-0000'})
    $('#cpf').mask('000-000-000-00',{placeholder: '000-000-000-00'}) 
    $('#cep').mask('00000-000', {placeholder: '00000-000'})


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            tel: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            CPF: {
                required: true
            },
            address: {
                required: true
            },
            CEP: {
                required: true
            }
        },
        submitHandler: function(form) {
            alert('Você foi cadastrado com sucesso!');
            form.submit();
        },
        invalidHandler: function(evento, validador) {
            let campoincorreto = validador.numberOfInvalids();
            console.log(campoincorreto)
            if (campoincorreto) {
                alert(`Existem ${campoincorreto} campos incorretos!`);
            }
        }

    })


})