const urlParams = (new URL(document.location)).searchParams
const myParam = urlParams.get('id');
console.log(myParam)

const doanHan = [{
        id: 1,
        tenmonan: "Canh rong biển",
        buoclam: [{
                tenbuoc: "Bước 1:Sơ chế nguyên liệu",
                buoccuthe: " &#10003; Ngâm rong biển vào nước lạnh.</Br>Dùng 1/3 gói rong biển đủ cho 4,5 người ăn.</Br>Ngâm tầm 20 phút là được, sau đó rửa với nước.Tỏi đập nhỏ, đậu cắt ô vuống to bé tùy sở thích chị em. </Br>Thịt rửa sạch với chanh và muối, rồi thái hạt lựu kích thuocs 1.5cm x 1.5cm x 1cm",
                img: "../assets/rongbien1.jpg"
            },
            {
                tenbuoc: "Bước 2: Nấu",
                buoccuthe: " &#10003; Cho dầu mè vào chảo rồi phi thơm tỏ.</Br>Dùng 1/3 gói rong biển đủ cho 4,5 người ăn.</Br>Cho thịt vào đảo rồi cho rong biển vào đảo</Br>.Xong cho nước vào đun tầm 15 – 20 phút, nêm nếm gia vị vừa miệng rồi cho đậu vào.</Br>Đun thêm một lúc nữa rồi ai thích ăn nhiều tỏi thì cho thêm tỏi sống băm nhỏ rồi là xong.",
                img: "../assets/rongbien2.webp"

            }
        ]

    },
    {
        id: 2,
        tenmonan: "Sữa chuối",
        buoclam: [{
                tenbuoc: "Bước 1",
                buoccuthe: " &#10003; Lột vỏ 1 trái chuối rồi dùng muỗng nghiền cho thật nhuyễn.",
                img: "../assets/suachuoi1.jpg"
            },
            {
                tenbuoc: "Bước 2",
                buoccuthe: " &#10003; Cho 20g đường vào chuối đã nghiền rồi trộn đều.",
                img: "../assets/suachuoi3.jpg"
            },
            {
                tenbuoc: "Bước 3",
                buoccuthe: " &#10003; Lột nhỏ trái chuối còn lại và cắt nhỏ thành những miếng vừa ăn",
                img: "../assets/suachuoi2.jpg"
            },
            {
                tenbuoc: "Bước 4",
                buoccuthe: " &#10003; Cho tất cả chuối và 200ml sữa tươi và lắc đều. Thức uống đã sẵn sàng để thưởng thức.",
                img: "../assets/OIP.jpg"
            }
        ]

    },
    {
        id: 3,
        tenmonan: "Trà xanh Nhật Bản",
        buoclam: [{
                tenbuoc: "Bước 1.",
                buoccuthe: " &#10003; Đầu tiên, đặt ấm đun nước vào và lấy cho mình một cốc hoặc nếu bạn muốn xác thực hơn, hãy thử sử dụng chawan, một tách trà truyền thống của Nhật Bản.",
                img: "../assets/tra1.jpg"
            },
            {
                tenbuoc: "Bước 2: Nấu",
                buoccuthe: " &#10003; Một khi ấm đun sôi, chờ một hoặc hai phút để nhiệt độ của nước là khoảng 80 ° C. Nếu nước quá nóng, trà của bạn có thể trở nên quá đắng.",
                img: "../assets/tra2.jpg"
            },
            {
                tenbuoc: "Bước 3",
                buoccuthe: " &#10003; Thêm một muỗng cà phê nhỏ bột matcha vào cốc của bạn và sau đó đổ đầy khoảng 60ml nước nóng.",
                img: "../assets/tra4.jpg"
            },
            {
                tenbuoc: "Bước 4",
                buoccuthe: " &#10003; Sử dụng một chổi pha trà, hoặc dụng cụ khuấy trà, trộn bột trong với nước để không có cục u còn lại trong trà. Trộn trong một phút cho đến khi trà có nhiều bong bóng nhỏ trên bề mặt và xuất hiện hơi sủi bọt. Trà của bạn bây giờ đã sẵn sàng vì vậy hãy ngồi xuống, thư giãn và thưởng thức trà xanh của bạn, có lẽ với một chút ngọt nhật bản ở bên cạnh.",
                img: "../assets/tr3.jpg"
            }
        ]

    },
    {
        id: 4,
        tenmonan: "Mì ramen",
        buoclam: [{
                tenbuoc: " Bước 1: Chuẩn bị sườn và nước dùng",
                buoccuthe: " &#10003; Xương sườn ngắn màu nâu ở tất cả các bên.Xào hành tây, thêm tỏi, gừng và ớt đỏ, và xào cho đến khi thơm.</Br>&#10003;  Khử dầu nồi với rượu mirin. Thêm nước tương và nước dùng gà.</Br> &#10003; Trả lại sườn vào nồi. </Br>Nấu trong 1,5 đến 2 giờ hoặc cho đến khi xương sườn rất mềm.</Br>&#10003;  Cắt nhỏ xương sườn thành từng khúc.</Br>&#10003;  Nếm thử nước dùng và thêm 2 cốc nước nếu cần.",
                img: "../assets/suon1.jpg"
            },
            {
                tenbuoc: "Bước 2:Nấu mì",
                buoccuthe: " &#10003; Nấu mì ramen trong nước sôi theo hướng dẫn đóng gói. Để ráo nước và chạy dưới nước lạnh để ngừng nấu ăn.",
                img: "../assets/soimi2.jpg"
            },
            {
                tenbuoc: "Bước 3:Chuẩn bị bát mì",
                buoccuthe: " &#10003; Chia mì và sườn ngắn giữa 4 bát.",
                img: "../assets/mr3.jpg"
            },

        ]

    },
    {
        id: 5,
        tenmonan: "Cơm tấm",
        buoclam: [{
                tenbuoc: " Bước 1: Cách nấu cơm bằng nồi cơm điện.",
                buoccuthe: " &#10003; Đo 2 chén gạo và rửa dưới vòi nước lạnh.</Br>&#10003;  Chuyển gạo sạch vào nồi cơm điện của bạn.</Br>&#10003;  2 cốc nước và một nhúm muối.Đặt nồi cơm điện của bạn để bắt đầu nấu ăn",
                img: "../assets/vogao.webp"
            },
            {
                tenbuoc: " Bước 2: Làm sườn heo nướng",
                buoccuthe: " &#10003; Chuẩn bị nước ướp cho sườn lợn.</Br>&#10003; Trong một món ăn lớn trộn hành tím xắt nhỏ, hành lá, dầu annatto, nước tương, dầu hào với bột gà, đường và bột ngũ vị gia vị.</Br> &#10003; Đậy nắp sườn lợn với nước ướp và để yên trong 10 - 15 phút để hấp thụ hương vị.Làm nóng vỉ nướng của bạn ở mức trung bình và nấu sườn lợn cho đến khi chúng chuyển sang màu nâu vàng.</Br>&#10003; Cắt cà chua, dưa chuột và củ cải theo phong cách julienne",
                img: "../assets/suonheo.jpg"
            },
            {
                tenbuoc: "Bước 3: Pha nước chấm",
                buoccuthe: " &#10003; Trong một món ăn riêng biệt, trộn 4 muỗng canh nước mắm, với 6 muỗng canh nước và 3 muỗng canh đường.</Br>&#10003; Khuấy cho đến khi mọi thứ tan biến hoàn toàn.Hãy thoải mái nếm thử và điều chỉnh bất kỳ thành phần nào theo ý thích của bạn",
                img: "../assets/nuoccham.png"
            },
            {
                tenbuoc: "Bước 3: Chuẩn bị đĩa cơm",
                buoccuthe: " &#10003; Để chuẩn bị đĩa của bạn theo phong cách Việt Nam, hãy bắt đầu bằng cách phục vụ cơm.</Br>&#10003;  Đổ đầy một chén hoặc bát cơm nhỏ với gạo đã nấu chín.Ấn nhẹ vào bát.</Br>Lật ngược nó lên một tấm và nó sẽ tạo thành một mái vòm hoàn hảo.Tiếp theo, đặt thịt lợn nướng bên cạnh cơm.Đổ nước chấm vào bát nhỏ.</Br>&#10003; Trang trí đĩa với cà chua thái lát, dưa chuột hoặc củ cải.",
                img: "../assets/com.jpg"
            }
        ]

    },
    {
        id: 6,
        tenmonan: "Trà chanh đá",
        buoclam: [{
                tenbuoc: "Bước 1",
                buoccuthe: " &#10003; Để pha trà đá, thêm túi trà vào bình và trên cùng với nước lạnh. </Br>&#10003; Đậy nắp và làm lạnh qua đêm (hoặc trong ít nhất 8 giờ). </Br> &#10003; Ngày hôm sau, lọc và kết hợp với nước chanh. Làm lạnh cho đến khi sẵn sàng để phục vụ.",
                img: "../assets/tra-chanh-50428249.jpg"
            },
            {
                tenbuoc: "Bước 2",
                buoccuthe: " &#10003; Khi đã sẵn sàng để phục vụ, trên cùng với bia gừng và trang trí với lát chanh và bạc hà.",
                img: "../assets/trach.jpg"
            }
        ]

    }
]
let flag = -1;
for (let i = 0; i < doanHan.length; i++) {
    if (doanHan[i].id == myParam) {
        flag = i;
        break;
    }
}
let tenMon = document.querySelector(".tenmonan")
let buocLam = document.querySelector(".swiper_container")


tenMon.innerHTML = `<span>${doanHan[flag].tenmonan}</span>`
let contentHtml = '';
doanHan[flag].buoclam.forEach((pok, i) => {
    console.log(pok)
    if (i % 2 == 0) {
        contentHtml += `<div class="swiper_container-item">
        <div class="swiper_container-content">
            <span class="container-content-big">${pok.tenbuoc}</span>
            <p>${pok.buoccuthe}</p>

        </div>
        <div class="swiper_container-img">
            <img src="${pok.img}" alt="">
        </div>

    </div>`
    } else {
        contentHtml += `<div class="swiper_container-item">
        <div class="swiper_container-img2">
        <img src="${pok.img}" alt="">
    </div>
        <div class="swiper_container-content2">
            <span class="container-content-big">${pok.tenbuoc}</span>
            <p>${pok.buoccuthe}</p>

        </div>
       

    </div>`
    }
})
buocLam.innerHTML = contentHtml