window.onload = function() {
    function highlightTabBtn(id) {
        let elements = document.getElementsByClassName("tab-group-btn");
        for (let elem of elements) {
            elem.classList.remove("active");
        }

        document.getElementById(id).classList.add("active");
    }

    function showArticle(id) {
        let elements = document.getElementsByClassName("article-main");
        for (let elem of elements) {
            elem.classList.add("hide");
        }

        document.getElementById(id).classList.remove("hide");
    }

    document.getElementById("about-me-btn").addEventListener("click", () => {
        highlightTabBtn("about-me-btn");
        showArticle("about-me-page");
    });

    document.getElementById("course-work-one-btn").addEventListener("click", () => {
        highlightTabBtn("course-work-one-btn");
        showArticle("course-work-one-page");
    });

    document.getElementById("course-work-two-btn").addEventListener("click", () => {
        highlightTabBtn("course-work-two-btn");
        showArticle("course-work-two-page");
    });

    document.getElementById("course-work-three-btn").addEventListener("click", () => {
        highlightTabBtn("course-work-three-btn");
        showArticle("course-work-three-page");
    });

    document.getElementById("projects-btn").addEventListener("click", () => {
        highlightTabBtn("projects-btn");
        showArticle("projects-page");
    });

    document.getElementById("journey-btn").addEventListener("click", () => {
        highlightTabBtn("journey-btn");
        showArticle("journey-page");
    });

    

}