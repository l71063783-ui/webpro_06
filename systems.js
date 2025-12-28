"use strict"
const express = require("express");

const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let words = [
    {id:1, word:"run", part_of_speech:"v", simple_meaning:"走る、運営する", complex_meaning:"走る、動く、運営する",examples:"He runs every morning. The engine is running. She runs a small café."}
]

let books = [
  {id:1, title:"容疑者Xの献身", auther:"東野圭吾", genre:"推理小説", date:20050825, publisher:"文藝春秋", review:"最後の真相に驚いた。"}
]

let allotropes = [
  {id:1, name:"オゾン", atomic_num:8, structure:"分子結晶", note:"常温では淡青色の気体だが、固体では濃青色。特異な臭気を持ち、強い酸化作用を示す。"}
]



//一覧
app.get("/en", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    res.render('en',{data: words});
});
//新規作成
app.get("/en/create", (req, res) =>{
    res.redirect('/public/en_new.html');
})

//詳細
app.get("/en/:number", (req, res) => {
    const number = req.params.number;
    const detail = words[number];

    res.render('en_detail', { 
        data: detail, 
        id: number 
    });
});

//削除
app.get("/en/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  words.splice( req.params.number, 1 );
  res.redirect('/en');
});


// Create
app.post("/en", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = words.length + 1;
  const word = req.body.word;
  const part_of_speech = req.body.part_of_speech;
  const simple_meaning = req.body.simple_meaning;
  const complex_meaning = req.body.complex_meaning;
  const examples = req.body.examples;
  words.push( { id: id, word: word, part_of_speech: part_of_speech, simple_meaning: simple_meaning, complex_meaning: complex_meaning, examples: examples } );
  console.log( words );
  res.redirect('en');
});

// Edit
app.get("/en/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = words[ number ];
  res.render('en_edit', {id: number, data: detail} );
});

// Update
app.post("/en/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  words[req.params.number].word = req.body.word;
  words[req.params.number].part_of_speech = req.body.part_of_speech;
  words[req.params.number].simple_meaning = req.body.simple_meaning;
  words[req.params.number].complex_meaning = req.body.complex_meaning;
  words[req.params.number].examples = req.body.examples;
  console.log( words );
  res.redirect('/en' );
});

//一覧
app.get("/book", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    res.render('book',{data: books});
});
//新規作成
app.get("/book/create", (req, res) =>{
    res.redirect('/public/book_new.html');
})

//詳細
app.get("/book/:number", (req, res) => {
    const number = req.params.number;
    const detail = books[number];
    
    res.render('book_detail', { 
        data: detail, 
        id: number 
    });
});

//削除
app.get("/book/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  books.splice( req.params.number, 1 );
  res.redirect('/book');
});

// Create
app.post("/book", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = books.length + 1;
  const title = req.body.title;
  const auther = req.body.auther;
  const genre = req.body.genre;
  const date = req.body.date;
  const publisher = req.body.publisher;
  const review = req.body.review;
  books.push( { id: id, title: title, auther: auther, genre: genre, date: date, publisher: publisher, review: review } );
  console.log( books );
  res.redirect('book');
});

app.get("/book/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = books[ number ];
  res.render('book_edit', {id: number, data: detail} );
});

// Update
app.post("/book/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  books[req.params.number].title = req.body.title;
  books[req.params.number].auther = req.body.auther;
  books[req.params.number].genre = req.body.genre;
  books[req.params.number].date = req.body.date;
  books[req.params.number].publisher = req.body.publisher;
  books[req.params.number].review = req.body.review;
  console.log( books );
  res.redirect('/book' );
});

//一覧
app.get("/allotrope", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    res.render('allotrope',{data: allotropes});
});
//新規作成
app.get("/allotrope/create", (req, res) =>{
    res.redirect('/public/allotrope_new.html');
})

//詳細
app.get("/allotrope/:number", (req, res) => {
    const number = req.params.number;
    const detail = allotropes[number];

    res.render('allotrope_detail', { 
        data: detail, 
        id: number 
    });
});

//削除
app.get("/allotrope/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  allotropes.splice( req.params.number, 1 );
  res.redirect('/allotrope');
});


// Create
app.post("/allotrope", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = allotropes.length + 1;
  const name = req.body.name;
  const atomic_num = req.body.atomic_num;
  const structure = req.body.structure;
  const note = req.body.note;
  allotropes.push( { id: id, name: name, atomic_num: atomic_num, structure: structure, note: note } );
  console.log( allotropes );
  res.redirect('allotrope');
});

// Edit
app.get("/allotrope/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = allotropes[ number ];
  res.render('allotrope_edit', {id: number, data: detail} );
});

// Update
app.post("/allotrope/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  allotropes[req.params.number].name = req.body.name;
  allotropes[req.params.number].atomic_num = req.body.atomic_num;
  allotropes[req.params.number].structure = req.body.structure;
  allotropes[req.params.number].note = req.body.note;

  console.log( allotropes );
  res.redirect('/allotrope' );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));