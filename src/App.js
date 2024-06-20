import Header from "./components/Header";
import Platform from "./components/Platform";
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import instagram from './images/icon-instagram.svg';
import youtube from './images/icon-youtube.svg';
import up from './images/icon-up.svg';
import down from './images/icon-down.svg';
import './css/style.css';
import Today from "./components/Today"; 

function App() {
  return (
    <>
        <div className="topItem"></div>
        <div className="App">
          <Header />
          <div className="platforms">
            <Platform 
                iconImg={facebook} 
                altText="facebook" 
                profileName="@nathanf" 
                followersNum="1987" 
                type="followers" 
                statusImg={up} 
                altTextStatus="up" 
                number="12"
                borderColor="hsl(208, 92%, 53%)"
                textColor="hsl(163, 72%, 41%)"/>

            <Platform 
                iconImg={twitter} 
                altText="twitter" 
                profileName="@nathanf" 
                followersNum="1044" 
                type="followers" 
                statusImg={up} 
                altTextStatus="up" 
                number="99"
                borderColor="hsl(203, 89%, 53%)"
                textColor="hsl(163, 72%, 41%)"/>

            <Platform 
                iconImg={instagram} 
                altText="instagram" 
                profileName="@realnathanf" 
                followersNum="11k" 
                type="followers" 
                statusImg={up} 
                altTextStatus="up" 
                number="1099"
                textColor="hsl(163, 72%, 41%)"
                borderImg="linear-gradient(to right,hsl(37, 97%, 70%),hsl(329, 70%, 58%)) 1 0 0 0"/>

            <Platform 
                iconImg={youtube} 
                altText="youtube" 
                profileName="@Nathan F." 
                followersNum="8239" 
                type="subscribers" 
                statusImg={down} 
                altTextStatus="down" 
                number="144"
                borderColor="hsl(348, 97%, 39%)"
                textColor="hsl(356, 69%, 56%)" />
          </div>
          <h1 className="today">Overview - Today</h1>
          <div className="today-notifications">
            <Today 
              Pagetext="Page Views"
              imgSrc={facebook}
              altText="facebook"
              number="87"
              color="hsl(163, 72%, 41%)"
              imgType={up}
              altImgType="up"
              percentage="3"
              />
            <Today 
              Pagetext="Likes"
              imgSrc={facebook}
              altText="Likes"
              number="52"
              color="hsl(356, 69%, 56%)"
              imgType={down}
              altImgType="down"
              percentage="2"
              />
            <Today
              Pagetext="Likes"
              imgSrc={instagram}
              altText="instagram"
              number="5462"
              color="hsl(163, 72%, 41%)"
              imgType={up}
              altImgType="up"
              percentage="2257"
              />
            <Today 
              Pagetext="Profile Views"
              imgSrc={instagram}
              altText="instagram"
              number="52k"
              color="hsl(163, 72%, 41%)"
              imgType={up}
              altImgType="up"
              percentage="1375"
              />
            <Today 
              Pagetext="Retweets"
              imgSrc={twitter}
              altText="twitter"
              number="117"
              color="hsl(163, 72%, 41%)"
              imgType={up}
              altImgType="up"
              percentage="303"
              />
            <Today 
              Pagetext="Likes"
              imgSrc={twitter}
              altText="twitter"
              number="507"
              color="hsl(163, 72%, 41%)"
              imgType={up}
              altImgType="up"
              percentage="553"
              />
            <Today 
              Pagetext="Likes"
              imgSrc={youtube}
              altText="youtube"
              number="107"
              color="hsl(356, 69%, 56%)"
              imgType={down}
              altImgType="down"
              percentage="19"
              />
            <Today 
              Pagetext="Total Views"
              imgSrc={youtube}
              altText="youtube"
              number="1407"
              color="hsl(356, 69%, 56%)"
              imgType={down}
              altImgType="down"
              percentage="12"
              />
          </div>
        </div>
    </>
  );
}

export default App;  
