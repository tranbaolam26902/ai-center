// Start: Show/Hide Sidebar
const btnSidebar = document.querySelector('#btn-sidebar');
const sidebar = document.querySelector("#sidebar");
const content = document.querySelector("#content");
const sidebarOverlay = document.querySelector("#sidebar-overlay");
const ToggleSidebar = function() {
    sidebar.classList.toggle('sidebar--active');
    content.classList.toggle('content--active');
    sidebarOverlay.classList.toggle('sidebar-overlay--show')
}
btnSidebar.addEventListener('click', ToggleSidebar);
sidebarOverlay.addEventListener('click', ToggleSidebar);
// End: Show/Hide Sidebar

// Start: Button Scroll To Top
const btnScrollToTop = document.querySelector('#btn-scroll-to-top');
window.onscroll = function() {ShowHideScrollButton()};
function ShowHideScrollButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScrollToTop.style.opacity = "1";
    } else {
        btnScrollToTop.style.opacity = "0";
    }
}
btnScrollToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
// End: Button Scroll To Top

// Start: Links
const btnSigns = document.querySelector('.sign-in');
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const btnRegisterCourses = document.querySelectorAll('.btn-register-course');
const links = [
    './index.html',
    './about-us.html',
    './officers.html',
    './ai-certificate.html',
    './ai-day.html',
    './aic-experience.html',
    './k12-program.html',
    './master-trainer.html',
    './robocon.html',
    './aibox.html',
    './courseware.html',
    './ukit.html',
    './jimu.html',
    './robot-ai.html',
    './enrollment.html',
    './news.html',
    './contact.html',
    './register-courses.html'
];
if (btnRegisterCourses) {
    btnRegisterCourses.forEach(btn => {
        btn.href = './register-courses.html';
    });
}
if (sidebarLinks && btnSigns) {
    sidebarLinks.forEach((sidebarLink, index) => {
        sidebarLink.href = links[index];
    });
    btnSigns.children[0].href = './sign-in.html'
    btnSigns.children[1].href = './sign-up.html';
}
// End: Links

// Start: Auto Change Breadcrumb
const currentSite = document.querySelector('.current-site');
const submenuActive = document.querySelector('.submenu--active');
if (submenuActive) {
    currentSite.innerHTML = submenuActive.children[0].innerHTML;
} else if (currentSite) {
    currentSite.innerHTML = (document.querySelector('.nav-item.active').innerText).toLowerCase();
    // currentSite.classList.add('text-capitalize');
}
// End: Auto Change Breadcrumb

// Start: Footer Information
var phoneNumber = '+(84)90-2556-655';
var address = 'Số 01, đường Phù Đổng Thiên Vương, phường 8, thành phố Đà Lạt, tỉnh Lâm Đồng';
var email = 'aicdalat@gmail.com';
const footerPhoneNumber = document.querySelector('#phone');
const footerAddress = document.querySelector('#address');
const footerEmail = document.querySelector('#email');
footerPhoneNumber.innerHTML = `${phoneNumber}`;
footerPhoneNumber.href = `tel:${phoneNumber}`;
footerAddress.innerHTML = `${address}`;
footerEmail.innerHTML = `${email}`;
footerEmail.href = `mailto:${email}`;
// End: Footer Information