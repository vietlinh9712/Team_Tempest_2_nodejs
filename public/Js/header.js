$(".hd-menu").bind("mouseenter",function () {
    $(this).children(".Dropdown").hide();
    $(this).children(".Dropdown").slideDown();
})
$(".hd-menu").bind("mouseleave",function () {
    $(".Dropdown").hide();
})