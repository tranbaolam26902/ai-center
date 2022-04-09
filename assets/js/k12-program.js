const coursesInfo = [
    {
        'img': '../assets/img/courses/fantasy-zoo.png',
        'name': 'Fantasy Zoo',
        'courseware': 'Fantasy Zoo (2 tập, 32 tiết/tập)',
        'classRequire': '8 - 12 tuổi (hoặc đã có kinh nghiệm lắp ráp lego)',
        'cost': '1.400.000',
        'desc': 'Khóa học này áp dụng phương pháp làm việc nhóm để giúp học viên khám phá các phương pháp xây dựng các mô hình động vật khác nhau và có được kiến thức lập trình cơ bản để mô phỏng hành vi và cách thức của các loài động vật khác nhau. Một mặt, nó giúp học sinh hiểu sự việc và giải quyết vấn đề từ nhiều chiều. Mặt khác, nó củng cố khả năng giao tiếp, diễn đạt và chia sẻ của học sinh.'
    },
    {
        'img': '../assets/img/courses/smart-life.png',
        'name': 'Smart Life',
        'courseware': 'Smart Life (2 tập, 32 tiết/tập)',
        'classRequire': '9 - 12 tuổi (hoặc đã có kinh nghiệm lắp ráp lego)',
        'cost': '1.400.000',
        'desc': 'Học viên trong khóa học có thể quan sát và hiểu được nguyên lý hoạt động và các kịch bản ứng dụng của nhiều loại cảm biến thông dụng khác nhau, bao gồm cảm biến âm thanh, cảm biến hồng ngoại, cảm biến nhiệt độ và độ ẩm, cảm biến cảm ứng, cảm biến khoảng cách hồng ngoại, v.v … Với hình thức hợp tác nhóm, học viên sẽ hoàn thành nhiều dự án thiết thực như thùng rác thông minh, khu vườn thông minh, giá treo quần áo thông minh, xe quét rác thông minh và hiểu được những thay đổi của cuộc sống do khoa học và công nghệ tạo ra.'
    },
    {
        'img': '../assets/img/courses/fantasy-zoo.png',
        'name': 'Astrobot',
        'courseware': 'Astrobot (2 bản Việt - Anh, 28 tiết/tập)',
        'classRequire': '11 - 14 tuổi',
        'cost': '1.500.000',
        'desc': 'Học sinh sẽ xây dựng thị trấn tương lai của chúng ta với vai trò là những nhà thiết kế. Học sinh cũng sẽ hiểu ứng dụng của AI và biết cách gọi API của nhận dạng khuôn mặt, giao tiếp bằng giọng nói và nhận dạng hình ảnh.'
    },
    {
        'img': '../assets/img/courses/transformer.png',
        'name': 'Transformer',
        'courseware': 'Transformer (2 tập, 30 tiết/tập)',
        'classRequire': '11 - 14 tuổi',
        'cost': '1.500.000',
        'desc': 'Khóa học này áp dụng phương pháp làm việc nhóm để giúp học viên khám phá các phương pháp xây dựng các mô hình động vật khác nhau và có được kiến thức lập trình cơ bản để mô phỏng hành vi và cách thức của các loài động vật khác nhau. Một mặt, nó giúp học sinh hiểu sự việc và giải quyết vấn đề từ nhiều chiều. Mặt khác, nó củng cố khả năng giao tiếp, diễn đạt và chia sẻ của học sinh.'
    },
    // {
    //     'img': '../assets/img/courses/magic-world.png',
    //     'name': 'Magic World',
    //     'courseware': 'Magic World (2 tập, 28 tiết/tập)',
    //     'classRequire': 'Lớp 6, lớp 7',
    //     'cost': 2500000,
    //     'desc': 'Thông qua các trò chơi, học sinh sẽ tìm hiểu nguyên lý hoạt động của các thiết bị cảm biến, đồ chơi; hình thành khái niệm lập trình và tư duy logic.'
    // },
    // {
    //     'img': '../assets/img/courses/super-assistant.png',
    //     'name': 'Super Assistant',
    //     'courseware': 'Super Assistant (2 tập, 30 tiết/tập)',
    //     'classRequire': 'Lớp 8, lớp 9',
    //     'cost': 2500000,
    //     'desc': 'Khóa học dựa trên robot hình người Alpha Mini, kết hợp với lập trình đồ họa (uCode) và phần cứng nguồn mở để phát triển.<br>Theo tiêu chuẩn của chương trình khoa học của trường tiểu học, học sinh sẽ có được những kiến ​​thức như khoa học, công nghệ, kỹ thuật, nghệ thuật và toán học, được tích hợp và hướng dẫn bởi phương pháp học tập và giải quyết vấn đề theo dự án. Khóa học tích hợp các hoạt động học tập như quan sát, điều tra, nghiên cứu, thí nghiệm và thử nghiệm.<br>Bằng cách học sử dụng các công cụ lập trình đồ họa, học sinh có thể học cách sử dụng thị giác, giọng nói và các mô-đun chức năng khác của robot hình người, sau đó học cách lập trình robot hình người, trải nghiệm sự quyến rũ của AI trong lập trình và kích thích sự hứng thú học kiến ​​thức khoa học.'
    // },
    // {
    //     'img': '../assets/img/courses/super-engineer.png',
    //     'name': 'Super Engineer',
    //     'courseware': 'Super Engineer (2 tập, 32 tiết/tập)',
    //     'classRequire': 'Lớp 9',
    //     'cost': 2500000,
    //     'desc': 'Học sinh khám phá nghiêm lý hoạt động của các cảm biến màu sắc, âm thanh, nhiệt độ. Qua đó, học sinh hiểu được cách điều khiển của một số thiết bị cơ bản trong một ngôi nhà thông minh và hay cộng đồng thông minh.<br>Học sinh sẽ học cách chế tạo và lập trình một robot biến hình để biến đổi từ người thành phương tiện và từ phương tiện thành người và thực hiện các hành động dễ dàng và được thử thách khả năng vận dụng, sáng tạo qua một cuộc thi về Robot.'
    // },
    // {
    //     'img': '../assets/img/courses/super-designer.png',
    //     'name': 'Super Designer',
    //     'courseware': 'Super Designer (2 tập, 30 tiết/tập)',
    //     'classRequire': 'Lớp 10 trở lên',
    //     'cost': 2500000,
    //     'desc': 'Sinh viên có thể học kiến thức thuật toán liên quan của Python trong khóa học này với sự trợ giúp của robot Yanshee. Bắt đầu từ những trường hợp điển hình thực tế, nó khởi tạo tư duy của học sinh về thuật toán và giúp học sinh học các thuật toán cơ bản như phương pháp sắp xếp, phép toán đệ quy, cây nhị phân, v.v.'
    // },
    // {
    //     'img': '../assets/img/courses/application-and-exploration.png',
    //     'name': 'Application Exploration',
    //     'courseware': 'Application Exploration (2 tập, 30 tiết/tập)',
    //     'classRequire': 'Lớp 12 trở lên',
    //     'cost': 2500000,
    //     'desc': 'Trong khóa học này, học sinh sẽ bắt đầu từ các ứng dụng điển hình của AI, hiểu sự phát triển và nguyên tắc của công nghệ AI, liên hệ với các ứng dụng cụ thể của công nghệ AI trong xã hội và cuộc sống, và suy nghĩ về cách AI có thể giúp con người nâng cao hiệu quả và chất lượng công việc đời sống. Qua đó, học sinh sẽ hình thành cái nhìn về sự phát triển của xã hội trong tương lai; mở rộng tư duy và tầm nhìn của học sinh, kích thích học sinh quan tâm đến việc khám phá chủ đề trí tuệ nhân tạo và thiết lập một cái nhìn đúng đắn về ứng dụng khoa học và công nghệ.'
    // }
];
const coursesContainer = document.querySelector('.courses-container');
coursesInfo.forEach(info => {
    let courseHTML = `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div class="show-desc p-3 h-100 rounded-2 shadow">
                <div class="overflow-hidden position-relative rounded-2">
                    <img src="${info.img}" class="w-100"/>
                    <div class="course-desc">
                        <p class="p-4 text-white text-justify">
                            ${info.desc}
                        </p>
                    </div>
                </div>
                <div class="d-flex flex-column justify-content-between p-2 pb-0">
                    <h5 class="text-primary text-center">${info.name}</h5>
                    <p>
                        <span class="fw-bold">Giáo trình: </span>${info.courseware}
                    </p>
                    <p>
                        <span class="fw-bold">Đối tượng (tối thiểu): </span>${info.classRequire}
                    </p>
                    <p class="mb-1">
                        <span class="fw-bold">Học phí: </span>${info.cost}<sup>đ</sup>
                    </p>
                </div>
            </div>
        </div>
    `;
    coursesContainer.innerHTML += courseHTML;
});