import { OreumList } from "./app.js";
import { initPage } from "./pagination.js";


const oreumList = new OreumList();
await oreumList.setup(1, 10);
initPage(oreumList);

console.dir(oreumList.oreumList.children);
