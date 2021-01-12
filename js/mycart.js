$(function () {
  console.log("ready");

  var str = "";

  $(".mycart-btn").click(function () {
    var title = $(this).data("title");
    var price = $(this).data("price");
    var img = $(this).data("img");
    console.log(title + "," + price);

    str += '<tr class="cart-item">\
                <td class="align-middle">\
                  <input type="checkbox" class="j-check">\
                </td>\
                <td class="align-middle">\
                  <a href="' + title + '.html"><img src="img/dogfood/' + img + '.jpg" alt="" ></a>\
                </td>\
                <td class="align-middle">\
                  <p>' + title + '</p>\
                </td>\
                <td class="align-middle p-num">\
                  <div class="d-flex justify-content-center align-items-center">\
                    <button class="dec">-</button>\
                    <input type="text" value="1" class="text-center itext">\
                    <button class="inc">+</button>\
                  </div>\
                </td>\
                <td class="align-middle p-price">' + price + '</td>\
                <td class="align-middle p-sum">' + price + '</td>\
                <td class="align-middle"><button class="btn btn-primary p-action">刪除</button></td>\
              </tr>';
    console.log(str);
    localStorage.shopping = str;
  })


});