import { Btn } from "../common/ButtonCss";
import { useNavigate } from "react-router";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  ImgWrap,
  MainContainer,
  MainRow,
  MainWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  Img,
} from "./mainCss";

const Main = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <MainContainer lightBg={lightBg} id={id}>
        <MainWrapper>
          <MainRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Btn
                    onClick={() => navigate("/eventlist")}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel}
                  </Btn>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </MainRow>
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default Main;
