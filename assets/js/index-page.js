const coursesInfo = [
    {
        'link': './ai-day.html',
        'img': './assets/img/index/robot-hand.jpg',
        'name': 'AI Day',
        'classRequirement': 'Học sinh phổ thông (lớp 1 - lớp 12)',
        'period': '02 - 03 giờ'
    },
    {
        'link': './aic-experience.html',
        'img': './assets/img/index/robot-hand.jpg',
        'name': 'AI Experience',
        'classRequirement': 'Học sinh phổ thông (lớp 1 - lớp 12)',
        'period': '02 - 03 giờ'
    },
    {
        'link': './k12-program.html',
        'img': './assets/img/index/robot-hand.jpg',
        'name': 'Chương trình K12',
        'classRequirement': 'Học sinh phổ thông (lớp 1 - lớp 12)',
        'period': '~ 60 tiết'
    },
    {
        'link': './master-trainer.html',
        'img': './assets/img/index/robot-hand.jpg',
        'name': 'Master Trainer',
        'classRequirement': 'Đang cập nhật',
        'period': 'Đang cập nhât'
    },
    {
        'link': './robocon.html',
        'img': './assets/img/index/robot-hand.jpg',
        'name': 'Robocon',
        'classRequirement': 'Đang cập nhật',
        'period': 'Đang cập nhật'
    }
];
const coursesContainer = document.querySelector('.courses-container');
var course;
coursesInfo.forEach(info => {
    course = `
        <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
            <a href="${info.link}" class="d-block p-4 text-black text-decoration-none bg-white rounded-2 shadow hover-scale">
                <div class="overflow-hidden rounded-3">
                    <img src="${info.img}" alt="" class="img-center w-100"/>
                </div>
                <div class="px-3">
                    <h4 class="my-3 fw-bold">${info.name}</h4>
                    <p>
                        <span class="fw-bold">
                            <i class="bi bi-person-bounding-box me-2"></i>Đối tượng: 
                        </span>
                        ${info.classRequirement}
                    </p>
                    <p>
                        <span class="fw-bold">
                            <i class="bi bi-clock me-2"></i>Thời lượng:
                        </span>
                        ${info.period}
                    </p>
                </div>        
            </a>
        </div>
    `;
    coursesContainer.innerHTML += course;
});