window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

// TODO: Modify to use Fetch API
function fetchQuotes(topic, count) {

   let url = "http://cs.harding.edu/fmccown/zybooks/quotes/quotes.php?topic=" + topic + "&count=" + count;
   let quoteHttp = new XMLHttpRequest();
   quoteHttp.addEventListener("load", responseReceivedHandler);
   quoteHttp.responseType = "json";
   quoteHttp.open("GET", url, true);
   quoteHttp.send();
}

function responseReceivedHandler() {
   let html = "";

   if (this.response.error) {
      html = this.response.error;
   } else {
      html += "<ol>";

      for (let c = 0; c < this.response.length; c++) {
         html += `<li>Quote ${this.response[c].quote} - ${this.response[c].source}</li>`;

/*
   let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>Quote ${c} - Anonymous</li>`;
   }
   html += "</ol>";
   */

   document.querySelector("#quotes").innerHTML = html;
}
