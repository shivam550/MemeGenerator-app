
import '../styles/Meme.css'
// import memesData from '../components/memesData.js';
import React,{useState , useEffect} from 'react';


function Meme(){

    // const [memImage , setmemeimage] = useState('http://i.imgflip.com/1bij.jpg');
    const [memeImg,setMemeImg] = useState({

        toptext :'',
        BottomText :'',
        randomImg :'http://i.imgflip.com/1bij.jpg'
    })

    const [allmemesImg,setallmemesImg] = useState([])

    useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res=> res.json())
        .then(data => setallmemesImg(data.data.memes))
    },[])
    // console.log(allmemesImg)

    function getNewImg(){
        // const memesArray = allmemesImg.data.memes;
        const randomNumber = Math.floor(Math.random() * allmemesImg.length);
        // setmemeimage(memesArray[randomNumber].url);
        const url = allmemesImg[randomNumber].url;
        setMemeImg(prevImg =>({...prevImg,randomImg:url}))

        // console.log(url);
    }

    function handleClick(event){
        const {name,value} = event.target
        setMemeImg(prevImg=>({
            ...prevImg,
            [name]:value
        }))
    }

    return(
        <main>
            <div className="form">
                <input className="form--input"
                 placeholder="Top Text"
                 type="text"
                 name='toptext'
                 value={memeImg.toptext}
                 onChange={handleClick}
                 />
                <input className="form--input"
                 placeholder ="Bottom Text"
                 type="text"
                 name='BottomText'
                 value={memeImg.BottomText}
                 onChange={handleClick}
                 />
                <button onClick ={getNewImg} className="btn">Get new Meme Image 🖼</button>
            </div>
            <div className='meme'>
                <img src={memeImg.randomImg} alt='backend-img' className='memes-container' />
                <h2 className="meme--text top">{memeImg.toptext}</h2>
                <h2 className="meme--text bottom">{memeImg.BottomText}</h2>
            </div>
           
        </main>
    )
}

export default Meme;