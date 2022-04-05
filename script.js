var myurl = "https://random-words-api.vercel.app/word";
  console.log(myurl);
  fetch(myurl, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json[0]);
      const word = document.createTextNode(json[0].word);
      const container = document.getElementById("word");
      container.textContent = "";
      container.appendChild(word);

      const definition = document.createTextNode(json[0].definition);
      const container1 = document.getElementById("definition");
      container1.textContent = "Definition: ";
      container1.appendChild(definition);

      const pronunciation = document.createTextNode(json[0].pronunciation);
      const container2 = document.getElementById("pronunciation");
      container2.textContent = "Pronunciation: ";
      container2.appendChild(pronunciation);
    });