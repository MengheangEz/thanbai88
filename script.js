document.getElementsByClassName('header')[0].innerHTML =`
<section class="bg-black w-full">
        <div class="container mx-auto">
            <div class="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
                <div class="max-md:w-full flex justify-between">
                    <div class="md:hidden flex">
                        <button class="text-white font-medium rounded-lg text-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                    </div>
                    <div id="drawer-navigation" class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
                        <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close menu</span>
                        </button>
                        <div class="py-4 overflow-y-auto">
                            <ul class="space-y-2 font-medium text-[#8A8A8A]">
                                <li>
                                    <a href="../index.html" class="flex items-center p-2 hover:bg-gray-100 border-b dark:hover:bg-gray-700 group">    
                                        <span class="ms-3">TRANG CHỦ</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="../houngdan/houngda.html" class="flex items-center p-2 hover:bg-gray-100 border-b dark:hover:bg-gray-700 group">
                                        <span class="flex-1 ms-3 whitespace-nowrap">HƯỚNG DẪN</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="../thethao/thethao.html" class="flex items-center p-2 hover:bg-gray-100 border-b dark:hover:bg-gray-700 group">
                                        <span class="flex-1 ms-3 whitespace-nowrap">THỂ THAO</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="../slot/slot.html" class="flex items-center p-2 hover:bg-gray-100 border-b dark:hover:bg-gray-700 group">
                                        <span class="flex-1 ms-3 whitespace-nowrap">SLOT</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="../lode/lode.html" class="flex items-center p-2 hover:bg-gray-100 border-b dark:hover:bg-gray-700 group">
                                        <span class="flex-1 ms-3 whitespace-nowrap">LÔ ĐỀ</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="../gamebai/gamebai.html" class="flex items-center p-2 hover:bg-gray-100 border-b dark:hover:bg-gray-700 group">
                                        <span class="flex-1 ms-3 whitespace-nowrap">GAME BÀI</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="../index.html"><img class="w-[250px]" src="../img/logo (1).png" alt=""></a>
                    <span class="md:hidden"></span>
                </div>
                <div class="text-white max-md:w-full text-center hidden md:flex">
                    <a href="https://www.hay88.one/?inviteCode=3581652" class="bg-[#DC2427] px-5 py-2 rounded-md mx-1 hover:bg-[#7F1819] font-bold duration-500 text-center">ĐĂNG NHẬP</a></a>
                    <a href="https://www.hay88.one/?inviteCode=3581652" class="bg-[#DC2427] px-5 py-2 rounded-md mx-1 hover:bg-[#7F1819] font-bold duration-500 text-center">ĐĂNG KÝ</a></a>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-[#007E92]">
        <nav class="container mx-auto text-white justify-center gap-5 font-bold hidden md:flex">
            <a class="hover:bg-black p-3" href="../index.html">TRANG CHỦ</a>
            <a class="hover:bg-black p-3" href="../houngdan/houngda.html">HƯỚNG DẪN</a>
            <a class="hover:bg-black p-3" href="../thethao/thethao.html">THỂ THAO</a>
            <a class="hover:bg-black p-3" href="../slot/slot.html">SLOT</a>
            <a class="hover:bg-black p-3" href="../lode/lode.html">LÔ ĐỀ</a>
            <a class="hover:bg-black p-3" href="../gamebai/gamebai.html">GAME BÀI</a>
        </nav>
        <div class="text-white max-md:w-full text-center md:hidden flex justify-center gap-3 py-2">
            <a href="https://www.hay88.one/?inviteCode=3581652" class="bg-[#DC2427] px-5 py-2 rounded-md mx-1 hover:bg-[#7F1819] font-bold duration-500 text-center">ĐĂNG KÝ</a></a>
            <a href="https://www.hay88.one/?inviteCode=3581652" class="bg-[#DC2427] px-5 py-2 rounded-md mx-1 hover:bg-[#7F1819] font-bold duration-500 text-center">ĐĂNG NHẬP</a></a>
                </div>
    </section>
`

document.getElementsByClassName('footer')[0].innerHTML =`
<footer class="w-full bg-black">
        <div class="container mx-auto max-w-6xl">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 xl:grid-cols-4 px-4">
                <div class="text-white mb-8">
                    <p class="text-xl font-bold border-b py-4">NHÀ CÁI UY TÍN</p>
                    <p class="mt-10"><strong>Thanbai88</strong> có sự đảm bảo uy tín từ giấy phép quốc tế, mang tới không gian cá cược an toàn, minh bạch. Sản phẩm đa dạng, giao diện thân thiện, hỗ trợ nhiệt tình 24/7 là những lợi thế giúp Thanbai88 vượt trội. Đặt người chơi làm trọng tâm, Thanbai88 không ngừng cải tiến để chinh phục thị trường châu Á và thế giới.</p>
                </div>
                <div class="text-white mb-8">
                    <p class="text-xl font-bold border-b py-4">NHÀ CÁI UY TÍN</p>
                    <div class="mt-8 leading-10 font-bold">
                        <li><a class="hover:text-[#FF243D]" href="../houngdan/extra3.html">NẠP TIỀN</a></li>
                        <li><a class="hover:text-[#FF243D]" href="../houngdan/extra2.html">RÚT TIỀN</a></li>
                        <li><a class="hover:text-[#FF243D]" href="../houngdan/extra4.html">TẢI APP</a></li>
                        <li><a class="hover:text-[#FF243D]" href="../houngdan/extra1.html">KHUYẾN MÃI</a></li>
                    </div>
                </div>
                <div class="text-white mb-8">
                    <p class="text-xl font-bold border-b py-4">NHÀ CÁI UY TÍN</p>
                    <div class="mt-8 leading-10 font-bold">
                        <li><a class="hover:text-[#FF243D]" href="../vechongtoi/vechongtoi.html">VỀ CHÚNG TÔI</a></li>
                        <li><a class="hover:text-[#FF243D]" href="../dieukien/dieukien.html">ĐIỀU KIỆN VÀ ĐIỀU KHOẢN</a></li>
                        <li><a class="hover:text-[#FF243D]" href="../chinhsach/chinhsach.html">CHÍNH SÁCH BẢO MẬT</a></li>
                    </div>
                </div>
                <div class="text-white mb-8">
                    <p class="text-xl font-bold border-b py-4">THÔNG TIN LIÊN HỆ</p>
                    <p class="mt-10">Địa chỉ:46 Nguyễn Văn Bứa, Xuân Thới Sơn, Hóc Môn, Thành phố Hồ Chí Minh</p>
                    <p class="mt-5">Website : thanbai88.art</p>
                </div>
            </div>
        </div>
    </footer>
`
// script.js
window.onscroll = function() {makeHeaderSticky()};

var header = document.querySelector(".header");
var sticky = header.offsetTop;

function makeHeaderSticky() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
    }
}


document.addEventListener('DOMContentLoaded', function() {
    setActiveLink();
});

function setActiveLink() {
    const links = document.querySelectorAll('nav a');
    const currentUrl = window.location.href;

    links.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}