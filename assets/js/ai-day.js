const coursesInfo = [
    {
        'name': 'AI Day 1',
        'ageRequirement': '8 - 12 tuổi (hoặc đã có kinh nghiệm lắp ráp lego)',
        'content': '1 bài giảng AI Fantasy Zoo và 1 bài giảng AI Smart Life + trải nghiệm robot'
    },
    {
        'name': 'AI Day 2',
        'ageRequirement': '11 - 14 tuổi (hoặc đã có kinh nghiệm lắp ráp lego)',
        'content': '1 bài giảng AI Transformer Workshop và 1 bài giảng AI Magic World + trải nghiệm robot'
    },
    {
        'name': 'AI Day 3',
        'ageRequirement': '11 - 14 tuổi (hoặc đã có kinh nghiệm lắp ráp lego)',
        'content': '1 bài giảng AI Transformer Workshop hoặc AI Magic World + trải nghiệm robot'
    },
    {
        'name': 'AI Day 4',
        'ageRequirement': '8 - 12 tuổi (hoặc đã có kinh nghiệm lắp ráp lego)',
        'content': '1 bài giảng AI Super Engineer hoặc AI Super Assistant'
    },
];
const coursesContainer = document.querySelector('.courses-container');
coursesInfo.forEach(course => {
    let courseHTML = `
        <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
            <div class="p-3 h-100 bg-white rounded-1 shadow hover-top">
            <h4 class="text-center">${course.name}</h4>
            <hr />
            <p>
                <span class="text-primary fw-bold"
                ><i class="bi bi-person-bounding-box me-1"></i>Đối
                tượng: </span
                >${course.ageRequirement}
            </p>
            <p class="mb-1">
                <span class="text-primary fw-bold"
                ><i class="bi bi-book me-1"></i>Nội dung chính: </span
                >${course.content}
            </p>
            </div>
        </div>
    `;
    coursesContainer.innerHTML += courseHTML;
});