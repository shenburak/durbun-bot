$("#getir").click(function (e) {
    e.preventDefault()
    $("#getir").attr("disabled", true)
    $.post("/api/getir", {
        anaLink: $("#ana-link").val(),
        isim: $("#isim").val(),
        resim: $("#resim").val(),
        link: $("#link").val(),
        eskiFiyat: $("#eski-fiyat").val(),
        yeniFiyat: $("#yeni-fiyat").val()
    });
})