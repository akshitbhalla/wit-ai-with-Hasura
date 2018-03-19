function getBG(){
	filename = new Array(7);
	filename[0] = 'bg1.jpg';
	filename[1] = 'bg2.jpg';
	filename[2] = 'bg3.jpg';
  filename[3] = 'bg4.jpg';
	filename[4] = 'bg5.jpg';
	filename[5] = 'bg6.jpg';
int random;
random = Math.floor((Math.random() * 4) + 0);
 document.body.style.backroundImage = 'url('+filename[random]+')'
 console.log("OK")
   }
