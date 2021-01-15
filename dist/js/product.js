;(function(){

    // 首頁卡片愛心切換
    function heartClick() {
        $('.heart').on('click', function (e) {
            e.preventDefault();
            $(this).find('a').toggleClass('active');
        })
    }
    heartClick();

    // 線上書坊頁面 產品切換

    const data = [
        {
            type: "中外文學",
            name: "1Q84 Book 1-3",
            price: "NT$600",
            img: "../image/product/chinese/photo-1.jpg"
        },
        {
            type: "中外文學",
            name: "聽風的歌",
            price: "NT$450",
            img: "../image/product/chinese/photo-2.jpg"
        },
        {
            type: "中外文學",
            name: "藍屋子",
            price: "NT$550",
            img: "../image/product/chinese/photo-3.jpg"
        },
        {
            type: "中外文學",
            name: "色, 戒",
            price: "NT$500",
            img: "../image/product/chinese/photo-4.jpg"
        },
        {
            type: "中外文學",
            name: "花間讀詞",
            price: "NT$270",
            img: "../image/product/chinese/photo-5.jpg"
        },
        {
            type: "輕小說",
            name: "精靈幻想記",
            price: "NT$390",
            img: "../image/product/novel/photo-1.jpg"
        },
        {
            type: "輕小說",
            name: "隱藏迷宮",
            price: "NT$187",
            img: "../image/product/novel/photo-2.jpg"
        },
        {
            type: "輕小說",
            name: "末日魔女",
            price: "NT$213",
            img: "../image/product/novel/photo-3.jpg"
        },
        {
            type: "電腦書籍",
            name: "LINE Bot ",
            price: "NT$213",
            img: "../image/product/computer/photo-1.jpg"
        },
        {
            type: "電腦書籍",
            name: "Python 手冊 ",
            price: "NT$470",
            img: "../image/product/computer/photo-2.jpg"
        },
        {
            type: "電腦書籍",
            name: "PhotoShop影像設計",
            price: "NT$468",
            img: "../image/product/computer/photo-3.jpg"
        },
        {
            type: "兒童親子",
            name: "怪獸媽媽",
            price: "NT$288",
            img: "../image/product/child/photo-1.jpg"
        },
        {
            type: "兒童親子",
            name: "秘密派對",
            price: "NT$150",
            img: "../image/product/child/photo-2.jpg"
        }

    ];

    const Area = document.querySelector('#product-area');

    //預設載入中文書籍頁面
    function addProduct(like) {
        let str = '';
        for (let i = 0; i < data.length; i++) {
            let type = data[i].type;
            let img = data[i].img;
            let name = data[i].name;
            let price = data[i].price;
            if (type === like) {
                str += `
            <div class="col-md-6" >
               <div class="card mb-4">
                    <div class="card-img">
                         <div class="bg-cover img" style="background-image: url(${img});"></div>
                    </div>
                    <div class="card-info">
                         <div class="row">
                              <div class="col-6 ">
                                   ${name}
                              </div>
                              <div class="col-6">
                                   ${price}
                              </div>
                         </div>
                    </div>
                    <a href="#" class="card-buy text-warm fw-bold d-block">
                         加入購物車
                    </a>
                    <div class="label">精選好書</div>
                    <div class="heart">
                         <a href="#" class="active"><i class="fa fa-heart-o " aria-hidden="true"></i></a>
                         <a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a>
                    </div>
               </div>
            </div>
            `
            }
        }
        Area.innerHTML = str;
        heartClick();
    }
    addProduct("中外文學");

    //點擊切換頁面

    const list = document.querySelectorAll('.list-group-item');

    list.forEach(function (item) {
        item.addEventListener('click', changeProduct);
    })

    function changeProduct(e) {
        e.preventDefault();
        let typeName = e.target.dataset.name;
        addProduct(typeName);
    }

})()