import { useState } from "react";
import { useNavigate } from "react-router";
import { Btn } from "../common/ButtonCss";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowRight,
} from "./heroCss";
import Video from "../../videos/video.mp4";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Events Made Easy</HeroH1>
        <HeroP>See all the events happening right now!</HeroP>
        <HeroBtnWrapper>
          <Btn
            onClick={() => navigate("/login")}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {<ArrowRight />}
          </Btn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
