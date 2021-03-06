import React from 'react';
import styled from 'styled-components';
function PersonCard({
  title,
  subtitle,
  backgroundcolor,
  personNum,
  childNum,
  plusPersonNumber,
  minusPersonNumber,
}) {
  return (
    <Container backgroundcolor={backgroundcolor}>
      <Text>{title}</Text>
      <SubText>{subtitle}</SubText>
      <PlusMinusContainer>
        <Minus
          value="minusBtn"
          onClick={() => minusPersonNumber(title)}
          disabled={personNum < 1 ? true : childNum < 1 ? true : false}
        >
          <MinusSpan>-</MinusSpan>
        </Minus>
        <Count>{title === '성인' ? personNum : childNum}</Count>
        <Plus value="plusBtn" onClick={() => plusPersonNumber(title)}>
          <PlusSpan>+</PlusSpan>
        </Plus>
      </PlusMinusContainer>
    </Container>
  );
}

export default PersonCard;

const Container = styled.div`
  width: 300px;
  height: 80px;
  margin-top: 10px;
  background-color: ${props => props.backgroundcolor};
  border-radius: 15px;
`;
const PlusMinusContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 104px;
  height: 32px;
`;

const Count = styled.span`
  position: absolute;
  left: 150px;
  font-size: 20px;
  color: white;
`;
const Text = styled.div`
  font-size: 15px;
  color: white;
`;

const SubText = styled.div`
  font-size: 14px;
  color: white;
`;

const Minus = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  right: 50px;
  width: 30px;
  height: 30px;
  background-color: white;
  border: 1px solid;
  border-radius: 15px;
`;

const MinusSpan = styled.span`
  width: 40px;
  font-size: 30px;
  margin-bottom: 9px;
`;

const Plus = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  left: 50px;
  width: 30px;
  height: 30px;
  background-color: white;
  border: 1px solid;
  border-radius: 15px;
`;

const PlusSpan = styled.span`
  width: 40px;
  font-size: 23px;
  margin-bottom: 5px;
`;
