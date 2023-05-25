const cardsData = [
  {
    image: "/Images/Egypt1.jpeg",
    title: "EGYPT TANGBIA",
    brief: "Denatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 22,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quia  doloremque voluptatibus aliquid.Lorem, ipsum dolor sit amet  consectetur adipisicing elit. Nam quia doloremque voluptatibus  aliquid.",
  },
  {
    image: "/Images/OLLING1.jpeg",
    title: "OLLING PHISOTIP",
    brief: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 13,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quia  doloremque voluptatibus aliquid.Lorem, ipsum dolor sit amet  consectetur adipisicing elit. Nam quia doloremque voluptatibus  aliquid.",
  },
  {
    image: "/Images/CORTIA1.jpeg",
    title: "CORTIA DYNA",
    brief: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 8,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quia  doloremque voluptatibus aliquid.Lorem, ipsum dolor sit amet  consectetur adipisicing elit. Nam quia doloremque voluptatibus  aliquid.",
  },
  {
    image: "/Images/DUBAI1.jpeg",
    title: "SYSNE OF DUBAI",
    brief: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 7,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quia  doloremque voluptatibus aliquid.Lorem, ipsum dolor sit amet  consectetur adipisicing elit. Nam quia doloremque voluptatibus  aliquid.",
  },
  {
    image: "/Images/Egypt2.jpeg",
    title: "EGYPT TANGBIA",
    brief: "Denatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 22,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quia  doloremque voluptatibus aliquid.Lorem, ipsum dolor sit amet  consectetur adipisicing elit. Nam quia doloremque voluptatibus  aliquid.",
  },
  {
    image: "/Images/OLLING2.jpeg",
    title: "OLLING PHISOTIP",
    brief: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 13,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quia  doloremque voluptatibus aliquid.Lorem, ipsum dolor sit amet  consectetur adipisicing elit. Nam quia doloremque voluptatibus  aliquid.",
  },
  {
    image: "/Images/CORTIA2.jpeg",
    title: "CORTIA DYNA",
    brief: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 8,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quia  doloremque voluptatibus aliquid.Lorem, ipsum dolor sit amet  consectetur adipisicing elit. Nam quia doloremque voluptatibus  aliquid.",
  },
  {
    image: "/Images/DUBAI2.jpeg",
    title: "SYSNE OF DUBAI",
    brief: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 7,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quia  doloremque voluptatibus aliquid.Lorem, ipsum dolor sit amet  consectetur adipisicing elit. Nam quia doloremque voluptatibus  aliquid.",
  },
  {
    image: "/Images/Egypt3.jpeg",
    title: "EGYPT TANGBIA",
    brief: "Denatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 22,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quia  doloremque voluptatibus aliquid.Lorem, ipsum dolor sit amet  consectetur adipisicing elit. Nam quia doloremque voluptatibus  aliquid.",
  },

  {
    image: "/Images/OLLING3.jpeg",
    title: "OLLING PHISOTIP",
    brief: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 13,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quia  doloremque voluptatibus aliquid.Lorem, ipsum dolor sit amet  consectetur adipisicing elit. Nam quia doloremque voluptatibus  aliquid.",
  },

  {
    image: "/Images/CORTIA3.jpeg",
    title: "CORTIA DYNA",
    brief: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 8,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quia  doloremque voluptatibus aliquid.Lorem, ipsum dolor sit amet  consectetur adipisicing elit. Nam quia doloremque voluptatibus  aliquid.",
  },

  {
    image: "/Images/DUBAI3.jpeg",
    title: "SYSNE OF DUBAI",
    brief: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 7,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quia  doloremque voluptatibus aliquid.Lorem, ipsum dolor sit amet  consectetur adipisicing elit. Nam quia doloremque voluptatibus  aliquid.",
  },
];

$(document).ready(function () {
  const cardsWrapper = $("#cards-wrapper");
  for (let [index, cardData] of cardsData.entries()) {
    const cardHTML = `
    <div class="col-12 col-sm-6 col-md-3">
    <a data-toggle="modal" data-target="#card-${index}">
      <div class="card p-0 text-center">
        <img src="${cardData.image}" />
        <div class="card-body">
          <h5 class="card-title">${cardData.title}</h5>
          <p class="card-text">${cardData.brief}</p>
        </div>
        <div class="date-comments d-flex justify-content-center p-4 gap-5">
          <div class="d-flex align-items-center gap-1">
            <i class="fa-regular fa-calendar"></i>
            <p>${cardData.date}</p>
          </div>
          <div class="d-flex align-items-center gap-1">
            <i class="fa-regular fa-comments"></i>
            <p>${cardData.commentsnumber} Comments</p>
          </div>
        </div>
      </div>
    </a>
  </div>
  <div
    class="modal fade"
    id="card-${index}"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="d-flex justify-content-end">
          <i class="fa-solid fa-close modal-close-btn"/>
        </div>
        <div class="d-flex gap-5 align-items-start">
          <img src="${cardData.image}" />
          <div class="d-flex flex-column gap-3">
            <h5>${cardData.title}</h5>
            <p>
            ${cardData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>  
    `;
    cardsWrapper.html(cardsWrapper.html() + cardHTML);
  }
  $(".modal-close-btn").on("click", function () {
    $("modal fade show").addClass("d-none");
  });
});
