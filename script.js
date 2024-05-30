const starWarsData = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg/220px-Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];


document.getElementById("charactersOnclick").style.backgroundColor = "#fade4b";
function renderCharacters() {
  const element = document.getElementById("cardsOfCharacters");
  element.classList.toggle("carsdofrow");
  const formdata = document.getElementById("homeworldsFilterContainer");
  formdata.classList.toggle("formRadio");
  const data = document.getElementById("charactersOnclick");
  data.classList.toggle("after");
  const removeBackgroundColor = document.getElementById("charactersOnclick");
  if (removeBackgroundColor.style.backgroundColor === "red") {
    removeBackgroundColor.style.backgroundColor = "#fade4b";
  } else {
    removeBackgroundColor.style.backgroundColor = "red";
  }
  const removeInnerHtml = document.getElementById("charactersOnclick");
  if (removeInnerHtml.innerHTML === "Karakterleri Gizle") {
    removeInnerHtml.innerHTML = "Karakterleri Göster";
  } else {
    removeInnerHtml.innerHTML = "Karakterleri Gizle";
  }
}



buildCharacters(starWarsData);
function buildCharacters(data) {
  const container = document.getElementById("cardsOfCharacters");

  container.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let carsdofrow = `
   <div class="col-5 mb-3">
    <div class="card" style="background-color: #1d1e1f; color: white;">
    <img src="${data[i].pic}" alt="..." widht="300px" height="250px">
    <div class="m-3">${data[i].name}</div>
    <div class="m-3">${data[i].homeworld}</div>
    </div>
   </div>`;
    container.innerHTML += carsdofrow;
  }
}



const homeworldRaw = starWarsData.map(function (starWars) {
  return starWars.homeworld;
});
homeworldRaw[18] = "other";

function uniqBy(homeworldRaw, key) {
  let repeating = {};
  return homeworldRaw.filter(function (item) {
    let k = key(item);
    return repeating.hasOwnProperty(k) ? false : (repeating[k] = true);
  });
}
homeworldsUnique = uniqBy(homeworldRaw, JSON.stringify);

const homeworldsLowercase = homeworldsUnique.map(function (value) {
  return value.toLowerCase();
});

const homeworlds = homeworldsLowercase;

formHomeWorlds(homeworlds);

function formHomeWorlds(value) {
  const radio = document.getElementById("homeworldsFilterContainer");
  radio.innerHTML = "";

  for (let i = 0; i < value.length; i++) {
    let formRadio = `<div class="form-check">
    <input class="form-check-input" type="radio" name="homeworlds" id="homeworlds-${value[i]}" value="${value[i]}" onclick ="homeworldFiltred(value)">
    <label clas="form-check-label" for="homeworlds-${value[i]}">
      ${value[i]}
    </label>
     </div>`;
    radio.innerHTML += formRadio;
  }
}

function homeworldFiltred(homeworlds) {
  const container = document.getElementById("cardsOfCharacters");
  container.innerHTML = "";    
  starWarsData.filter((karakter) => {
    if (karakter.homeworld === homeworlds) {
        
        let carsdofrow = `
   <div class="col-5 mb-3">
    <div class="card" style="background-color: #1d1e1f; color: white;">
    <img src="${karakter.pic}" alt="..." widht="300px" height="250px">
    <div class="m-3">${karakter.name}</div>
    <div class="m-3">${karakter.homeworld}</div>
    </div>
   </div>`;
        container.innerHTML += carsdofrow;
    }
  });

}
