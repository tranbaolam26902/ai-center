const officersInfo = [
  {
    "name": "Trần Ngô Như Khánh",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên chính, Trưởng khoa",
    "academic": "Tiến sĩ",
    "specialized": "Công nghệ thông tin"
  },
  {
    "name": "Nguyễn Thị Lương",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên chính, Phó Trưởng khoa",
    "academic": "Tiến sĩ",
    "specialized": "Cơ sở toán cho tin học"
  },
  {
    "name": "Phan Thị Thanh Nga",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên, Phó Trưởng Bộ Môn",
    "academic": "Thạc sĩ",
    "specialized": "Hệ thống thông tin"
  },
  {
    "name": "Vũ Minh Quan",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên, Phó Trưởng Bộ Môn",
    "academic": "Thạc sĩ",
    "specialized": "Tin học"
  },
  {
    "name": "Trần Thống",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên chính, Trưởng phòng TCHC",
    "academic": "Thạc sĩ",
    "specialized": "Khoa học máy tính"
  },
  {
    "name": "Võ Phương Bình",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên chính",
    "academic": "Tiến sĩ",
    "specialized": "Khoa học máy tính và kỹ thuật thông tin"
  },
  {
    "name": "Thái Duy Quý",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên",
    "academic": "Thạc sĩ",
    "specialized": "Khoa học máy tính"
  },
];
const officersContainer = document.querySelector('.officers-container');
var officer;
officersInfo.forEach(info => {
  officer = `
    <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
      <div class="card h-100 px-2 py-3 text-white bg-primary rounded-3 text-center">
        <div class="card-body it d-flex flex-column justify-content-between align-items-center">
          <img class="avatar mb-3" src="${info.avatar}" />
          <div class="academic mb-2 fw-bold">${info.academic}</div>
          <div class="name mb-2 fs-5 text-uppercase">${info.name}</div>
          <div class="office mb-2">${info.position}</div>
          <div class="specialized">${info.specialized}</div>
        </div>
      </div>
    </div>
  `
  officersContainer.innerHTML += officer;
});