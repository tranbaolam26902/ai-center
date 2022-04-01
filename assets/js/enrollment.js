const enrollmentInfo = [
    {
        'img': './assets/img/enrollment/enrollment-1.jpg',
        'link': './k12-program.html'
    },
    {
        'img': './assets/img/enrollment/enrollment-2.jpg',
        'link': './aic-experience.html'
    }
];
const enrollmentContainer = document.querySelector('.enrollment-container');
var enrollment;
enrollmentInfo.forEach(info => {
    enrollment = `
        <div class="col-lg-6 col-md-6 col-sm-12">
            <a href="${info.link}">
                <img src="${info.img}" alt="" class="w-100 rounded-2 shadow">
            </a>
        </div>
    `;
    enrollmentContainer.innerHTML += enrollment;
});