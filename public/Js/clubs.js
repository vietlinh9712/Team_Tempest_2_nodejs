function translateImgUp() {
    const frameDisplay = $(".frame-display-photo");

    frameDisplay.bind("mouseover",function () {
        console.log(1);
        $(this).children(".img-hover").css(
            {
                "transform":"translateY(-250.52px)",
                "transition":"all 500ms"
            })
    })

    frameDisplay.bind("mouseleave",function () {
        $(this).children(".img-hover").css(
            {
                "transform":"none",
            })
    })
}

translateImgUp();

function displayContentWhenClickSeeMore() {
    $('.opaciti-content > a').bind("click",function () {
        $(this).parent(".opaciti-content").css({
            "transform":"translateY(200px)",
            "transition":"all 300ms",
            "background-image":"linear-gradient(to top, rgba(210, 210, 210), rgba(203, 202, 202), rgba(215, 214, 214), rgba(246, 244, 244));"
        });
        $(this).parent(".opaciti-content").siblings(".content-in-clubs").css("height","170px");
    })
}

displayContentWhenClickSeeMore();


function displayPlaceWhenSelectPlace() {
    const city = $("#select-city");
    let currentCity;
    let currentDistrict;
    let selectCurrentDistrict;
    city.bind("change",function () {
        currentCity = $(this).val();
        $(".wrap-all-place").each(function () {
            if ($(this).attr('id') === currentCity) {
                $(this).css("display", "block");
            } else {
                $(this).css("display", "none");
            }
            $(".wrap-all-place").children().each(function(){
                $(this).css("display", "block");
            })
        });
        $(".select-local-of-district").each(function () {
            $(this).css("display", "none")
            if (currentCity === "") {
                selectCurrentDistrict = $('#select-district');
            }
            if (currentCity === "hanoi") {
                selectCurrentDistrict = $('#select-district-hanoi');
            }
            if (currentCity === "hochiminh") {
                selectCurrentDistrict = $('#select-district-hcm');
            }
            if (currentCity === "danang") {
                selectCurrentDistrict = $('#select-district-danang');
            }
            if (currentCity === "binhduong") {
                selectCurrentDistrict = $('#select-district-binhduong');
            }
            if (currentCity === "bienhoa") {
                selectCurrentDistrict = $('#select-district-bienhoa');
            }
            if (currentCity === "nhatrang") {
                selectCurrentDistrict = $('#select-district-nhatrang');
            }
            selectCurrentDistrict.css("display", "block");
        });

        selectCurrentDistrict.bind("change", function () {
            currentDistrict = $(this).val();
            $(".wrap-all-place").children().each(function () {
                if ($(this).attr('id') === currentDistrict) {
                    $(this).css("display", "block");
                }else {
                    $(this).css("display", "none");
                }
            })
        })
    })
}

displayPlaceWhenSelectPlace();