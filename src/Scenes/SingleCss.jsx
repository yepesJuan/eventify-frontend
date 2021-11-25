import styled from "styled-components";

export const SingleContainer = styled.footer`
  background: hsla(0, 0%, 0%, 1);
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 0%, 1) 0%,
    hsla(227, 100%, 49%, 1) 100%
  );
  background: -moz-linear-gradient(
    180deg,
    hsla(0, 0%, 0%, 1) 0%,
    hsla(227, 100%, 49%, 1) 100%
  );
  background: -webkit-linear-gradient(
    270deg,
    hsla(0, 0%, 0%, 1) 2%,
    hsla(227, 100%, 49%, 1) 100%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#000000", endColorstr="#145ff5", GradientType=1 );
`;
export const SingleWrap = styled.div`
  padding: 48px 24px;
  display: flex;

  justify-content: center;
  align-items: center;
  max-width: 1100px;
  height: 800px;
  margin: 0 auto;
`;

export const ListWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  height: 800px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 5px;
  padding-top: 20px;
`;

export const FieldsWrap = styled.span`
  font-weight: 600;
  font-size: 17px;
  /* background-color: darkblue; */
  padding: 1px;
  color: darkblue;
`;

export const CreateContainer = styled.footer`
  /* background-color: #145ff5; */
  height: 750px;
  margin-top: 15px;
  padding-top: 80px;
  z-index: 1;

  background: hsla(0, 0%, 0%, 1);
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 0%, 1) 0%,
    hsla(227, 100%, 49%, 1) 100%
  );
  background: -moz-linear-gradient(
    180deg,
    hsla(0, 0%, 0%, 1) 0%,
    hsla(227, 100%, 49%, 1) 100%
  );
  background: -webkit-linear-gradient(
    270deg,
    hsla(0, 0%, 0%, 1) 5%,
    hsla(227, 100%, 49%, 1) 100%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#000000", endColorstr="#145ff5", GradientType=1 );
`;
export const CreateWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 450px;
  height: 600px;
  margin: 10px auto;
  border-radius: 24px;
  background-color: white;
  z-index: 1;
`;
