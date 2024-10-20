import { useState } from 'react'
import "./App.css";
import Title from "./Title.jsx";
import Itemmenu from "./Itemmenu.jsx";
import InputHeader from "./InputHeader.jsx";
import TitlePage from "./TitlePage.jsx";
import Background from "./Background.jsx";
import ImgBackground from "./assets/backgroundImg.svg";
import Para from "./Para.jsx";
import Item from "./ListItem.jsx"
import Anh1 from "./assets/Anh1A.svg";
import Anh2 from "./assets/Anh2A.svg";
import Anh3 from "./assets/Anh3A.svg";
import Anh4 from "./assets/Anh4AA.svg";
import Anh5 from "./assets/Anh5A.svg";
import Anh6 from "./assets/Anh6A.svg";
import ItemList from './data.js'
import moviesData from './infoItem.js'


function App() {


  
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleItemClick = (movie) => {
    setSelectedMovie(movie);
  };


  return (
    <>
      <div className="main">
        <div className="header">
          <Title titlemenu="Anonime" />
          <Itemmenu namemenu="Home" />
          <Itemmenu namemenu="List anime" />
          <InputHeader />
        </div>
        <div className="titlePage">
          <TitlePage Titlepage="Explore">
            <p
              style={{
                fontSize: "22px",
                fontWeight: "400",
                color: "#868686",
                lineHeight: "25px",
              }}
            >
              What are you gonna watch today ?
            </p>
          </TitlePage>
        </div>
        <div
        className="slider"
        >
          <Background imgback={ImgBackground} />

          {selectedMovie && <><div className="intro">
          <Title titlemenu={selectedMovie.movieName} />
          <Para para={selectedMovie.description}/>

          </div></>} 
          

        </div>
        <div className="content">
      <Title titlemenu="New Release" />
          <div className="list" style={{
            color:"#fff",
            textAlign:"center",
            
          }}>
          {moviesData.map((movie) => (
            <Item
              key={movie.id}
              Itemimg={movie.image}
              chaper={`Episode ${movie.episode}`}
              nameItem={movie.movieName}
              onClick={() => handleItemClick(movie)} // Gọi hàm khi click
            />
          ))}
          {/* <Item Itemimg={Anh1} chaper="Episode 1018" nameItem="One Piece" />
          <Item Itemimg={Anh2} chaper="Episode 250" nameItem="Boruto Naruto Next Generations" />
          <Item Itemimg={Anh3} chaper="Episode 10" nameItem="Spy X Family" />
          <Item Itemimg={Anh4} chaper="Episode 118" nameItem="Shingeki no kyoujin" />
          <Item Itemimg={Anh5} chaper="Episode 018" nameItem="One PieceCaptain Tsubasa" />
          <Item Itemimg={Anh6} chaper="Episode 318" nameItem="Aoashi" /> */}
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
