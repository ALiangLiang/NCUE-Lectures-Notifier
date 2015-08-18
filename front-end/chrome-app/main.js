const url = "";

var req = new Request(url);
fetch(req).then(function (resp) {
	resp.json().then(function (json) {
		json
		chrome.notifications.create(seq, {
			"type" : "basic",
			"iconUrl" : "icon/icon128.png",
			"title" : 新的講座情報,
			"message" : ""
		}, function () {});
		chrome.notifications.onclicked.addEventListener(function (notificationId) {
      window.open("http://aps.ncue.edu.tw/sign_up/show_crs.php?crs_seq=" + notificationId);
		});
	})
});
