import React, { useState } from 'react';
import { FaTwitter, FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { Container, Header, ListItem, Banner, Button, AboutApp, DownloadInfo, Footer, MenuBar } from '../../styles/Home';

import logo from '../../assets/logo.png';
import banner from '../../assets/banner.png';
import banner2 from '../../assets/banner2.png';
import mockup1 from '../../assets/mockup1-copy.png';
import mockup2 from '../../assets/mockup2.png';
import mockup3 from '../../assets/mockup3.png';
import mockup4 from  '../../assets/mockup3.png';
import Section from './components/Section';

const Main: React.FC = () => {
  const [item, setItem] = useState("Home");
  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo"/>
        <ul>
          <ListItem
            selected={item === "Home"}
            onClick={() => setItem("Home")}
          >Home</ListItem>

          <ListItem
            selected={item === "Products"} 
            onClick={() => setItem("Products")}
          >Products</ListItem>

          <ListItem
            selected={item === "FAQ"} 
            onClick={() => setItem("FAQ")}
          >FAQ</ListItem>

          <ListItem
            selected={item === "Contact"} 
            onClick={() => setItem("Contact")}
          >Contact</ListItem>       
        </ul>
        <MenuBar
        />
      </Header>

      <Banner>
        
        <img className="banner" src={banner} alt="Banner"/>
        
        <section>
          <strong>Food App</strong>
          <h1>Why stay hungry when you can order form Bella Onojie</h1>
          <p>Download the bella onoje’s food app now on</p>

          <div>
            <Button background="#FA4A0C">PlayStore</Button>
            <Button background="transparent">App Store</Button>
          </div>
          
        </section>

        <img className="mockup" src={mockup1} alt="mockup"/>
      </Banner>

      <div className="line"></div>

      <AboutApp>
        <h1>How the app works</h1>
        <Section 
          img={mockup2}
          title="Create/login to an existing account to get started"
          subTitle="Create an account"
          description="An account is created with your email
          and a desired password"/>

        <Section 
          img={mockup3}
          title="Shop for your favorites
          meal as e dey hot."
          subTitle="Explore varieties"
          description="Shop for your favorite meals or drinks
          and enjoy while doing it."
          reverse
          />

        <Section 
          img={mockup4}
          title="When you done check out
          and get it delivered."
          subTitle="Checkout"
          description="When you done check out and get it 
          delivered with ease."/>
      </AboutApp>

      <DownloadInfo>
        <img src={banner2} alt="banner2"/>

        <section>
          <h1>Download the app now</h1>
          <p>Available on your favorite store. Start your premium experience now</p>

          <div>
            <Button background="#FA4A0C">PlayStore</Button>
            <Button background="transparent">App Store</Button>
          </div>
        </section>    
      </DownloadInfo>

      <Footer>
        <img src={logo} alt="Logo"/>
        <div>
          <FaTwitter color="#FA4A0C" size={35} />
          <FaFacebook color="#FA4A0C" size={35} />
          <AiFillInstagram color="#FA4A0C" size={35} />
        </div>
        <p>Copywright 2020 Bella Onojie.com</p>
      </Footer>
    </Container>
  );
}

export default Main;