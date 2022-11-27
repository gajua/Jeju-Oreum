const container = document.querySelector(".container");
const closeBtn = document.querySelector(".closeBtn");
export class OreumList {
  constructor() {
    this.modal = document.querySelector(".modal");
    this.modalText = document.querySelector(".text");
    this.oreumList = document.querySelector(".list-oreum");
  }
  async setup(pageNum) {
    await this.loadData((json) => {
      this.jejuOreum(json);
    }, pageNum);
  }

  async loadData(callback, pageNum) {
    const response = await fetch(
      `https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=${pageNum}&perPage=10&serviceKey=3MCBWEYPV4%2BY4Un8XqdBpFBiaGQKGsEVpC1HIK1DCoHqjNlhaUGcwjBIJGDYeTaTOiG4GKJorKXpGpfNpOEjhQ%3D%3D`
    );
    if (response.ok) {
      callback(await response.json());
    } else {
      alert("통신에러~!");
    }
  }

  jejuOreum(data) {
    const docFrag = document.createDocumentFragment("li");

    const jeju = { lat: 33.3616658, lng: 126.5204118 };
    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: jeju,
    });
    const pos = data.data;
    const infowindow = new google.maps.InfoWindow();

    for (let i = 0; i < pos.length; i++) {
      let 오름명 = pos[i].오름명;
      let 설명 = pos[i].설명;
      let 위도 = Number(pos[i].위도);
      let 경도 = Number(pos[i].경도);

      const li = document.createElement("li");
      li.innerHTML = `<img class="oreum-img" src="./src/img/오름 일러스트.jpg" ><p class='oreum-name'>${오름명}</p>`;
      li.data;
      closeBtn.addEventListener("click", () => {
        this.modal.classList.add("none");
      });
      this.oreumList.appendChild(li);
      li.addEventListener("click", info.bind(this));
      function info(e) {
        this.modal.classList.remove("none");
        
        this.modalText.innerHTML = `<h3>${오름명}</h3>  ${설명}`;
        const 위치 = { lat: 위도, lng: 경도 };
        map = new google.maps.Map(document.getElementById("map"), {
          zoom: 12,
          center: 위치,
        });
        const test = pos.find((el) => el.오름명 === 오름명);

        let marker = new google.maps.Marker({
          position: {
            lat: Number(test.위도),
            lng: Number(test.경도),
          },
          map: map,
        });

        marker.addListener("click", () => {
          map.panTo(marker.position);
        });

      }
    }
  }
}


const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
]
const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.querySelector(".header-img")

bgImage.src = `./src/img/${chosenImage}`


