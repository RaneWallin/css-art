import React from "react";
import styled from "styled-components";

const Freddie = _ => {
  return (
    <Background>
      {/*  Start hair */}
      <Hair1 />
      <Hair2 />
      <Hair3 />
      <Hair4 />
      <Hair5 />
      {/*  End hair */}
      {/*  Start Face */}
      <Face1 />
      {/* End Face*/}
    </Background>
  );
};

export default Freddie;

const Background = styled.div`
  poisition: relative;
  width: 740px;
  height: 740px;
  margin: 25px auto;
  background-image: linear-gradient(#d9d9d9, #727272 15%, #ffffff 100%);
`;

const Hair1 = styled.div`
  position: absolute;
  transform: rotate(-16deg);
  border-top-left-radius: 30px;
  top: 10px;
  right: 754px;
  width: 139px;
  height: 57px;
  background-color: #010101;
  //background-color: pink;
`;

const Hair2 = styled.div`
  position: absolute;
  border-top-right-radius: 70px;
  transform: rotate(20deg);
  top: 10px;
  height: 104px;
  width: 200px;
  right: 655px;
  background-color: #010101;
  //background-color: pink;
`;

const Hair3 = styled.div`
  position: absolute;
  border-top-right-radius: 120%;
  transform: rotate(10deg);
  top: 60px;
  height: 144px;
  width: 36px;
  right: 654px;
  background-color: #010101;
  //background-color: pink;
`;

const Hair4 = styled.div`
  position: absolute;
  border-top-left-radius: 120%;
  transform: rotate(-5deg);
  top: 40px;
  height: 144px;
  width: 50px;
  left: 636px;
  background-color: #010101;
  //background-color: pink;
`;

const Hair5 = styled.div`
  position: absolute;
  border-top-left-radius: 130%;
  //border-bottom-right-radius: 90%;
  transform: rotate(5deg);
  top: 45px;
  height: 144px;
  width: 52px;
  left: 654px;
  background-color: #010101;
`;

const Face1 = styled.div`
  position: absolute;
  border-top-left-radius: 60%;
  border-bottom-left-radius: 30%;
  border-top-right-radius: 30%;
  border-top-right-radius: -30%;
  transform: rotate(25deg);
  height: 107px;
  width: 210px;
  top: 80px;
  right: 670px;
  background-color: #bbbbbb;
  //z-index: -1;
`;
