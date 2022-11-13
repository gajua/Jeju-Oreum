// https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=1&perPage=10&serviceKey=3MCBWEYPV4%2BY4Un8XqdBpFBiaGQKGsEVpC1HIK1DCoHqjNlhaUGcwjBIJGDYeTaTOiG4GKJorKXpGpfNpOEjhQ%3D%3D
const arr = [];
const marker = [{
  "Name": "KIS",
  "lat": 33.289631,
  "lng": 126.283982,
}, {
  "Name": "NLCS",
  "lat": 33.297159,
  "lng": 126.288322,
}, {
  "Name": "BHA",
  "lat": 33.291213,
  "lng": 126.287798,
}, {
  "Name": "SJA",
  "lat": 33.283767,
  "lng": 126.283465,
}];

const data = marker;
      function initMap() {
        const jeju = { lat: 33.3616658, lng: 126.5204118 };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 11,
          center: jeju,
        });

        new google.maps.Marker({
          position: jeju,
          map: map,
        });

        new google.maps.Marker({
          position: { lat: data[0]["lat"], lng: data[0]["lng"] },
          map: map,
        });

        new google.maps.Marker({
          position: { lat: data[1]["lat"], lng: data[1]["lng"] },
          map: map,
        });

        new google.maps.Marker({
          position: { lat: data[2]["lat"], lng: data[2]["lng"] },
          map: map,
        });

        new google.maps.Marker({
          position: { lat: data[3]["lat"], lng: data[3]["lng"] },
          map: map,
        });
        const infowindow = new google.maps.InfoWindow({
          content: "Hello <br> World!",
        });
      }


  

class OreumList {
  constructor() {
    this.oreumList = document.querySelector(".list-oreum");
  }
  async setup() {
    await this.loadData((json) => {
      this.jejuOreum(json);
    });
  }

  async loadData(callback) {
    const response = await fetch(
      "https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=1&perPage=90&serviceKey=3MCBWEYPV4%2BY4Un8XqdBpFBiaGQKGsEVpC1HIK1DCoHqjNlhaUGcwjBIJGDYeTaTOiG4GKJorKXpGpfNpOEjhQ%3D%3D"
    );
    if (response.ok) {
      callback(await response.json());
    } else {
      alert("통신에러~!");
    }
  }

  jejuOreum(data) {
    const docFrag = document.createDocumentFragment("li");
    data.data.forEach((el) => {
      arr.push(el);
    });
    console.log(arr.slice(0, 10));
    console.log(arr.slice(10, 20));
    console.log(arr.slice(20, 30));
    console.log(arr.slice(30, 40));
    console.log(arr.slice(40, 50));
    console.log(arr.slice(50, 60));
  }
}
const oreumList = new OreumList();
oreumList.setup();
