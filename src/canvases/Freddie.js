import React from "react";
import styled from "styled-components";

const Freddie = _ => {
  return (
    <Background>
      <Hair1 />
      <Hair2 />
      <Hair3 />
      <Hair4 />
      <Hair5 />
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
  right: 822px;
  width: 139px;
  height: 57px;
  background-color: #010101;
`;

const Hair2 = styled.div`
  position: absolute;
  border-top-right-radius: 70px;
  transform: rotate(20deg);
  top: 10px;
  height: 104px;
  width: 171px;
  right: 744px;
  background-color: #010101;
`;

const Hair3 = styled.div`
  position: absolute;
  border-top-right-radius: 120%;
  transform: rotate(10deg);
  top: 60px;
  height: 144px;
  width: 36px;
  right: 740px;
  background-color: #010101;
`;

const Hair4 = styled.div`
  position: absolute;
  border-top-left-radius: 120%;
  transform: rotate(-5deg);
  top: 30px;
  height: 144px;
  width: 50px;
  left: 603px;
  background-color: #010101;
`;

const Hair5 = styled.div`
  position: absolute;
  border-top-left-radius: 130%;
  border-bottom-right-radius: 90%;
  transform: rotate(5deg);
  top: 45px;
  height: 144px;
  width: 52px;
  left: 580px;
  background-color: #010101;
`;
