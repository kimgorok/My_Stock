import { Helmet } from "react-helmet";
import FloatButton from "../Components/Button/FloatButton";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 80px;
`;

const List = styled(motion.div)`
  display: grid;
  gap: 80px;
  grid-template-columns: repeat(6, 1fr);
  left: 0px;
  right: 0px;
  margin: auto;
`;

export const ListAnimation = {
  start: {
    scale: 0.2,
  },
  end: {
    scale: 1,
  },
};

const FontStyle = styled(motion.span)`
  padding: 40px;
  font-size: 40px;
  border: solid 6px;
`;

const 준 = styled(FontStyle)`
  background-color: #f74848;
`;

const 비 = styled(FontStyle)`
  background-color: #fcaa13;
`;

const 중 = styled(FontStyle)`
  background-color: #dfdf01;
`;

const 입 = styled(FontStyle)`
  background-color: #00b300;
`;

const 니 = styled(FontStyle)`
  background-color: #189ef7;
`;

const 다 = styled(FontStyle)`
  background-color: #c000c0;
`;

export const TextVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.5,

    transition: { duration: 0.1 },
  },
  tap: {
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%",
  },
};

const GoHome = styled.span`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  font-size: 40px;
  right: 120px;

  color: ${(props) => props.theme.textColor};
`;

function Stocks() {
  return (
    <>
      <Helmet>
        <title>해외 주식</title>
      </Helmet>
      <Wrapper>
        <List variants={ListAnimation}>
          <준
            variants={TextVariants}
            initial="normal"
            whileHover="hover"
            whileTap="tap"
          >
            준
          </준>
          <비
            variants={TextVariants}
            initial="normal"
            whileHover="hover"
            whileTap="tap"
          >
            비
          </비>
          <중
            variants={TextVariants}
            initial="normal"
            whileHover="hover "
            whileTap="tap"
          >
            중
          </중>
          <입
            variants={TextVariants}
            initial="normal"
            whileHover="hover"
            whileTap="tap"
          >
            입
          </입>
          <니
            variants={TextVariants}
            initial="normal"
            whileHover="hover"
            whileTap="tap"
          >
            니
          </니>
          <다
            variants={TextVariants}
            initial="normal"
            whileHover="hover"
            whileTap="tap"
          >
            다
          </다>
        </List>
      </Wrapper>
      <Link to="/">
        <GoHome>돌아가기</GoHome>
      </Link>
      <FloatButton />
    </>
  );
}

export default Stocks;
