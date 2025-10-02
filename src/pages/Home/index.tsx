import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import NetflixContent from "../../content/NetflixContent.json";
import YoutubeContent from "../../content/YoutubeContent.json";
import ShahidContent from "../../content/ShahidContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import OthersContent from "../../content/OthersContent.json";
import SimpleBlock from "../../components/SimpleBlock";


const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Netflix = lazy(() => import("../../components/Netflix"));
const Youtube = lazy(() => import("../../components/Youtube"));
const Shahid = lazy(() => import("../../components/Shahid"));



const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={[
          {
            title: IntroContent.button[0].title,
            type: 'external',
            href: 'https://wa.me/+966542668201',
          },
          {
            title: IntroContent.button[1].title,
            color: IntroContent.button[1].color,
            type: 'link',
            to: '/prices',
          },
        ]}
        icon="lamine.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="devices.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="ronaldo.svg"
        id="mission"
      />
       <SimpleBlock
        title={OthersContent.title}
        content={OthersContent.text}
     
      />
       <ContentBlock
        direction="right"
        title={NetflixContent.title}
        content={NetflixContent.text}
        icon="netflix.svg"
        id="netflix-section"
        button={[
          {
            title: NetflixContent.button,
            type: 'link',
            to: '/netflix',
          },
        ]}
      />



      <ContentBlock
        direction="right"
        title={ShahidContent.title}
        content={ShahidContent.text}
        icon="Shahid.svg"
        id="shahid-section"
        button={[
          {
            title: ShahidContent.button,
            type: 'link',
            to: '/shahid',
          },
        ]}
      />

      
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="squid.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="تواصل معنا"
      />
    </Container>
  );
};

export default Home;
