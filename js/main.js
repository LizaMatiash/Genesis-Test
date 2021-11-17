const data2 = null;

const xhr2 = new XMLHttpRequest();
xhr2.withCredentials = true;

xhr2.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		let videoString = this.responseText;
    console.log(videoString);
    var obj = JSON.parse(videoString);
    console.log(obj);
	  let = videoCounter = 0;

		document.getElementById('videoId1').src=obj[0].videoUrl;
		document.getElementById('nickname').innerText=obj[0].authorMeta.name;
		document.getElementById('text').innerText=obj[0].text;
		document.getElementById('logo').src=obj[0].authorMeta.avatar;
		document.getElementById('videoLikes').innerText= convert(obj[0].diggCount);
		document.getElementById('videoComments').innerText= convert(obj[0].commentCount);
		document.getElementById('videoShares').innerText= convert(obj[0].shareCount);


		let AN = obj[0].authorMeta.name;
		localStorage.setItem('autorLink', AN);

    document.getElementById('changerUp').onclick = function VideoChange() {
      if (videoCounter <= 28) {
        videoCounter+= 1;
      }
      else{
        videoCounter = 0;
      }
			console.log(videoCounter);
      document.getElementById('videoId1').src=obj[videoCounter].videoUrl;
      document.getElementById('nickname').innerText=obj[videoCounter].authorMeta.name;
      document.getElementById('text').innerText=obj[videoCounter].text;
      document.getElementById('logo').src=obj[videoCounter].authorMeta.avatar;
			document.getElementById('videoLikes').innerText= convert(obj[videoCounter].diggCount);
			document.getElementById('videoComments').innerText= convert(obj[videoCounter].commentCount);
			document.getElementById('videoShares').innerText= convert(obj[videoCounter].shareCount);
			let AN1 = obj[videoCounter].authorMeta.name;
			localStorage.setItem('autorLink', AN1);
    }

		document.getElementById('changerDown').onclick = function VideoChange() {
			if (videoCounter >= 1) {
				videoCounter-= 1;
			}
			else{
				videoCounter = 29;
			}
			console.log(videoCounter);
			document.getElementById('videoId1').src=obj[videoCounter].videoUrl;
			document.getElementById('nickname').innerText=obj[videoCounter].authorMeta.name;
			document.getElementById('text').innerText=obj[videoCounter].text;
			document.getElementById('logo').src=obj[videoCounter].authorMeta.avatar;
			document.getElementById('videoLikes').innerText= convert(obj[videoCounter].diggCount);
			document.getElementById('videoComments').innerText= convert(obj[videoCounter].commentCount);
			document.getElementById('videoShares').innerText= convert(obj[videoCounter].shareCount);
			let AN1 = obj[videoCounter].authorMeta.name;
			localStorage.setItem('autorLink', AN1);
		}
	}
});

xhr2.open("GET", "https://tiktok33.p.rapidapi.com/trending/feed");
xhr2.setRequestHeader("x-rapidapi-host", "tiktok33.p.rapidapi.com");
xhr2.setRequestHeader("x-rapidapi-key", "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66");

xhr2.send(data2);
