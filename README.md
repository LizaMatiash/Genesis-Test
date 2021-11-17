# Genesis-Test

this file was created because user page isn`t done

Логіка є такою:


Підключення колекції Get User Feed за посиланням що залежить від нікнейму url+link (data.js)
Парсування інформації за допомогою JSON.parse()
Завантаження анімованих заставок шляхом .itemList[і].video.dynamicCover;
При нажаттю по заставці (onclick) підключення основного відео шляхом .itemList[і].video.playAddr; 

Приблизна реалізація:

let link = localStorage.getItem('autorLink');

const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
    let userFeed = this.responseText;
    var informationUser = JSON.parse(userFeed);
    
    document.getElementById('video_1').src=informationUser.itemList[1].video.dynamicCover;

	document.getElementById('video_1').onclick = function VideoLoad() {
    	     document.getElementById('video_1').src=informationUser.itemList[1].video.playAddr; 
	}
});

xhr.open("GET", "https://tiktok33.p.rapidapi.com/user/info/" +link);
xhr.setRequestHeader("x-rapidapi-host", "tiktok33.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66");

xhr.send(data);
