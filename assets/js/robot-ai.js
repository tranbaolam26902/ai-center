const productsInfo = [
    {
        'img': './assets/img/courseware/robot-ai/alpha-1e.png',
        'name': 'Alpha 1E',
        'desc': 'Tiếp nối thành công của Dòng Alpha 1, Alpha 1E được xây dựng để dễ dàng tương tác như một robot trung tâm giáo dục và gia đình được tải với các chức năng như tương tác bằng giọng nói, khiêu vũ, nhận dạng khuôn mặt và hơn thế nữa. Robot mạnh mẽ này cũng có thể di chuyển linh hoạt, nhảy múa, chống đẩy và hơn thế nữa với mười sáu động cơ servo.<br><br>Alpha 1E được trang bị công nghệ cảm biến cho phép tất cả các chức năng bổ sung đều có thể truy cập được từ một chức năng ứng dụng trung tâm.',
        'touch': 'Điều khiển có thể chạm trên đỉnh đầu của nó',
        'infrared': 'Nhận dạng vật thể và khoảng cách',
        'engine': '16 Động cơ servo',
        'sound': 'Âm thanh nổi chất lượng cao',
        'position': 'Con quay hồi chuyển, gia tốc kế',
        'extension': 'Bộ nhận lệnh hiển thị nhóm, cảm biến nhiệt độ và độ ẩm, cảm biến ánh sáng',
        'material': 'Hợp kim nhôm, PC + ABS'
    },
    {
        'img': './assets/img/courseware/robot-ai/alpha-mini.png',
        'name': 'Alpha mini',
        'desc': 'Robot Đồng hành Thông minh của bạn đã ở đây, sẵn sàng kết bạn, giải trí, dạy học và giao tiếp trong nhiều tình huống khác nhau. Alpha Mini có tính di động cao, mang lại những tương tác thú vị và vô số biểu thức và chức năng, bao gồm tương tác bằng giọng nói, kết nối 4G LTE, nhận dạng khuôn mặt, nhận dạng sách minh họa và nhận dạng đối tượng.<br><br>Mười bốn động cơ servo cung cấp năng lượng cho nhiều chuyển động linh hoạt, chẳng hạn như khiêu vũ, kung fu và đứng dậy sau khi ngã, trong khi đôi mắt LCD đáng yêu có thể thể hiện cảm xúc và biểu cảm – khiến Alpha Mini được cảm thấy như một phần thực sự của gia đình.',
        'touch': 'Dễ dàng kích hoạt',
        'micro': '4 mic nhận dạng giọng nói cách xa 3-5m',
        'camera': 'HD 1.3MP, tự động lấy nét',
        'infrared': 'Nhận dạng vật thể và khoảng cách',
        'engine': '14 Động cơ servo nhỏ giúp vận động mượt mà',
        'screen': 'Dual IPS LCD, góc rộng',
        'position': 'Con quay hồi chuyển, gia tốc kế, GPS',
        'sound': 'Âm thanh nổi chất lượng cao',
        'material': 'ABS chất lượng cao'
    },
    {
        'img': './assets/img/courseware/robot-ai/yanshee.png',
        'name': 'Yanshee',
        'desc': 'Yanshee là một robot giáo dục lý tưởng được thiết kế để cung cấp nền tảng mã nguồn mở tối ưu cho các giáo viên và sinh viên học hỏi, thử nghiệm, nghiên cứu và tham gia.<br><br>Cao gần 15 inch, Yanshee kết hợp giao diện A.I tiên tiến, thẻ Raspberry Pi có thể lập trình và một loạt các cảm biến và chức năng. Tất cả những điều này cho phép Yanshee thực hiện các nhiệm vụ theo lệnh, kiểm tra điều kiện môi trường, nói, lắng nghe, trả lời câu hỏi một cách chu đáo và chuyển tiếp dữ liệu.<br><br><span class="fw-bold">HỆ THỐNG CẢM BIẾN: </span>Cảm biến hồng ngoại, cảm biến màu sắc, cảm biến sóng siêu âm, cảm biến nhiệt độ, cảm biến điện dung, cảm biến độ ẩm, cảm biến áp suất',
        'specification': 'Chương trình giảng dạy đi kèm của Yanshee thúc đẩy khả năng của học sinh ở mọi cấp độ để chuẩn bị cho các nghề nghiệp khác nhau. Các nhà giáo dục sẽ được cung cấp hướng dẫn và hỗ trợ thích hợp để tối đa hóa khoản đầu tư vào trợ lý lớp học công nghệ cao này. Yanshee sẽ bổ sung tính cách, cảm xúc và kết nối thế giới thực vào lĩnh vực robot và mã hóa, tạo ra một môi trường hứng thú cao cho học sinh.<br><br><span class="fw-bold">NGÔN NGỮ LẬP TRÌNH ĐA DẠNG: </span>Bản chất nguồn mở của nền tảng này có nghĩa là sinh viên có thể tận dụng nhiều ngôn ngữ lập trình – bao gồm C, C ++, Python, Java và Blockly & Scratch– để cộng tác và tham gia với Yanshee.<br><br><span class="fw-bold">PHẦN MỀM THÂN THIỆN: </span>Bản chất nguồn mở của nền tảng này có nghĩa là sinh viên có thể tận dụng nhiều ngôn ngữ lập trình – bao gồm C, C ++, Python, Java và Blockly & Scratch– để cộng tác và tham gia với Yanshee.',
    },
];
function UpdateProductSpecification(currentTabID) {
    let productSpecificationHTML = ``;
    if (productsInfo[currentTabID].touch) {
        productSpecificationHTML += `
            <p>
                <span class="fw-bold">Cảm biến chạm: </span> ${productsInfo[currentTabID].touch}
            </p>
        `;
    }
    if (productsInfo[currentTabID].infrared) {
        productSpecificationHTML += `
            <p>
                <span class="fw-bold">Cảm biến hồng ngoại: </span> ${productsInfo[currentTabID].infrared}
            </p>
        `;
    }
    if (productsInfo[currentTabID].position) {
        productSpecificationHTML += `
            <p>
                <span class="fw-bold">Cảm biến vị trí: </span> ${productsInfo[currentTabID].position}
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
    if (productsInfo[currentTabID].sound) {
        productSpecificationHTML += `
            <p>
                <span class="fw-bold">Âm thanh: </span> ${productsInfo[currentTabID].sound}
            </p>
        `;
    }
    if (productsInfo[currentTabID].micro) {
        productSpecificationHTML += `
            <p>
                <span class="fw-bold">Micro: </span> ${productsInfo[currentTabID].micro}
            </p>
        `;
    }
    if (productsInfo[currentTabID].camera) {
        productSpecificationHTML += `
            <p>
                <span class="fw-bold">Camera: </span> ${productsInfo[currentTabID].camera}
            </p>
        `;
    }
    if (productsInfo[currentTabID].screen) {
        productSpecificationHTML += `
            <p>
                <span class="fw-bold">Màn hình: </span> ${productsInfo[currentTabID].screen}
            </p>
        `;
    }
    if (productsInfo[currentTabID].extension) {
        productSpecificationHTML += `
            <p>
                <span class="fw-bold">Khe cảm biến mở rộng: </span> ${productsInfo[currentTabID].extension}
            </p>
        `;
    }
    if (productsInfo[currentTabID].material) {
        productSpecificationHTML += `
            <p>
                <span class="fw-bold">Chất liệu: </span> ${productsInfo[currentTabID].material}
            </p>
        `;
    }
    if (productsInfo[currentTabID].specification) {
        productSpecificationHTML += `
            <p>
                ${productsInfo[currentTabID].specification}
            </p>
        `;
    }
    specification.innerHTML = productSpecificationHTML;
}