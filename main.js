const cardsData = [
  {
    image: "/Images/Egypt1.jpeg",
    title: "EGYPT TANGBIA",
    description:
      "Denatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 22,
  },
  {
    image: "/Images/Egypt2.jpeg",
    title: "EGYPT TANGBIA",
    description:
      "Denatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 22,
  },
  {
    image: "/Images/Egypt3.jpeg",
    title: "EGYPT TANGBIA",
    description:
      "Denatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 22,
  },
  {
    image: "/Images/OLLING1.jpeg",
    title: "OLLING PHISOTIP",
    description:
      "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 13,
  },
  {
    image: "/Images/OLLING2.jpeg",
    title: "OLLING PHISOTIP",
    description:
      "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 13,
  },
  {
    image: "/Images/OLLING3.jpeg",
    title: "OLLING PHISOTIP",
    description:
      "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 13,
  },
  {
    image: "/Images/CORTIA1.jpeg",
    title: "CORTIA DYNA",
    description:
      "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 8,
  },
  {
    image: "/Images/CORTIA2.jpeg",
    title: "CORTIA DYNA",
    description:
      "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 8,
  },
  {
    image: "/Images/CORTIA3.jpeg",
    title: "CORTIA DYNA",
    description:
      "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 8,
  },
  {
    image: "/Images/DUBAI1.jpeg",
    title: "SYSNE OF DUBAI",
    description:
      "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 7,
  },
  {
    image: "/Images/DUBAI2.jpeg",
    title: "SYSNE OF DUBAI",
    description:
      "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 7,
  },
  {
    image: "/Images/DUBAI3.jpeg",
    title: "SYSNE OF DUBAI",
    description:
      "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
    date: "Aug 5, 2013",
    commentsnumber: 7,
  },
];

$(document).ready(function () {
  const cardsWrapper = $("#cards-wrapper");
  for (let [index, cardData] of cardsData.entries()) {
    const cardHTML = `
    <div class="col-12 col-sm-3">
<div class=" card p-0 text-center">
        <img
          src="${cardData.image}"
        />
        <div class="card-body">
          <h5 class="card-title">${cardData.title}</h5>
          <p class="card-text">
          ${cardData.description}
          </p>
        </div>
        <div class="date-comments d-flex  p-4 gap-5">
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
      </div>
 `;
    cardsWrapper.html(cardsWrapper.html() + cardHTML);
  }
});
