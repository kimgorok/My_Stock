import styled from "styled-components";

export const StockCard = styled.div`
  background-color: ${(props) => props.theme.cardBgColor};
  display: inline-block;
  padding: 20px;
  border-radius: 20px;
  border: 1.5px solid;
  border-color: white;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 그림자 설정 */
`;

// 등락
export const Stockfluctuation = styled.h3<{ positive: boolean }>`
  color: ${(props) =>
    props.positive
      ? props.theme.plusColor
      : props.positive === false
      ? props.theme.minusColor
      : props.theme.textColor};
`;
