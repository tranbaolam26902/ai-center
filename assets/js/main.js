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

// Start: Link
const signs = document.querySelector('.sign-in');
const links = document.querySelectorAll('.sidebar-link');
if (links && signs) {
    links[0].href = '../index.html';
    links[1].href = './about-us.html';
    links[2].href = './officers.html';
    links[3].href = './ai-certificate.html';
    links[4].href = './ai-day.html';
    links[5].href = './aic-experience.html';
    links[6].href = './k12-program.html';
    links[7].href = './master-trainer.html';
    links[8].href = './robocon.html';
    links[9].href = './aibox.html';
    links[10].href = './courseware.html';
    links[11].href = './ukit.html';
    links[12].href = './jimu.html';
    links[13].href = './robot-ai.html';
    links[14].href = './news.html';
    links[15].href = './contact.html';
    links[16].href = './register-courses.html';
    signs.children[0].href = './sign-in.html'
    signs.children[1].href = './sign-up.html';
}
// End: Link

// Start: Auto Change Breadcrumb
if (document.querySelector('.current-site')) {
    document.querySelector('.current-site').innerHTML = document.querySelector('.submenu--active').children[0].innerHTML;
}
// End: Auto Change Breadcrumb

// Start: Footer Information
var phoneNumber = '+(84)90-2556-655';
var address = 'Số 01, đường Phù Đổng Thiên Vương, phường 8, thành phố Đà Lạt, tỉnh Lâm Đồng';
// var email;
const footerPhoneNumber = document.querySelector('#phone');
const footerAddress = document.querySelector('#address');
const footerEmail = document.querySelector('#email');
footerPhoneNumber.innerHTML = `${phoneNumber}`;
footerPhoneNumber.href = `tel:${phoneNumber}`;
footerAddress.innerHTML = `${address}`;
footerEmail.innerHTML = `Đang cập nhật`
// End: Footer Information