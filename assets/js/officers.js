const officersInfo = [
  {
    "firstName": "Trần Ngô Như",
    "lastName": "Khánh",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên chính, Trưởng khoa",
    "academic": "Tiến sĩ",
    "specialized": "Công nghệ thông tin"
  },
  {
    "firstName": "Nguyễn Thị",
    "lastName": "Lương",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên chính, Phó Trưởng khoa",
    "academic": "Tiến sĩ",
    "specialized": "Cơ sở toán cho tin học"
  },
  {
    "firstName": "Phan Thị Thanh",
    "lastName": "Nga",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên, Phó Trưởng Bộ Môn",
    "academic": "Thạc sĩ",
    "specialized": "Hệ thống thông tin"
  },
  {
    "firstName": "Vũ Minh",
    "lastName": "Quan",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên, Phó Trưởng Bộ Môn",
    "academic": "Thạc sĩ",
    "specialized": "Tin học"
  },
  {
    "firstName": "Trần",
    "lastName": "Thống",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên chính, Trưởng phòng TCHC",
    "academic": "Thạc sĩ",
    "specialized": "Khoa học máy tính"
  },
  {
    "firstName": "Võ Phương",
    "lastName": "Bình",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên chính",
    "academic": "Tiến sĩ",
    "specialized": "Khoa học máy tính và kỹ thuật thông tin"
  },
  {
    "firstName": "Thái Duy",
    "lastName": "Quý",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên",
    "academic": "Thạc sĩ",
    "specialized": "Khoa học máy tính"
  },
  {
    "firstName": "Phan Văn",
    "lastName": "Chuẩn",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên chính, Trưởng Bộ môn",
    "academic": "Tiến sĩ",
    "specialized": "Vật lý Nguyên tử Hạt nhân"
  },
  {
    "firstName": "Phạm Quang",
    "lastName": "Huy",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên",
    "academic": "Tiến sĩ",
    "specialized": "Khoa học máy tính"
  },
  {
    "firstName": "Dương Văn",
    "lastName": "Hải",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên chính, Phó Trưởng khoa",
    "academic": "Tiến sĩ",
    "specialized": "Khoa học máy tính"
  },
  {
    "firstName": "Nguyễn Hữu",
    "lastName": "Khánh",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên",
    "academic": "Tiến sĩ",
    "specialized": "Kỹ thuật Điện tử"
  },
  {
    "firstName": "Dương Bảo",
    "lastName": "Ninh",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên",
    "academic": "Thạc sĩ",
    "specialized": "Khoa học máy tính"
  },
  {
    "firstName": "Tạ Thị Thu",
    "lastName": "Phượng",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên chính, Trưởng khoa",
    "academic": "Thạc sĩ",
    "specialized": "Khoa học máy tính"
  },
  {
    "firstName": "Lê Văn",
    "lastName": "Tùng",
    "avatar": "../assets/img/advisory-council/default.jpg",
    "position": "Giảng viên, Trưởng Bộ môn",
    "academic": "Tiến sĩ",
    "specialized": "Robot học"
  },
];
const officersContainer = document.querySelector('.officers-container');
officersInfo.sort((a, b) => {
  if (a.lastName < b.lastName) {
    return -1;
  } else if (a.lastName > b.lastName) {
    return 1;
  } else if (a.firstName < b.firstName) {
    return -1;
  } else if (a.firstName >b.firstName) {
    return 1;
  } else {
    return 0;
  };
});
// This variable use for Index Page to show only 4 specific items
var indexPage = document.querySelector('#index');
for (let i = 0; i < officersInfo.length; i++) {
  let officerHTML = `
    <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
      <div class="card h-100 px-2 py-5 text-white bg-primary rounded-3 text-center">
        <div class="card-body it d-flex flex-column justify-content-between align-items-center">
          <img class="avatar mb-3" src="${officersInfo[i].avatar}" />
          <div class="mb-2 fw-bold">${officersInfo[i].academic}</div>
          <div class="mb-2 fs-5 text-uppercase">${officersInfo[i].firstName} ${officersInfo[i].lastName}</div>
          <div class="mb-2">${officersInfo[i].position}</div>
          <div>${officersInfo[i].specialized}</div>
        </div>
      </div>
    </div>
  `;
  officersContainer.innerHTML += officerHTML;
  // Start: Show Only 4 Officers in Index Page
  if (indexPage && i === 3) {
    let btnViewMoreContainer = document.createElement('div');
    btnViewMoreContainer.className = 'text-center mt-3';
    let btnViewMore = document.createElement('a');
    btnViewMore.href = './officers.html';
    btnViewMore.className = 'px-4 py-2 text-white text-decoration-none bg-primary rounded-2 shadow hover-opacity';
    btnViewMore.innerHTML = 'Tìm hiểu thêm';
    btnViewMoreContainer.appendChild(btnViewMore);
    officersContainer.appendChild(btnViewMoreContainer);
    i = officersContainer.length;
  }
  // End: Show Only 4 Items in Index Page
};