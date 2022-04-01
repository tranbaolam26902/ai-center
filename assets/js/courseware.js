const coursewareInfo = [
    {
        'img': './assets/img/courseware/ai-fantasy-zoo-1.png',
        'name': 'AI Fantasy Zoo - Tập 1',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/ai-fantasy-zoo-2.png',
        'name': 'AI Fantasy Zoo - Tập 2',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/ai-smart-life-1.png',
        'name': 'AI Smart Life - Tập 1',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/ai-smart-life-2.png',
        'name': 'AI Smart Life - Tập 2',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/jimu-astrobot.png',
        'name': 'Jimu Astrobot',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/ai-transformer-workshop-1.png',
        'name': 'AI Transformer Workshop - Tập 1',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/ai-transformer-workshop-2.png',
        'name': 'AI Transformer Workshop - Tập 2',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/ai-magic-world-1.png',
        'name': 'AI Magic World - Tập 1',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/ai-magic-world-2.png',
        'name': 'AI Magic World - Tập 2',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/ai-super-assistant-1.png',
        'name': 'AI Super Assistant - Tập 1',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/ai-super-assistant-2.png',
        'name': 'AI Super Assistant - Tập 2',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/ai-super-engineer-1.png',
        'name': 'AI Super Engineer - Tập 1',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/ai-super-engineer-2.png',
        'name': 'AI Super Engineer - Tập 2',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/ai-super-designer-1.png',
        'name': 'AI Super Designer - Tập 1',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/ai-super-designer-2.png',
        'name': 'AI Super Designer - Tập 2',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/the-application-and-exploration-of-ai-1.png',
        'name': 'The Application and Exploration of AI - Tập 1',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/the-application-and-exploration-of-ai-2.png',
        'name': 'The Application and Exploration of AI - Tập 1',
        'rating': 5
    },
];
const coursewareContainer = document.querySelector('.courseware-container');
var courseware;
coursewareInfo.forEach(info => {
    courseware = `
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div class="d-flex flex-column overflow-hidden h-100 bg-white rounded-2 shadow hover-top">
                <img src="${info.img}" alt="" class="w-100">
                <div class="d-flex flex-column justify-content-between flex-fill px-3 py-2 text-center text-center">
                    <h4 class="text-primary text-capitalize">${info.name}</h4>
                    <div>
                        <div>`
                            for (let i = 0 ; i < info.rating; i++) {
                                courseware += `<i class="bi bi-star-fill text-warning"></i>`;
                            };
                            courseware +=
                        `</div>
                        <a href="#" class="d-block my-3 w-100 py-2 text-white text-center text-decoration-none rounded-1 bg-primary hover-opacity">Sách sắp về</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    coursewareContainer.innerHTML += courseware;
});