function getBG(){
	filename = new Arrray(5);
	filename[0] = '"https://avatars0.githubusercontent.com/u/4723433?s=200&v=4"';
	filename[1] = '"https://cdn1.lockerdomecdn.com/uploads/776acc8e156937bee5f5ef344c66484701e86d3d38880aabdcd9879a62cac8d6_large"'
	filename[2] = '"https://reactjs.org/logo-og.png"'
    filename[3] = '"https://pbs.twimg.com/media/CL62wM2WcAAhSsy.jpg"'

int random;
random = Math.floor((Math.random() * 4) + 0);
 document.body.style.backroundImage = 'url('+filename[random]+')'
 console.log("OK")
   }