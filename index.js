const data = [
  {
    img: "tb1.png",
    header: "Color Fliper",
    git: "https://github.com/ankitdetroja/column-preview-card-component",
  },
  {
    img: "tb2.png",
    header: "Simple Counter",
    git: "https://github.com/ankitdetroja/order-summary-component",
  },
  {
    img: "tb3.png",
    header: "Reviews/Quotes",
    git: "https://github.com/ankitdetroja/stats-preview-card-component",
  },
  {
    img: "tb4.png",
    header: "Navbar",
    git: "https://github.com/ankitdetroja/profile-card-component",
  },
  {
    img: "tb5.png",
    header: "Sidebar",
    git: "https://github.com/ankitdetroja/Profile-Card/tree/master/card-1",
  },
  {
    img: "tb6.png",
    header: "Modal",
    git: "https://github.com/ankitdetroja/property-card",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const parent = document.querySelector(".projectsContent");
  const projectItem = document.createElement("div");
  projectItem.classList.add("projectItem");

  for (let i = 0; i < data.length; i++) {
    projectItem.innerHTML = `
          <div class="projectItemInner">
          <a
            href="${data[i].git}"
            target="_blank"
          >
            <div class="imgBox">
              <img src="${data[i].img}" alt="" />
            </div>
            <div class="itemHeader">${data[i].header}</div>
          </a>
        </div>
          `;
    parent.appendChild(projectItem.cloneNode(true));
  }
});
