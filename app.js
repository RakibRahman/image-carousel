console.log("ok");
const output = document.getElementById("output");
//Image containers
const imgBox = [
  {
    url: "https://picsum.photos/400/400?grayscale",
    title: "Demo Pic",
    subText: "My pictures are great",
  },
  {
    url: "https://picsum.photos/400/400?grayscale",
    title: "My Pictures",
    subText: "Do you like these pics?",
  },
  {
    url: "https://picsum.photos/400/400?grayscale",
    title: "My Favorite Pictures",
    subText: "Here are my some favorite pictures",
  },
];
imgBox.forEach((img, index, arr) => {
  //   console.log(img);
  //   console.log(index);
  //   console.log(arr);
  //   let pics = `<img src="${img.url}" >`;
  //   output.innerHTML += pics;
  let pic = document.createElement("img");
  pic.src = img.url;
  output.append(pic);
});
