var pagedata = [
{
pageId: 1561658659434,
pageItemName: "Prolog Programming for Artificial Intelligence[finalrevise.com]",
coverUrl:
"http://finalrevise.com/cover/Prolog-Programming-for-Artificial-Intelligence.jpg"
},
{
pageId: 1561658659434,
pageItemName: "Programming In Prolog [finalrevise.com]",
coverUrl:
"http://finalrevise.com/cover/Programming-In-Prolog.jpg"
},
{
pageId: 1561658659434,
pageItemName: "Artificial Intelligence McGraw Hill[finalrevise.com]",
coverUrl:
"http://finalrevise.com/cover/Artificial-Intelligence-McGraw-Hill.jpg"
},
{
pageId: 1561658659434,
pageItemName: "Artificial Intelligence in Medicine[finalrevise.com]",
coverUrl:
"http://finalrevise.com/cover/Artificial-Intelligence-in-Medicine.jpg"
},
{
pageId: 1561658659434,
pageItemName: "Artificial Intelligence Illuminated[finalrevise.com]",
coverUrl:
"http://finalrevise.com/cover/Artificial-Intelligence-Illuminated.jpg"
},
{
pageId: 1561658659434,
pageItemName: "Artificial Intelligence for Games[finalrevise.com]",
coverUrl:
"http://finalrevise.com/cover/Artificial-Intelligence-for-Games.jpg"
},
{
pageId: 1561658659434,
pageItemName: "Artificial Intelligence A Guide to IntelligentSystems [finalrevise.com]",
coverUrl:
"http://finalrevise.com/cover/Artificial-Intelligence-A-Guide-to-Intelligent-Systems.jpg"
},
{
pageId: 1561658659434,
pageItemName: "Artificial Intelligence A Modern Approach[finalrevise.com]",
coverUrl:
"http://finalrevise.com/cover/Artificial-Intelligence-A-Modern-Approach.jpg"
}
];
//function pagetemplate(page) {
//    return `
//<div class="container">
//<div class="row">
//<div class="col-4">
//<img class="page" src="${page.coverUrl1}">
//<h2 class="page-name">${page.pageId}</h2>
//</div>
//<div class="col-4">
//<img class="page" src="${page.coverUrl2}">
//<h2 class="page-name">${page.pageId}</h2></div>
//<div class="col-4">
//<img class="page" src="${page.coverUrl3}">
//<h2 class="page-name">${page.pageId}</h2></div>
//</div>
//</div>
//</div>
//</div>
//`
//}
//document.getElementById("app").innerHTML = `
// <h1 class= "app-title"> Artificial Intelligence </h1>
//${pagedata.map(pa
console.log(pagedata)
var addImage=document.createElement("img");
addImage.src=pagedata[0].coverUrl;
addImage.height=300;
addImage.width=300;
addImage.style.margin=40
document.body.appendChild(addImage)
console.log(addImage)
var addImage2=document.createElement("img");
addImage2.src=pagedata[1].coverUrl;
addImage2.height=300;
addImage2.width=300;
addImage2.style.margin=40
document.body.appendChild(addImage)
document.body.appendChild(addImage2)
console.log(addImage)
var addImage3=document.createElement("img");
addImage3.src=pagedata[2].coverUrl;
addImage3.height=300;
addImage3.width=300;
addImage3.style.margin=40
document.body.appendChild(addImage2)
document.body.appendChild(addImage3)
console.log(addImage)
var element = document.createElement("br");
document.body.appendChild(addImage3)
document.body.appendChild(element)
var addImage4=document.createElement("img");
addImage4.src=pagedata[3].coverUrl;
addImage4.height=300;
addImage4.width=300;
addImage4.style.margin=40
document.body.appendChild(element)
document.body.appendChild(addImage4)
console.log(addImage)
var addImage5=document.createElement("img");
addImage5.src=pagedata[4].coverUrl;
addImage5.height=300;
addImage5.width=300;
addImage5.style.margin=40
document.body.appendChild(addImage4)
document.body.appendChild(addImage5)
console.log(addImage)
var addImage6=document.createElement("img");
addImage6.src=pagedata[5].coverUrl;
addImage6.height=300;
addImage6.width=300;
addImage6.style.margin=40
document.body.appendChild(addImage5)
document.body.appendChild(addImage6)
console.log(addImage)

var addImage7=document.createElement("img");
addImage7.src=pagedata[6].coverUrl;
addImage7.height=300;
addImage7.width=300;
addImage7.style.margin=40
document.body.appendChild(addImage6)
document.body.appendChild(addImage7)
console.log(addImage)
var element2 = document.createElement("br");
document.body.appendChild(addImage6)
document.body.appendChild(element2)
var addImage8=document.createElement("img");
addImage8.src=pagedata[7].coverUrl;
addImage8.height=300;
addImage8.width=300;
addImage8.style.margin=40
document.body.appendChild(addImage7)
document.body.appendChild(addImage8)
console.log(addImage)


