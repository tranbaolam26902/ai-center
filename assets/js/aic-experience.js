const coursesInfo = [
    {
        'name': 'AIC Experience 1',
        'ageRequirement': '8 - 12 tuổi (hoặc đã có kinh nghiệm lắp ráp lego)',
        'content': '1 bài giảng về AI FantasyZoo hoặc AI Smart Life + trải nghiệm đơn giản về robot'
    },
    {
        'name': 'AIC Experience 2',
        'ageRequirement': '11 - 14',
        'content': '1 bài giảng về AI Transformer Wokshop hoặc AI Magic World + trải nghiệm đơn giản về robot'
    },
    {
        'name': 'AIC Experience 3',
        'ageRequirement': '13 tuổi trở lên',
        'content': '1 bài giảng về AI Super Engineer hoặc AI Super Assistant'
    },
];
const coursesContainer = document.querySelector('.courses-container');
coursesInfo.forEach(course => {
    let courseHTML = `
        <div class="col-lg-4 col-md-12 col-sm-12 mb-3">
            <div class="p-3 h-100 bg-white rounded-1 shadow hover-top">
            <h4 class="text-center">${course.name}</h4>
            <hr />
            <p>
                <span class="text-primary fw-bold">
                <i class="bi bi-person-bounding-box me-1"></i>Đối
                tượng:
                </span>
                ${course.ageRequirement}
            </p>
            <p class="mb-1">
                <span class="text-primary fw-bold">
                <i class="bi bi-book me-1"></i>Nội dung chính:
                </span>
                ${course.content}
            </p>
            </div>
        </div>
    `;
    coursesContainer.innerHTML += courseHTML;
});