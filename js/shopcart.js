$(function () {
    console.log("ready!");
    console.log($(".checkall").prop("checked"));

    if (localStorage.shopping) {
        var str = localStorage.shopping;
    } else {
        str = "";
    }
    $("#tbody").html(str);

    getcnt();
    
    function getcnt() {
        //get shopcart item
        var cnt = 0;
        $(".cart-item").each(function () {
            cnt++;
        })
        $(".mycnt").text(cnt);
    }

    $(".p-action").click(function () {
        //delete item
        $(this).parents(".cart-item").remove();
        getSum();
        getcnt();

        mybody = $("#tbody").html();
        localStorage.shopping = mybody;
    })

    //全選&全取消選取
    $(".checkall").change(function () {
        $(".j-check").prop("checked", $(this).prop("checked"));

        getSum();
    });

    //只要有checkbox沒選到,則取消全選checkall
    $(".j-check").change(function () {
        if ($(".j-check:checked").length == $(".j-check").length) {
            $(".checkall").prop("checked", true);

            console.log($(".checkall").prop("checked"));
        } else {
            $(".checkall").prop("checked", false);

            console.log($(".checkall").prop("checked"));
        }

        getSum();
    });

    $(".itext").change(function () {
        var n = $(this).val();

        if (n < 1) {
            $(this).val(1);
            n = 1;
        }

        var p = $(this).parents(".p-num").siblings(".p-price").html();
        var price = (p * n).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").text(price);

        getSum();

    })

    $(".inc").click(function () {
        //按鈕+ ,增加數量
        var n = $(this).siblings(".itext").val();
        n++;
        $(this).siblings(".itext").val(n);

        var p = $(this).parents(".p-num").siblings(".p-price").html();
        var price = (p * n).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").text(price);

        getSum();
    })

    $(".dec").click(function () {
        //按鈕- ,增加數量
        var n = $(this).siblings(".itext").val();

        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings(".itext").val(n);

        var p = $(this).parents(".p-num").siblings(".p-price").html();
        var price = (p * n).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").text(price);

        getSum();
    })

    function getSum() {
        //已經選了幾件商品
        var cnt = 0;
        var item = $(".j-check:checked").parents(".cart-item");
        item.find(".itext").each(function (index, element) {
            cnt += parseInt($(element).val());
        });

        $(".amt").text(cnt);

        //總價
        var cnt2 = 0;
        var item = $(".j-check:checked").parents(".cart-item");
        item.find(".p-sum").each(function (index, element) {
            cnt2 += parseFloat($(element).text());
        });

        $(".amt2").text(cnt2);
    }
})