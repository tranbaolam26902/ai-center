const productsInfo = [
    {
        'img': './assets/img/courseware/jimu/astrobot.png',
        'name': 'Astrobot',
        'desc': 'Có thể tạo ra ba phiên bản robot chỉ với một bộ Astrobot. Hệ thống khối xây dựng, tương tác này giúp sự sáng tạo phát triển. Bộ AstroBot có bao gồm đủ mọi chi tiết cần thiết để tạo ra AstroBot, Rover, Astron hoặc thậm chí là tác phẩm của riêng bạn. Lập trình và mã hóa các robot này để khám phá, di chuyển và hơn thế nữa với năm servo robot mượt mà, hai mắt LED, loa Bluetooth và cảm biến hồng ngoại. Luôn khơi gợi sự sáng tạo, hệ thống Robot JIMU thúc đẩy trẻ em khám phá robot và học STEM. Robot thông minh. Trẻ em thông minh hơn.',
        'sensor': '1 Cảm biến hồng ngoại',
        'engine': '5 Động cơ servo',
        'light': '2 Đèn LED',
        'sound': '1 Loa Bluetooth',
        'others': 'Bao gồm 387 Chi tiết mảnh ghép, Sạc và Sách hướng dẫn',
        'requirement': 'Android & IOS'
    },
    {
        'img': './assets/img/courseware/jimu/courtbot.png',
        'name': 'Courtbot',
        'desc': 'Bộ công cụ này bao gồm mọi thứ bạn cần để xây dựng ShootBot, DunkBot hoặc DumperBot. Từ bóng rổ đến bóng đá – bạn có mọi thứ chỉ với CourtBot. Với tính thể thao trong DNA của nó, Bộ công cụ CourtBot cung cấp cho bạn niềm vui bất tận, học tập và cạnh tranh robot với bạn bè.',
        'sensor': '1 Cảm biến sóng siêu âm',
        'engine': '3 Động cơ servo và 2 Động cơ DC tốc độ cao',
        'control': 'Gồm 1 bộ điều khiển trung tâm',
        'others': 'Bao gồm 500 Chi tiết mảnh ghép, Sạc và Sách hướng dẫn 3 quả bóng cùng 6 thẻ mục tiêu',
        'requirement': 'Android & IOS'
    },
    {
        'img': './assets/img/courseware/jimu/scorebot.png',
        'name': 'Scorebot',
        'desc': 'Bộ công cụ này bao gồm mọi thứ bạn cần để xây dựng một robot bóng đá, có thể bắn và ghi điểm thực sự. ScoreBot được chính thức xác nhận bởi Câu lạc bộ bóng đá thành phố Manchester và được thiết kế để trở thành người bạn đồng hành chơi bóng bằng robot của bạn. ScoreBot Kit là robot bóng đá độc quyền của bạn mà tất cả đều do bạn chế tạo, lập trình và điều khiển.',
        'sensor': '1 Cảm biến sóng siêu âm',
        'engine': '1 Động cơ servo và 2 Động cơ DC tốc độ cao',
        'light': '2 Đèn LED',
        'control': 'Gồm 1 bộ điều khiển trung tâm',
        'others': 'Bao gồm 261 Chi tiết mảnh ghép, Sách hướng dẫn và các phụ kiện đi kèm theo',
    },
    {
        'img': './assets/img/courseware/jimu/unicorn.png',
        'name': 'Unicorn',
        'desc': 'Mang điều kỳ diệu của người máy về nhà với Series Thần thoại: Bộ UnicornBot. Bộ UnicornBot có thể xây dựng, có thể mã hóa này đi kèm với mọi thứ cần thiết để xây dựng và lập trình kỳ lân tuyệt đẹp của riêng bạn. Kích hoạt cảm biến màu sắc và các Servos chuyển động mượt mà để làm cho UnicornBot lái xe, nhảy múa, vui chơi và hơn thế nữa.<br><br>Trẻ em thậm chí có thể lập trình sừng đèn LED rực rỡ với nhiều lựa chọn màu sắc tùy chỉnh! UnicornBot là phần giới thiệu hoàn hảo về lập trình và lập trình cho trẻ em yêu thích các sinh vật thần thoại. Luôn khơi dậy sự sáng tạo, hệ thống Robot JIMU thúc đẩy trẻ em khám phá robot và học STEM. Robot thông minh. Trẻ em thông minh hơn.',
        'sensor': '1 Cảm biến màu sắc',
        'engine': '2 Động cơ servo và 1 Động cơ DC',
        'control': 'Gồm 1 bộ điều khiển trung tâm',
        'others': 'Bao gồm 440 Chi tiết mảnh ghép, Sách hướng dẫn và các phụ kiện đi kèm theo',
        'requirement': 'Android & IOS'
    },
    {
        'img': './assets/img/courseware/jimu/warriorbot.png',
        'name': 'Warriorbot',
        'desc': 'WarriorBot là một robot chiến đấu thông minh với hệ thống học lập trình và xây dựng theo cấp độ, cung cấp cho người dùng sự hiểu biết chuyên sâu về khoa học, toán học, vật lý, lập trình, v.v. thông qua các chế độ chơi hấp dẫn và các tính năng thông minh.<br><br>Học sinh học từ sách hướng dẫn giảng dạy chi tiết ＆ video, làm cho quá trình xây dựng và viết mã trở nên dễ hiểu và đủ chỗ cho người dùng sáng tạo với các phát minh của họ.',
        'sensor': '1 Cảm biến hồng ngoại',
        'engine': '4 Động cơ servo và 2 Động cơ DC',
        'control': 'Gồm 1 bộ điều khiển trung tâm',
        'others': 'Bao gồm 700+ Chi tiết mảnh ghép,Sách hướng dẫn và các phụ kiện đi kèm theo',
        'requirement': 'Android & IOS'
    },
];
function UpdateProductSpecification(currentTabID) {
    let productSpecificationHTML = ``;
    if (productsInfo[currentTabID].sensor) {
        productSpecificationHTML += `
            <p>
                <span class="fw-bold">Cảm biến: </span> ${productsInfo[currentTabID].sensor}
            </p>
        `;
    }
    if (productsInfo[currentTabID].engine) {
        productSpecificationHTML += `
            <p>
                <span class="fw-bold">Động cơ: </span> ${productsInfo[currentTabID].engine}
            </p>
        `;
    }
    if (productsInfo[currentTabID].light) {
        productSpecificationHTML += `
            <p>
                <span class="fw-bold">Ánh sáng: </span> ${productsInfo[currentTabID].light}
            </p>
        `;
    }
    if (productsInfo[currentTabID].sound) {
        productSpecificationHTML += `
            <p>
                <span class="fw-bold">Âm thanh: </span> ${productsInfo[currentTabID].sound}
            </p>
        `;
    }
    if (productsInfo[currentTabID].control) {
        productSpecificationHTML += `
            <p>
                <span class="fw-bold">Điều khiển: </span> ${productsInfo[currentTabID].control}
            </p>
        `;
    }
    if (productsInfo[currentTabID].others) {
        productSpecificationHTML += `
            <p>
                <span class="fw-bold">Các chi tiết khác: </span> ${productsInfo[currentTabID].others}
            </p>
        `;
    }
    if (productsInfo[currentTabID].requirement) {
        productSpecificationHTML += `
            <p>
                <span class="fw-bold">Các thiết bị điều khiển yêu cầu: </span> ${productsInfo[currentTabID].requirement}
            </p>
        `;
    }
    specification.innerHTML = productSpecificationHTML;
}