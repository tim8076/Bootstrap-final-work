

;(function(){
     // 首頁卡片愛心切換
     function heartClick() {
          $('.heart').on('click', function (e) {
               e.preventDefault();
               $(this).find('a').toggleClass('active');
          })
     }
     heartClick();

     //modal 帶入文字

     $('.cart-price a').on('click',function(e){        
          e.preventDefault();
          let title = $(this).parent('.cart-price').siblings('.cart-info').find('.cart-name .js-title').text();
          let price = $(this).siblings('span').children('.js-total').text();
          let imgURL = $(this).parent('.cart-price').siblings('.cart-info').find('.cart-img').attr('style');


          $('.modal-title').text('確定刪除' + ' '+ title);
          $('.modal-text .title').text(title);
          $('.modal-text .price').text(price);
          $('.modal-body .w-25').html(`
            <div class="bg-cover me-5" style="${imgURL} height:80px;"></div> `);
         
     })

     //購物車價錢小計    
     $('.cart .input-group button').on('click',countPrice);

     function countPrice(e){
          e.preventDefault();

          // 商品數量更改
          let num = parseInt($(this).siblings('input').val()) ;

          if ($(this).hasClass('btn-minus')){
               num = num - 1;
          } else if($(this).hasClass('btn-plus')){
               num = num + 1;
          }        
          $(this).siblings('input').val(num);
         
          //更改價錢
          let itemPrice = parseInt($(this).parent().siblings('.cart-name').find('.js-price').text());
          let subtotal = itemPrice * num + '元';
          $(this).parents('.cart-info').siblings('.cart-price').find('.js-total').text(subtotal);
          
          //更改總價
          let subPrices = document.querySelectorAll('.js-total');
          let finalprice = 0;
          subPrices.forEach(function(price){
               let subprice = parseInt(price.textContent);
               finalprice = finalprice + subprice;
          })
          finalprice = finalprice + 200; //加運費
          
          $('.final-subtotal').text('NT$' +finalprice);
          $('.final-total').text('NT$'+ finalprice);
          
     }
})();

