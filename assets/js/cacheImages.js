async function preloadImage(){
	preloadArray = [];
	selectRecordIndex = 0;
	for (item of records){
		var img=new Image();
    img.src=item.primaryimageurl + "?height=600";
    preloadArray.push(img)
    img.onload = ()=>{console.log('h2')}
	}
}

// async function wait(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }

