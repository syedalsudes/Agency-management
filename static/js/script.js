const boxes = [
    { logo: "/static/images/logo1.png", name: "Branding", para: "Growth flows steadily, adapting with strength and grace. Smooth steps lead to progress and balance."},
    { logo: "/static/images/logo2.png", name: "Web development", para: "Move forward with confidence, staying steady and balanced. Simplicity leads to strength." },
    { logo: "/static/images/logo3.png", name: "Digital marketing", para: "Focused effort builds strength and progress. Stay determined and steady, and success will follow." },
    { logo: "/static/images/logo4.png", name: "Mobile App", para: "Growth begins steadily, progressing with smooth steps and balanced actions." },
    { logo: "/static/images/logo5.png", name: "SEO", para: "Stay steady and firm, moving forward with simplicity and balance." },
    { logo: "/static/images/logo6.png", name: "User testing", para: "Build strength through consistent effort and balanced growth. Confidence and focus lead the way." }
];

const offer_boxes = document.getElementsByClassName("off-boxes")[0];

const off_boxes = boxes.map((box) => {
    const logo = box.logo || "/images/default.png";
    const name = box.name || "Default Name";
    const para = box.para || "Default description";

    return `
        <div class="off-cards">
            <img src="${logo}" alt="${name}" />
            <h1>${name}</h1>
            <p>${para}</p>
        </div>
    `;
}).join("");

offer_boxes.innerHTML = off_boxes;

//-------------------------------OBSERVE CARDS-----------------------------------------\\

const animateElements = document.querySelectorAll(".off-cards");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});

animateElements.forEach((el) => observer.observe(el));


// .......................................................................\\

function LoginAlert() {
    alert("Login Done");
}

function RegisterAlert() {
    alert("Rgistration Done");
}