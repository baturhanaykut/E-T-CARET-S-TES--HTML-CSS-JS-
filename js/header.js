function sidebarFunc() {
    // ! Home Side Bar Start

    const btnOpenSidebar = document.getElementById('btn-menu');
    const sidebar = document.getElementById('sidebar');
    const btnCloseSidebar = document.getElementById('close-sidebar');


    btnOpenSidebar.addEventListener("click", function () {
        sidebar.style.left = 0;
    });

    btnCloseSidebar.addEventListener("click", function () {
        sidebar.style.left = "-100%";
    })

    // * Click Outside Start
    document.addEventListener("click", function (event) {
        if (!event.composedPath().includes(sidebar) && !event.composedPath().includes(btnOpenSidebar)) {
            sidebar.style.left = "-100%";
        }
    });
    // * Click Outside End

    // ! Home Side Bar End
}

function searchModalFunc() {
    // ! Search Modal Start
    const btnOpenSearch = document.querySelector('.search-button');
    const modalSearch = document.querySelector(".modal-search");
    const modalSearchWrapper = document.querySelector(".modal-wrapper");
    const btnCloseSearch = document.getElementById("close-search");
    btnOpenSearch.addEventListener("click", function () {
        modalSearch.style.visibility = 'visible'
        modalSearch.style.opacity = '1'
    });

    btnCloseSearch.addEventListener("click", function () {
        modalSearch.style.visibility = 'hidden';
        modalSearch.style.opacity = '0'
    })

    // * Click Outside Start
    document.addEventListener("click", function (event) {
        if (
            !event.composedPath().includes(modalSearchWrapper) &&
            !event.composedPath().includes(btnOpenSearch)) {
            modalSearch.style.visibility = 'hidden';
            modalSearch.style.opacity = '0'
        }
    });
    // * Click Outside End

    // ! Search Modal End
}

function headerFunc() {
    sidebarFunc();
    searchModalFunc();
}

export default headerFunc();