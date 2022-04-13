const coursesInfo = [
    {
        'link': './ai-day.html',
        'img': './assets/img/index/robot-hand.jpg',
        'name': 'AI Day',
        'classRequirement': '08 - 15 tuổi',
        'period': '01 ngày'
    },
    {
        'link': './aic-experience.html',
        'img': './assets/img/index/robot-hand.jpg',
        'name': 'AI Experience',
        'classRequirement': '08 - 15 tuổi',
        'period': '01 buổi'
    },
    {
        'link': './k12-program.html',
        'img': './assets/img/index/robot-hand.jpg',
        'name': 'Các lớp dài hạn',
        'classRequirement': '08 - 15 tuổi',
        'period': '32 tiết, kéo dài 8 tuần'
    },
    {
        'link': './master-trainer.html',
        'img': './assets/img/index/robot-hand.jpg',
        'name': 'Master Trainer',
        'classRequirement': 'Đang cập nhật',
        'period': 'Đang cập nhât'
    },
    {
        'link': './ai-talents.html',
        'img': './assets/img/index/robot-hand.jpg',
        'name': 'AI Talents',
        'classRequirement': 'Đang cập nhật',
        'period': 'Đang cập nhật'
    },
];
const coursesContainer = document.querySelector('.courses-container');
coursesInfo.forEach(info => {
    let courseHTML = `
        <div class="col-lg-6 col-md-12 col-sm-12 mb-3">
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
    coursesContainer.innerHTML += courseHTML;
});