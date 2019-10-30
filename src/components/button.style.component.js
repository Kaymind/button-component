import styled from 'styled-components';

const Button = styled.button`
  width: 96%;
  height: 85%;
  padding: 10px 10px;
  background-image: linear-gradient(to bottom, rgb(227,227,227) 0%, rgb(210,210,210) 48%, rgb(198,198,198) 49%, rgb(175,175,175) 100%);
  color: rgb(89,83,83);
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.5;
  border-radius: 20px;
  outline: none;
  border: 1px solid rgb(141,140,139);
  box-shadow: 0 2px 2px grey;
  cursor: pointer;

  & .star {
    color: rgb(141,140,139);
    font-size: 2rem;
    margin: 10px;
  }
`;

export default Button;