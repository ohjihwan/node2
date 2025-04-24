import express from "express"
import fs from "fs"

const app = express();

app.get("/", (req, res) => {
	fs.readFile("login2.html", (err, data) => {
		if(err) {
			res.status(500);
			return res.send("파일 읽기 오류")
		}
		res.status(200).set({"Content-Type": "text/html"});
		res.send(data);
	});
});

// http://127.0.0.1:3000/login?userid=apple&userpw=1234
app.get("/login", (req, res) => {
	console.log("login 호출!(GET)");
	console.log(req.query);
	const { userid, userpw } = req.query; 
	console.log("아이디", userid);
	console.log("비밀번호", userpw);

	res.setHeader('Access-Control-Allow-Origin', '*');

	res.send("로그인 요청 처리 완료"); 
})

// result.html을 제공하는 라우트 추가
app.get("/result.html", (req, res) => {
    fs.readFile("result.html", (err, data) => {
        if (err) {
            res.status(500);
            return res.send("result.html 파일 읽기 오류");
        }
        res.status(200).set({ "Content-Type": "text/html" });
        res.send(data);
    });
});

app.listen(3000, () => {
	console.log("서버 실행 중")
});