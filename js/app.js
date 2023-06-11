$("#bt1").click(function () {

    $.ajax({
        url: 'winter.html',
        dataType: 'html',
        success: function (data) {

            $("#content").html(data)
        },
        statusCode: {}
    })

})

