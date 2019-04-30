const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res)=> {
    res.send({message: 'Hello Express!'});
});

app.get('/api/customers', (req,res)=>{
    res.send(
        [
            {
            'id':1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '홍길동',
            'birthday': '961222',
            'gender':'남자',
            'job':'대학생'
            },
            {
              'id':2,
              'image': 'https://placeimg.com/64/64/2',
              'name': '김철수',
              'birthday': '941222',
              'gender':'남자',
              'job':'개발자'
             },
             {
                'id':3,
                'image': 'https://placeimg.com/64/64/3',
                'name': '이순이',
                'birthday': '921222',
                'gender':'여자',
                'job':'회사원'
            }      
        ]
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));