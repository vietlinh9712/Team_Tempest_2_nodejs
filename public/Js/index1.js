

$(".wrap-link-service>a").bind("mouseenter",function () {
    $(this).children(".background-red").css("display","block");
    $(this).children(".wrap-img").css({"transform":"scale(1.1)","transition":"all 500ms"});
});

$(".wrap-link-service>a").bind("mouseleave",function () {
    $(this).children(".background-red").css("display","none");
    $(this).children(".wrap-img").css({"transform":"none","transition":"all 500ms"});
});

$(".override-img").bind("mouseenter",function () {
    $(this).children(".override-img>h2").css("color","black");
});

$(".override-img").bind("mouseleave",function () {
    $(this).children(".override-img>h2").css("color","white");
});