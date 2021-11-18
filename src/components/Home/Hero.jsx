import { useState } from "react";
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
        <HeroP>Sign up today to create or join an event! </HeroP>
        <HeroBtnWrapper>
          <Btn to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started {<ArrowRight />}
          </Btn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
