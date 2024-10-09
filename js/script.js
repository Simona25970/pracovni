window.onload = () => {
    document.querySelectorAll(".resizable").forEach((element) => {
        element.onclick = () => {
            element.classList.toggle("bigger");
        };
    });

    const up = document.querySelector(".up");
    up.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });
    const hideUp = () => {
        if (window.scrollY < 500) {
            up.classList.add("hidden");
        } else {
            up.classList.remove("hidden");

        }
    };
    hideUp();
    window.onscroll = () => {
        hideUp();
    };

    $(document).ready(() => {
        $(".more").each((i, more) => {
            $(more).click(() => {
                const show = $(more).attr("data-show");
                $(show).toggleClass("hidden");
                $(more).text(
                    $(show).hasClass("hidden") ? "Zobrazit více" : "Zobrazit méně"
                );
            });
        });
    });
};
/*const email = document.querySelector("#email");
const validateEmail = () => {
    const email = document.querySelector("#email");
    if (email.value.includes("@")) {
        email.style.border = "2px solid green";
        return true;
    } else {
        email.style.border = "2px solid red";
        return false;
    }
};
email.onblur = validateEmail;
email.onfocus = () => {
    email.style.border = "1px solid #4c4c4c";
};
document.querySelector("form").onsubmit = (event) => {
    if (!validateEmail()) {
        event.preventDefault();
    }
};*/




(function ($) {
    $(function () {
        // sem přijde naše jQuery 
        /* Scroll buttons to sections */
        $(".jq--scroll-button-first").click(function () {
            $("html, body").animate({ scrollTop: $(".jq--cooperation").offset().top }, 100);
        });

        $(".jq--scroll-button-second").click(function () {
            $("html, body").animate({ scrollTop: $(".jq--eshop").offset().top }, 300);
        });

        $(".jq--scroll-button-third").click(function () {
            $("html, body").animate({ scrollTop: $(".jq--products").offset().top }, 300);
        });
    });

    /* Mobile navigation */
    $(".jq--nav-icon").click(function () {
        $(".mobile-nav-back").slideToggle();
        $("nav ul").fadeToggle();
    });

    /* Change hamburger to cross vice versa */

    $(".jq--image-hamburger").click(function () {

        if ($(".jq--image-hamburger").attr("src") == "img/hamburgerMenu.png") {
            $($(".jq--image-hamburger").attr("src", "img/crossMenu.png"));
        }
        else {
            $($(".jq--image-hamburger").attr("src", "img/hamburgerMenu.png"));
        }
    });

})(jQuery);





