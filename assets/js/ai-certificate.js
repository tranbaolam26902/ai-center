const certificatesInfo = [
    {
        'name': 'Python cơ bản',
        'difficult': 1,
        'period': '12 - 16'
    },
    {
        'name': 'Đại số tuyến tính và thực hành với Python',
        'difficult': 1,
        'period': '8 - 16'
    },
    {
        'name': 'Đạo hàm và thực hành với Python',
        'difficult': 2,
        'period': '8 - 16'
    },
    {
        'name': 'Xác suất và thực hành với Python',
        'difficult': 2,
        'period': '8 - 16'
    },
    {
        'name': 'Thống kê và thực hành với Python',
        'difficult': 2,
        'period': '8 - 16'
    },
    {
        'name': 'Tiền xử lý và trực quan hóa dữ liệu với Python',
        'difficult': 2,
        'period': '8 - 16'
    },
    {
        'name': 'Giới thiệu AI, Keras và Tensorflow',
        'difficult': 2,
        'period': '8'
    },
    {
        'name': 'Mô hình hồi quy tuyến tính (Linear Regression)',
        'difficult': 3,
        'period': '4'
    },
    {
        'name': 'Mô hình phân lớp với Decision Tree',
        'difficult': 3,
        'period': '4'
    },
    {
        'name': 'Đánh giá mô hình',
        'difficult': 2,
        'period': '4'
    },
    {
        'name': 'Thuật toán Stochastic Gradient Descent (SGD)',
        'difficult': 3,
        'period': '4 - 8'
    },
    {
        'name': 'Mô hình hồi quy logistic (Logistic Regression)',
        'difficult': 3,
        'period': '4'
    },
    {
        'name': 'Mô hình hồi quy Softmax',
        'difficult': 3,
        'period': '4'
    },
    {
        'name': 'Mạng nơ-ron và thuật toán lan truyền ngược',
        'difficult': 3,
        'period': '4'
    },
    {
        'name': 'Xây dựng mạng nơ-ron bằng Python + Numpy',
        'difficult': 4,
        'period': '4'
    },
    {
        'name': 'Xây dựng mạng nơ-ron bằng Tensorflow',
        'difficult': 4,
        'period': '4'
    },
    {
        'name': 'Mạng tích chập',
        'difficult': 4,
        'period': '8 - 12'
    },
    {
        'name': 'Transfer-learning',
        'difficult': 3,
        'period': '4'
    },
    {
        'name': 'Một số thuật toán tối ưu',
        'difficult': 4,
        'period': '4 - 8'
    },
    {
        'name': 'Xây dựng mô hình qua Google Cloud',
        'difficult': 3,
        'period': '4'
    },
    {
        'name': 'Xử lý ngôn ngữ tự nhiên',
        'difficult': 5,
        'period': '12 - 16'
    },
    {
        'name': 'Mô hình ngôn ngữ và mạng nơ-ron hồi quy',
        'difficult': 5,
        'period': '8 - 12'
    },
    {
        'name': 'Xây dựng mô hình làm việc với dữ liệu thời gian',
        'difficult': 5,
        'period': '8 - 12'
    },
    {
        'name': 'AI Super Designer',
        'difficult': 3,
        'period': '12- 70'
    },
    {
        'name': 'AI Application and Exploration',
        'difficult': 3,
        'period': '12 - 70'
    },
    {
        'name': 'Cloud computing',
        'difficult': 3,
        'period': '12 - 70'
    },
];
const certificatesContainer = document.querySelector('.certificates-container');
var certificate;
certificatesInfo.forEach(info => {
  certificate = `
    <div class="col-lg-6 col-md-6 col-sm-12 mb-3 px-2">
      <div class="d-flex justify-content-between p-2 h-100 bg-white border-215deg rounded-2 hover-right">
        <div class="col-9">
          <p class="mb-0 fs-5 fw-bold">${info.name}</p>
          <p class="mb-0">Số tiết: ${info.period}</p>
        </div>
        <div class="col-3 text-center">
          <p class="mb-0 fs-5 fw-bold">Độ khó</p>
          <p class="mb-0">${info.difficult}</p>
        </div>
      </div>
    </div>
  `;
  certificatesContainer.innerHTML += certificate;
});