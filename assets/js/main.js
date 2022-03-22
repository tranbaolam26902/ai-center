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