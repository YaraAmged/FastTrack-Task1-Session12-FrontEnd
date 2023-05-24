const cardsData = [{image:"", title:"yara", description:"", date:"", commentsnumber:0}]

$(document).ready(function(){
const cardsWrapper = $("#cards-wrapper");
for (let [index, cardData] of cardsData.entries()){
const cardHTML =`
<div class="card col-12 col-sm-3 p-0">
        <img
          src="/Images/WhatsApp Image 2023-05-23 at 9.22.09 PM (1).jpeg"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">${cardData.title}</h5>
          <p class="card-text">
            Denatibus et magnis dis parturient montes, nascetur ridiculus mus
          </p>
        </div>
        <div class="d-flex">
          <div class="d-flex">
            <i class="fa-regular fa-calendar"></i>
            <p>Aug 5, 2013</p>
          </div>
          <div class="d-flex">
            <i class="fa-regular fa-comments"></i>
            <p>22 Comments</p>
          </div>
        </div>
      </div>
 `;
cardsWrapper.html(cardsWrapper.html()+cardHTML);
}
})