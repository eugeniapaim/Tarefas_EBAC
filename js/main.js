$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#campo-telefone').mask('(00)00000-0000', {
        placeholder: '(00)00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }, 
            veiculo:{
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome!'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let campoincorreto = validador.numberOfInvalids();
            console.log(campoincorreto)
            if (campoincorreto) {
                alert(`Existem ${campoincorreto} campos incorretos!`);
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeveiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeveiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)

    })
})