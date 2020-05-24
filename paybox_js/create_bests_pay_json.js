const fs = require('fs') // fsモジュール読み込み
 
// ファイル読み込み
fs.readFile("src/assets/json/src/base.json", 'utf8', function (err, json) {
    if (err) {
        throw err
    }
    json = JSON.parse(json)
    console.log(json.paypay_money)
})

// ファイルの書き込み
//fs.writeFileSync("src/assets/test.json","{}");