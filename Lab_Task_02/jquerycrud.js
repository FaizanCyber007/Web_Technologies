// let search = $("#submit-btn").click.val();
const gettingData = (count) => {
  $.ajax({
    // url: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6a2b20b0fdfc491ba6afa1f6a37c565f",
    url: `https://newsapi.org/v2/everything?q=apple&sortBy=popularity&pageSize=10&page=${count}&apiKey=6a2b20b0fdfc491ba6afa1f6a37c565f`,
    method: "GET",
    success: function (data) {
      console.log("Fetching Data....");
      data.articles.forEach(function (article) {
        console.log(article);
        var card = `
                  <div class="card my-3 mx-3" style="width: 18rem">
                    <img src="${article.urlToImage}" class="card-img-top" alt="News Image" />
                    <div class="card-body text-center">
                      <h5 class="card-title">${article.title}</h5>
                      <p class="card-text">${article.description}</p>
                      <a target="_blank" href="${article.url}" class="btn btn-primary">Visit Site!</a>
                    </div>
                  </div>
                  `;
        $(".displayData").append(card);
      });
    },
    error: function (error) {
      console.error("Error:", error);
    },
  });
};

let count = 1;
$(document).ready(gettingData(count));
// $("#submit-btn").click(function (e) {
//     e.preventDefault();
//   let search = $("#search-bar").val();
//   gettingData(search);
// });

$(window).scroll(function () {
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    gettingData(count);
    count++;
  }
});
