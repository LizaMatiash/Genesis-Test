
let link = localStorage.getItem('autorLink');
console.log(link);


const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
    console.log(11111);
    let informationString = this.responseText;
    var informationAcc = JSON.parse(informationString);
    console.log(informationAcc);
    document.getElementById('avatarUser').src=informationAcc.user.avatarMedium;
    document.getElementById('supscriptionUser').innerText=informationAcc.user.signature;
    document.getElementById('following').innerText= convert(informationAcc.stats.followingCount);
    document.getElementById('follower').innerText= convert(informationAcc.stats.followerCount);
    document.getElementById('likes').innerText= convert(informationAcc.stats.heart);
    document.getElementById('nick').innerText= convert(informationAcc.user.nickname);
    document.getElementById('accountNick').innerText= convert(informationAcc.user.uniqueId);


	}
});

xhr.open("GET", "https://tiktok33.p.rapidapi.com/user/info/" +link);
xhr.setRequestHeader("x-rapidapi-host", "tiktok33.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66");

xhr.send(data);
// document.getElementById('likes').innerText=vidData.cursor;
// console.log(vidData);
// document.getElementById('videoId22').src=vidData.itemList[0].video.dynamicCover;
