$(document).ready(function () {
    $('#btnAction').click(function (e) {
        let name_msg     = $('#name_msg').val();
        let validate     = $('#validate').val();
        let validate_ref = $('#validate_ref').val();
        let insert       = $('#insert').val();
        let update       = $('#update').val();
        let comment      = $('#comment').val();

        let arr, json;

        arr = {
            name_msg    : name_msg,
            validate    : validate,
            validate_ref: validate_ref,
            insert      : insert,
            update      : update,
            comment     : comment
        };

        json = JSON.stringify(arr);

        $('#return_json').val(json);

        e.preventDefault();
    });

    $('#btnReset').click(function(){
        document.getElementById("form").reset();
        $('#return_json').html('');
    });

    $('#btnCopy').click(function(e){
        $('#return_json').select();

        let copiar = document.execCommand('copy');

        e.preventDefault();
    });
});