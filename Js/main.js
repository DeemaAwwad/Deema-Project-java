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
  });

  let favourites = localStorage.getItem("my-favourites");
  let favBtn = document.querySelector("[name=favourites]");
  
  if (favourites === "enabled") {
    let favBar = document.querySelector(".my-favourites");
    favBar.style.display = "block";
    favBtn.style.cssText = "background-color: var(--brand-secondary)";
  }
  
  favBtn.addEventListener("click", () => {
    let favBar = document.querySelector(".my-favourites");
    let favourites = localStorage.getItem("my-favourites");
    if (favourites !== "enabled") {
      favBar.style.display = "block";
      localStorage.setItem("my-favourites", "enabled");
      favBtn.style.cssText = "background-color: var(--brand-secondary)";
    } else {
      favBar.style.display = "none";
      localStorage.setItem("my-favourites", null);
      favBtn.style.cssText = "background-color: var(--bg_default)";
    }
  });

 


  let data;
  function debounce(func, delay) {
      let timeoutId;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(context, args);
        }, delay);
      };
    }


        
          async function render() {
              const response = await fetch("https://tap-web-1.herokuapp.com/topics/list");
               data = await response.json();
              renderData(data);
            }
        
           
            render();

 
    function renderData(data) {
      let counter=0;
     
      const cardsSection = document.getElementById('cards'); 
      cardsSection.innerHTML = '';
      for (let topic of data) {
      
        const card = document.createElement('div');
        card.classList.add('card');
        const image = document.createElement('img');
        image.src = `./imgs/${topic.image}`
        image.alt = topic.name;
        card.appendChild(image);
  
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
  
        const cardCategory = document.createElement('h3');
        cardCategory.classList.add('topic-name', 'trim-one');
        cardCategory.innerText = topic.category;
        cardContent.appendChild(cardCategory);
        
        const cardTitle = document.createElement('h4');
        cardTitle.classList.add('topic-type', 'trim-two');
              cardTitle.innerText = topic.topic;
              cardContent.appendChild(cardTitle);
  
  
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
  
      
  
        const author = document.createElement('p');
        author.classList.add('author');
        author.innerText = 'Author: ' + topic.name;
        cardContent.appendChild(author);
        
  
        card.appendChild(cardContent); 
        cardsSection.appendChild(card);

        counter++;
        const countResult = document.querySelector('.resultsNumber');
        countResult.innerHTML = counter;
      }
    }

   
    const handleSearch = debounce(async () => {
     
      
      const searchQuery = document.querySelector(".search-input").value;

              const response = await fetch(`https://tap-web-1.herokuapp.com/topics/list?phrase=${searchQuery}`);
              const data = await response.json();
  

      renderData(data); 

    }, 300);




