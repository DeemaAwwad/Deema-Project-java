let mode = window.localStorage.getItem("darkMode");
let darkBtn = document.querySelector("[name=dark-mode]");




if (mode === "enabled") {
    document.body.setAttribute("class", "darkmode");
    darkBtn.style.cssText = "background-color: var(--brand-secondary)";
   

  
  }

  darkBtn.addEventListener("click", () => {
    let mode = window.localStorage.getItem("darkMode");
    if (mode !== "enabled") {
      document.body.setAttribute("class", "darkmode");
      localStorage.setItem("darkMode", "enabled");
      darkBtn.style.cssText = "background-color: var(--brand-secondary)";
    
  
    } else {
      document.body.classList.remove("darkmode");
      localStorage.setItem("darkMode", null);
      darkBtn.style.cssText = "background-color: var(--bg_default)";
     
    }
  });6



 /* const urlParams = new URLSearchParams(window.location.search);
  const topicId = urlParams.get('id');
  
 async function fetchTopicDetails(topicId) {
 

    const response = await fetch(`https://tap-web-1.herokuapp.com/topics/details/${topicId}`);
    const data = await response.json();
    console.log (data);
    topicDetails(data);
  }
  

  fetchTopicDetails(topicId)
 

   function topicDetails() {
   
    window.location.search = `details.html?id=${topicId}`;
      const languagePage = document.getElementById('languge-page '); 
      languagePage.innerHTML = '';
      for (let topic of data) {
              const typeLanguage = document.createElement('div');
              typeLanguage.classList.add('languge-type', 'container');
              const cardCategory = document.createElement('span');
              cardCategory.innerText = topic.category;
              typeLanguage.appendChild(cardCategory);
              const topicName = document.createElement('h2');
              topicName.innerText = topic.category;
              typeLanguage.appendChild(topicName);
              const stars = document.createElement('div');
              stars.classList.add('stars');
            
              for (let i = 0; i < topic.rating; i++) {
                const star = document.createElement('ion-icon');
                star.name = 'star';
                stars.appendChild(star);
              }
              for (let i = topic.rating; i < 4; i++) {
                const starOutline = document.createElement('ion-icon');
                starOutline.name = 'star-outline';
                stars.appendChild(starOutline);
              }
              cardContent.appendChild(stars);      

              const description = document.createElement('p');
              description.innerText = topic.description;
              typeLanguage.appendChild(description);
        languagePage.appendChild(typeLanguage);
      }
    } */
    



  