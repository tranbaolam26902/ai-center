const productsInfo = [
    {
        'img': './assets/img/courseware/ukit/ukit-ai-fantasy-zoo.png',
        'name': 'AI Fantasy Zoo',
        'desc': 'Bộ học cụ AI Fantasy Zoo bao gồm 18 chủ đề liên quan đến thế giới động vật. Chương trình học này áp dụng phương pháp làm việc nhóm để giúp học viên khám phá các kỹ năng xây dựng các mô hình động vật khác nhau, có khả năng lập trình để mô phỏng hành vi và đặc tính của các loài động vật. Ngoài ra, chương trình còn giúp học sinh phát triển thêm khả năng giao tiếp và sáng tạo.',
        'sensor': '1 Cảm biến hồng ngoại, 1 Cảm ứng chạm',
        'engine': '4 Động cơ servo',
        'light': '2 Đèn LED',
        'sound': '1 Loa Bluetooth',
        'control': 'Gồm 1 bộ điều khiển trung tâm',
        'others': 'Bao gồm hơn 650 Chi tiết mảnh ghép, Sách hướng dẫn và các phụ kiện đi kèm theo'
    },
    {
        'img': './assets/img/courseware/ukit/ukit-ai-smart-life.png',
        'name': 'AI Smart Life',
        'desc': 'Bộ học cụ AI Smart Life bao gồm 16 chủ đề liên quan đến nhà cửa và đời sống thông minh. Chương trình học này sẽ giúp học sinh có thể quan sát, hiểu được nguyên lý hoạt động và cách ứng dụng nhiều loại cảm biến thông dụng khác nhau, bao gồm cảm biến âm thanh, cảm biến hồng ngoại, cảm biến nhiệt độ và độ ẩm, cảm biến cảm ứng, cảm biến khoảng cách hồng ngoại, v.v …<br><br>Với hình thức hợp tác nhóm, học sinh sẽ được học sách ứng dụng toàn bộ về những khái niệm để xây dựng mô hình và hiểu chức năng của các mô hình đó. Các em sẽ thực hiện nhiều dự án thiết thực như thùng rác thông minh, khu vườn thông minh, giá treo quần áo thông minh, xe quét rác thông minh và diễn giải được những thay đổi do khoa học và công nghệ tác động đến cuộc sống. Điều này sẽ giúp học sinh duy trì và phát triển sự tò mò và nhiệt tình đối với trí tuệ nhân tạo, trau dồi khả năng sáng tạo, kỹ năng hợp tác và giao tiếp của bản thân.',
        'sensor': '1 Cảm biến hồng ngoại,2 Cảm ứng chạm,1 Cảm biến siêu âm,1 Cảm biến nhiệt độ và độ ẩm,2 Cảm biến ánh sáng và 1 cảm biến âm thanh',
        'engine': '4 Động cơ servo và 1 Động cơ DC',
        'light': '2 Đèn LED',
        'sound': '1 Loa Bluetooth',
        'control': 'Gồm 1 bộ điều khiển trung tâm',
        'others': 'Bao gồm hơn 1000 Chi tiết mảnh ghép, Sách hướng dẫn và các phụ kiện đi kèm theo',
        'requirement': 'Android & IOS'
    },
    {
        'img': './assets/img/courseware/ukit/ukit-ai-transformer-workshop.png',
        'name': 'AI Transformer Workshop',
        'desc': 'Bộ học cụ AI Transformer Workshop hỗ trợ 17 chủ đề về đời sống xã hội. Học sinh sẽ khám phá điều kiện, quá trình và nguyên nhân của các hiện tượng bằng cách xây dựng các mô hình như chuyển đổi bảng quảng cáo, phát hiện ô nhiễm tiếng ồn, robot tấn công, đường cảnh báo. Bên cạnh đó các em sẽ đưa ra các ý tưởng nghiên cứu từ các khía cạnh khác nhau, rồi tìm cách giải quyết chúng. Điều này sẽ cải thiện tinh thần đổi mới và khả năng giải quyết vấn đề của học sinh.<br><br>Học sinh sử dụng cảm biến âm thanh, cảm biến siêu âm, cảm biến ánh sáng, cảm biến áp suất, cảm biến khoảng cách hồng ngoại, servo, đèn LED và các linh kiện khác để hiện thực hóa những ý tưởng đơn giản thành mô hình thực tế. Cuối cùng, học sinh sẽ sử dụng phương pháp lập trình được học để đạt được nhiều chức năng hơn và phục vụ cho cuộc sống thực tế.',
        'sensor': '2 Cảm biến hồng ngoại,2 Cảm ứng chạm,1 Cảm biến siêu âm,1 Cảm biến ánh sáng và 1 cảm biến âm thanh',
        'engine': '16 Động cơ servo',
        'light': '2 Đèn LED',
        'control': 'Gồm 1 bộ điều khiển trung tâm',
        'others': 'Bao gồm hơn 950 Chi tiết mảnh ghép, Bảng phát triển khám phá, Sách hướng dẫn và các phụ kiện đi kèm theo',
    },
    {
        'img': './assets/img/courseware/ukit/ukit-ai-magic-world.png',
        'name': 'AI Magic World',
        'desc': 'Bộ học cụ AI Magic World hỗ trợ 14 chủ đề liên quan đến ứng dụng uCode. Học sinh sẽ học cách sử dụng uCode để thiết kế hoạt hình và trò chơi, thông qua đó học sinh sẽ học cách kết nối, lập trình và gọi phần cứng thông minh như khám phá bảng phát triển nguồn mở. Trong quá trình viết mã, học sinh có thể trải nghiệm các loại cảm biến và phân tích dữ liệu cũng như cảm nhận được sức hấp dẫn của thuật toán và phương trình.<br><br>Chương trình AI Magic World cũng sẽ cải thiện khả năng sáng tạo và sở thích tự làm của học sinh cũng như khả năng thực hành và giải quyết các vấn đề trong cuộc sống và cuối cùng là tăng sở thích của các em đối với Trí tuệ nhân tạo.',
        'sensor': '2 Cảm biến hồng ngoại,2 Cảm ứng chạm,1 Cảm biến siêu âm,1 Cảm biến ánh sáng và 1 cảm biến âm thanh',
        'engine': '4 Động cơ servo',
        'light': '2 Đèn LED',
        'control': 'Gồm 1 bộ điều khiển trung tâm',
        'others': 'Bao gồm hơn 650 Chi tiết mảnh ghép, Bảng phát triển khám phá, Sách hướng dẫn và các phụ kiện đi kèm theo',
    },
    {
        'img': './assets/img/courseware/ukit/ukit-ai-super-assistant.png',
        'name': 'AI Super Assistant',
        'desc': 'Bộ học cụ AI Super Assistant Accessory Kit hỗ trợ 15 chủ đề để dạy về Liongineer và Alpha Mini. Chương trình dựa trên robot hình người Alpha Mini, kết hợp với lập trình đồ họa (uCode) và phần cứng nguồn mở để phát triển. Theo tiêu chuẩn của chương trình khoa học của trường trung học, học sinh sẽ có được những kiến ​​thức như khoa học, công nghệ, kỹ thuật, nghệ thuật và toán học [STEM] được tích hợp và hướng dẫn bởi phương pháp học tập và giải quyết vấn đề theo dự án.<br><br>Bên cạnh đó, các hoạt động học tập như quan sát, điều tra, nghiên cứu, thí nghiệm và thử nghiệm sẽ được thực hiện. Bằng cách học sử dụng các công cụ lập trình đồ họa, học sinh có thể học cách sử dụng thị giác, giọng nói và các chức năng khác của robot hình người, sau đó các em sẽ học cách lập trình robot hình người, trải nghiệm sự quyến rũ của Trí tuệ nhân tạo [AI] trong lập trình và kích thích sự hứng thú học kiến ​​thức khoa học. Bằng các ứng dụng phần cứng, bộ truyền động và cảm biến nguồn mở, xây dựng mô hình thiết bị thông minh, tạo hoạt ảnh tương tác thực ảo, khám phá những bí ẩn của đời sống khoa học và công nghệ hiện đại, kỹ năng khoa học của học sinh sẽ được cải thiện toàn diện.',
        'sensor': '2 Cảm biến hồng ngoại,2 Cảm ứng chạm,1 Cảm biến ánh sáng và 1 cảm biến âm thanh',
        'engine': '4 Động cơ servo',
        'light': '2 Đèn LED',
        'control': 'Gồm 1 bộ điều khiển trung tâm',
        'others': 'Bao gồm hơn 750 Chi tiết mảnh ghép, Bảng phát triển khám phá, Sách hướng dẫn và các phụ kiện đi kèm theo',
    },
    {
        'img': './assets/img/courseware/ukit/ukit-ai-super-engineer.png',
        'name': 'AI Super Engineer',
        'desc': 'Bộ học cụ AI SUPER ENGINEER hỗ trợ 16 chủ đề áp dụng Trí tuệ nhân tạo [AI] trong nông nghiệp và công nghiệp . Học sinh khám phá và phát triển AI một cách độc lập. Các em học cách sử dụng các phương pháp khoa học để thực hiện nghiên cứu và chủ động để hiểu và áp dụng kiến thức và giải quyết vấn đề. Thông qua các hoạt động của nông nghiệp, sản xuất công nghiệp, học sinh trong vai kỹ sư sẽ tìm hiểu nguyên lý hoạt động của các thiết bị thông minh từ cuộc sống hàng ngày, chẳng hạn như nông nghiệp, công nghiệp, robot, v.v. chương trình tối ưu hóa, thiết kế và chuyển đổi Nhà kính, Cánh tay robot, Máy phân loại tự động và các sản phẩm khác.<br><br>Trong quá trình thực hành dự án, học sinh sẽ nắm được các kiến thức vật lý như quang phổ, ba màu cơ bản, nguyên lý chuyển động quay, … đồng thời trau dồi khả năng tư duy logic. Hơn nữa, khả năng thực hành, khả năng thực hành sáng tạo, cũng như sở thích học tập và ham muốn khám phá trí tuệ nhân tạo sẽ được thúc đẩy.',
        'sensor': '1 Cảm biến siêu âm,1 Cảm ứng chạm,1 Cảm biến ánh sáng, 1 Cảm biến màu,1 Cảm biến nhiệt độ và độ ẩm và 1 Cảm biến thang độ xám',
        'engine': '16 Động cơ servo và 1 Động cơ DC',
        'light': '1 Đèn LED',
        'sound': '1 Loa Bluetooth',
        'others': 'Bao gồm hơn 1300 Chi tiết mảnh ghép, Bảng phát triển khám phá, Sách hướng dẫn và các phụ kiện đi kèm theo',
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