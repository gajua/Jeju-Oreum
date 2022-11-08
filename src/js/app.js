// https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=1&perPage=10&serviceKey=3MCBWEYPV4%2BY4Un8XqdBpFBiaGQKGsEVpC1HIK1DCoHqjNlhaUGcwjBIJGDYeTaTOiG4GKJorKXpGpfNpOEjhQ%3D%3D



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
      "https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=1&perPage=10&serviceKey=3MCBWEYPV4%2BY4Un8XqdBpFBiaGQKGsEVpC1HIK1DCoHqjNlhaUGcwjBIJGDYeTaTOiG4GKJorKXpGpfNpOEjhQ%3D%3D"
    );
    if (response.ok) {
      callback(await response.json());
    } else {
      alert("통신에러~!");
    }
  }

  jejuOreum(data) {
    const docFrag = document.createDocumentFragment('li')
    data.data.forEach((el)=>{
      console.log(el);
    })
  }
}
const oreumList = new OreumList();
oreumList.setup()