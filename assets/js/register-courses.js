var studentID = 1;
var studentInfoHTML;
const programsInfo = [
    {
        'name': 'Chương trình K12',
        'courses': [
            {
                'name': 'AI Fantasy Zoo',
                'schedules': [
                    'Thứ 7 (8h30-11h30)',
                    'Thứ 7 (13h30-16h30)',
                    'CN (8h30-11h30)',
                    'CN (13h30-16h30)',
                    'Thứ 7 và CN (17h-19h)',
                ],
                'price': '1.400.000đ'
            },
            {
                'name': 'AI Smart Life',
                'schedules': [
                    'Thứ 3 (8h-11h)',
                    'Thứ 3 (13h45-16h45)',
                    'Thứ 5 (8h-11h)',
                    'Thứ 5 (13h45-16h45)',
                    'Thứ 7 và CN (17h-18h40)',
                ],
                'price': '1.400.000đ'
            },
            {
                'name': 'AI Transformer Workshop',
                'schedules': [
                    'Thứ 7 (8h30-11h30)',
                    'Thứ 7 (13h30-16h30)',
                    'CN (8h30-11h30)',
                    'CN (13h30-16h30)',
                    'Thứ 7 và CN (17h-19h)',
                ],
                'price': '1.500.000đ'
            },
            {
                'name': 'AI Magic World',
                'schedules': [
                    'Thứ 3 (8h-11h)',
                    'Thứ 3 (13h45-16h45)',
                    'Thứ 5 (8h-11h)',
                    'Thứ 5 (13h45-16h45)',
                    'Thứ 7 và CN (17h-18h40)',
                ],
                'price': '1.500.000đ'
            },
        ]
    },
    {
        'name': 'AI Day',
        'courses': [
            {
                'name': '1 bài giảng AI FantasyZoo và 1 bài giảng AI Smart Life + trải nghiệm robot',
                'schedules': [
                    'Thứ 7 (8h30-16h)',
                    'CN (8h30-16h)',
                    'Các ngày trong tuần (8h30-16h)',
                ],
                'price': '430.000đ'
            },
            {
                'name': '1 bài giảng AI Transformer Wokshop và 1 bài giảng AI Magic World + trải nghiệm robot',
                'schedules': [
                    'Thứ 7 (8h30-16h)',
                    'CN (8h30-16h)',
                    'Các ngày trong tuần (8h30-16h)',
                ],
                'price': '430.000đ'
            },
            {
                'name': '1 bài giảng AI Transformer Wokshop hoặc AI Magic World + trải nghiệm robot',
                'schedules': [
                    'Thứ 3 (8h30-16h)'
                ],
                'price': '430.000đ'
            },
            {
                'name': '1 bài giảng về AI Super Engineer hoặc AI Super Assistant',
                'schedules': [
                    'Có thể tổ chức vào bất cứ buổi nào trong tuần theo đơn đặt hàng của các trường học, hay các đơn vị tổ chức tour du lịch trải nghiệm.'
                ],
                'price': '430.000đ'
            },
        ]
    },
    {
        'name': 'AI Experience',
        'courses': [
            {
                'name': '1 bài giảng về AI FantasyZoo hoặc AI Smart Life + trải nghiệm đơn giản về robot',
                'schedules': [
                    "Thứ 7 (8h30-11h30)",
                    "Thứ 7 (13h30-16h30)",
                    "CN (8h30-11h30)",
                    "CN (13h30-16h30)",
                ],
                'price': '200.000đ'
            },
            {
                'name': '1 bài giảng về AI Transformer Wokshop hoặc AI Magic World + trải nghiệm đơn giản về robot',
                'schedules': [
                    "Thứ 7 (8h30-11h30)",
                    "Thứ 7 (13h30-16h30)",
                    "CN (8h30-11h30)",
                    "CN (13h30-16h30)",
                ],
                'price': '200.000đ'
            },
            {
                'name': '1 bài giảng về AI Super Engineer hoặc AI Super Assistant',
                'schedules': [
                    "Thứ 7 (8h30-11h30)",
                    "Thứ 7 (13h30-16h30)",
                    "CN (8h30-11h30)",
                    "CN (13h30-16h30)",
                ],
                'price': '200.000đ'
            },
        ]
    },
];
//#region Start: Add/Remove Student Form
const btnAddStudent = document.querySelector('#add-student');
const studentContainer = document.querySelector('#student-container');
btnAddStudent.addEventListener('click', AddStudent);
// Add 1 more student form when click 'Thêm học viên' button
function AddStudent() {
    UpdateStudentInfoHTML();
    let student = document.createElement('div');
    student.className = 'mb-3';
    student.id = `student-${studentID}`;
    student.innerHTML = studentInfoHTML;
    studentContainer.appendChild(student);
    HideDeleteStudentButton();
    AddPrograms();
    studentID++;
}
// Remove last student form when click 'Xóa học viên' button
function RemoveStudent() {
    let student = document.querySelector(`#student-${studentID - 1}`);
    studentContainer.removeChild(student);
    studentID--;
    ShowDeleteStudentButton();
}
// Show the last 'Xóa học viên' button when deleted a student form
function ShowDeleteStudentButton() {
    let btnDeleteStudent = document.querySelector(`#delete-student-${studentID - 1}`);
    if (btnDeleteStudent.id !== 'delete-student-1') {
        btnDeleteStudent.classList.remove('d-none');
    }
}
// Hide all 'Xóa học viên' button except the last button when add new student form
function HideDeleteStudentButton() {
    let listBtnDeleteStudent = document.querySelectorAll('.delete-student');
    listBtnDeleteStudent.forEach(btn => {
        if (btn.id !== `delete-student-${studentID}` || btn.id === 'delete-student-1') {
            btn.classList.add('d-none');
        }
        btn.addEventListener('click', RemoveStudent);
    });
}
// Update student form ID before adding to HTML file
function UpdateStudentInfoHTML() {
    studentInfoHTML = `
    <div class="p-3 bg-gray rounded-2 shadow">
        <div class="d-flex justify-content-between align-items-center mb-2">
            <h5 class="text-primary">Thông tin học viên ${studentID}</h5>
            <span id="delete-student-${studentID}" class="delete-student d-flex align-items-center text-danger cursor-pointer">Xóa học viên<i class="bi bi-dash-circle ms-2 fs-5"></i></span>
        </div>
        <div class="row justify-content-center mb-3">
            <div class="row px-0">
                <div class="col-lg-7 col-md-12 col-sm-12 mb-lg-0 mb-3">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-lg-5 col-md-12 col-sm-12">
                            <label for="student-name-${studentID}" class="pb-1 pb-lg-0">Họ và tên học viên: <span class="text-danger">*</span></label>
                        </div>
                        <div class="col-lg-7 col-md-12 col-sm-12">
                            <input type="text" id="student-name-${studentID}" class="d-block px-3 py-2 w-100 bg-white border-1 rounded-1 shadow-sm" required>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12 col-sm-12">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <label for="date-of-birth-${studentID}" class="pb-1 pb-lg-0">Ngày sinh: <span class="text-danger">*</span></label>
                        </div>
                        <div class="col-lg-8 col-md-12 col-sm-12">
                            <input type="date" id="date-of-birth-${studentID}" class="d-block px-3 py-2 w-100 bg-white border-1 rounded-1 shadow-sm" required>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mb-3">
            <div class="col-lg-3 col-md-12 col-sm-12">
                <span>Giới tính:</span>
            </div>
            <div class="col-lg-9 col-md-12 col-sm-12 ps-lg-1">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender-${studentID}" id="male-${studentID}">
                    <label class="form-check-label" for="male-${studentID}">Nam</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender-${studentID}" id="female-${studentID}}">
                    <label class="form-check-label" for="female-${studentID}}">Nữ</label>
                </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3">
            <div class="col-lg-3 col-md-12 col-sm-12 mb-1">
                <span class=" align-items-center">Chọn chương trình học: <span class="text-danger">*</span>
                </span>
            </div>
            <div class="col-lg-9 col-md-12 col-sm-12 ps-lg-1">
                <select class="form-select d-block px-3 py-2 w-100 bg-white rounded-1 shadow-sm cursor-pointer" id="program-${studentID}"></select>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-3 col-md-12 col-sm-12 mb-1">
                <span>Chọn khóa học: <span class="text-danger">*</span></span>
            </div>
            <div class="col-lg-9 col-md-12 col-sm-12">
                <div class="form-check form-check-inline">
                    <div class="row gx-5" id="courses-container-${studentID}"></div>
                </div>
            </div>
        </div>
    </div>
`;
}
//#endregion End: Add/Remove Student Form
//#region Start: Show/Hide Programs and Courses
function AddPrograms() {
    // Start: Create Program options
    let program = document.querySelector(`#program-${studentID}`);
    if (program) {
        programsInfo.forEach(info => {
            let option = document.createElement('option');
            option.innerText = info.name;
            option.value = info.name;
            program.appendChild(option);
        });
    }
    // End: Create Program options
    // Start: Change Courses List when change Program
    let coursesContainer = document.querySelector(`#courses-container-${studentID}`);
    let CourseID = studentID - 1;
    program.value = '';
    program.addEventListener('change', () => {
        coursesContainer.innerHTML = '';
        programsInfo.forEach((info, infoIndex) => {
            let courseHTML;
            if (program.value === info.name) {
                info.courses.forEach((course, courseIndex) => {
                    courseHTML = `
                        <div class="col-lg-6 col-md-12 col-sm-12 mb-3">
                            <input type="checkbox" class="form-check-input cursor-pointer" id="course-${CourseID}-${infoIndex}-${courseIndex}">
                            <label for="course-${CourseID}-${infoIndex}-${courseIndex}" class="text-justify cursor-pointer user-select-none">${course.name}</label>
                            <label for="course-${CourseID}-${infoIndex}-${courseIndex}" class="d-block cursor-pointer user-select-none"><span class="fw-bold">Giá: </span>${course.price}</label>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 mb-3">
                            <div class="row d-none" id="schedule-course-${CourseID}-${infoIndex}-${courseIndex}">
                    `;
                    course.schedules.forEach((schedule, scheduleIndex) => {
                        courseHTML += `
                                <div class="col-6">
                                    <input type="radio" class="form-check-input cursor-pointer" name="case-course-${CourseID}-${infoIndex}-${courseIndex}" id="case-${CourseID}-${infoIndex}-${courseIndex}-${scheduleIndex}" value="${schedule}">
                                    <label for="case-${CourseID}-${infoIndex}-${courseIndex}-${scheduleIndex}" class="form-check-label cursor-pointer user-select-none">${schedule}</label>
                                </div>        
                            `;
                    });
                    courseHTML += `
                            </div>
                        </div>
                    `;
                    coursesContainer.innerHTML += courseHTML;
                });
            }
        });
        // End: Change Courses List when change Program
        // Start: Show/Hide Schedules when Courses Checkbox are Checked/Unchecked
        let checkboxes = document.querySelectorAll('[type="checkbox"].form-check-input');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                let scheduleContainer = document.querySelector(`#schedule-${checkbox.id}`);
                let scheduleRadio = document.querySelector(`#case-${checkbox.id}`);
                if (checkbox.checked) {
                    if (scheduleContainer) {
                        scheduleContainer.classList.remove('d-none');
                    }
                } else {
                    if (scheduleContainer) {
                        scheduleContainer.classList.add('d-none');
                    }
                    if (scheduleRadio) {
                        scheduleRadio.checked = false;
                    }
                }
            });
        });
        // End: Show/Hide Schedules when Courses Checkbox are Checked/Unchecked
    });
}
//#endregion End: Show/Hide Programs and Courses
//#region Start: Print Register Result
var registerForm = document.querySelector('#register-form');
// registerForm.addEventListener('submit', () => {
//     let parentName = document.querySelector('#parent-name');
//     let emailAddress = document.querySelector('#email-address');
//     let phoneNumber = document.querySelector('#phone-number');
//     let studentNames = document.querySelectorAll(`#student-name-${studentID}`);

//     let parentNameResult = document.querySelector('#parent-name-result');
//     let emailAddressResult = document.querySelector('#email-address-result');
//     let phoneNumberResult = document.querySelector('#phone-number-result');

//     const result = document.querySelector('#result');
//     parentNameResult.innerHTML = parentName.value;
//     emailAddressResult.innerHTML = emailAddress.value;
//     phoneNumberResult.innerHTML = phoneNumber.value;
//     registerForm.classList.add('d-none');
//     result.classList.remove('d-none');

// });
//#endregion End: Print Register Result
// Add 1st student form after page load
AddStudent();
