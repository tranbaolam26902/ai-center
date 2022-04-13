const documentsInfo = [
    {
        'img': './assets/img/courseware/documents/ai-fantasy-zoo-1.png',
        'name': 'AI Fantasy Zoo - Tập 1',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/documents/ai-fantasy-zoo-2.png',
        'name': 'AI Fantasy Zoo - Tập 2',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/documents/ai-smart-life-1.png',
        'name': 'AI Smart Life - Tập 1',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/documents/ai-smart-life-2.png',
        'name': 'AI Smart Life - Tập 2',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/documents/jimu-astrobot.png',
        'name': 'Jimu Astrobot',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/documents/ai-transformer-workshop-1.png',
        'name': 'AI Transformer Workshop - Tập 1',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/documents/ai-transformer-workshop-2.png',
        'name': 'AI Transformer Workshop - Tập 2',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/documents/ai-magic-world-1.png',
        'name': 'AI Magic World - Tập 1',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/documents/ai-magic-world-2.png',
        'name': 'AI Magic World - Tập 2',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/documents/ai-super-assistant-1.png',
        'name': 'AI Super Assistant - Tập 1',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/documents/ai-super-assistant-2.png',
        'name': 'AI Super Assistant - Tập 2',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/documents/ai-super-engineer-1.png',
        'name': 'AI Super Engineer - Tập 1',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/documents/ai-super-engineer-2.png',
        'name': 'AI Super Engineer - Tập 2',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/documents/ai-super-designer-1.png',
        'name': 'AI Super Designer - Tập 1',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/documents/ai-super-designer-2.png',
        'name': 'AI Super Designer - Tập 2',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/documents/the-application-and-exploration-of-ai-1.png',
        'name': 'The Application and Exploration of AI - Tập 1',
        'rating': 5
    },
    {
        'img': './assets/img/courseware/documents/the-application-and-exploration-of-ai-2.png',
        'name': 'The Application and Exploration of AI - Tập 1',
        'rating': 5
    },
];
const documentsContainer = document.querySelector('.documents-container');
var indexPage = document.querySelector('#index');
for (let i = 0; i < documentsInfo.length; i++) {
    let documentHTML = `
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div class="d-flex flex-column overflow-hidden h-100 bg-white rounded-2 shadow hover-top">
                <img src="${documentsInfo[i].img}" alt="" class="w-100">
                <div class="d-flex flex-column justify-content-between flex-fill px-3 py-2 text-center text-center">
                    <h4 class="text-primary text-capitalize">${documentsInfo[i].name}</h4>
                    <div>
                        <div>`
                            for (let i = 0 ; i < documentsInfo[i].rating; i++) {
                                documentHTML += `<i class="bi bi-star-fill text-warning"></i>`;
                            };
                            documentHTML +=
                        `</div>
                        <a href="#" class="d-block my-3 w-100 py-2 text-white text-center text-decoration-none rounded-1 bg-primary hover-opacity">Sách sắp về</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    documentsContainer.innerHTML += documentHTML;
    // Start: Show Only 4 Documents in Index Page
    if (indexPage && i === 3) {
        let btnViewMoreContainer = document.createElement('div');
        btnViewMoreContainer.className = 'text-center mt-3';
        let btnViewMore = document.createElement('a');
        btnViewMore.href = './documents.html';
        btnViewMore.className = 'px-4 py-2 text-white text-decoration-none bg-primary rounded-2 shadow hover-opacity';
        btnViewMore.innerHTML = 'Xem thêm';
        btnViewMoreContainer.appendChild(btnViewMore);
        documentsContainer.appendChild(btnViewMoreContainer);
        i = documentsInfo.length;
    }
    // End: Show Only 4 Documents in Index Page
}