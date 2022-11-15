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

    const jeju = { lat: 33.3616658, lng: 126.5204118 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: jeju,
    });
    const pos = data.data;
    const infowindow = new google.maps.InfoWindow();

    for (let i = 0; i < pos.length; i++) {
      // console.log(pos[i].경도);
      let 오름명 = pos[i].오름명;
      let 설명 = pos[i].설명;
      let 위도 = Number(pos[i].위도);
      let 경도 = Number(pos[i].경도);
      let marker = new google.maps.Marker({
        position: {
          lat: 위도,
          lng: 경도,
        },
        map: map,
      });
      marker.addListener("click", () => {
        console.log(설명);
        map.setCenter(markerPosition);

      });
      marker.addListener('mouseover', ()=>{
        const infowindow = new google.maps.InfoWindow({
          content:오름명,
        });
        infowindow.open(map, marker);
      })
      
    }
  }
}

const oreumList = new OreumList();
oreumList.setup();
