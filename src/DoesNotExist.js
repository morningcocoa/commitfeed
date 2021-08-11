import { useHistory } from "react-router-dom";
import styled from "styled-components";

const DoesNotExistPanel = styled.div`
  background: white;
  max-width: 375px;
  margin: 50px auto;
  padding: 20px 30px 30px;
  border-radius: 4px;
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 0px 5px 0px 0px #ccc;
`;

const GoHomeButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px 25px;
  font-size: 16px;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: #fff;
  position: relative;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3c93d5;
  cursor: pointer;
  &:hover {
    background-color: #6fc6ff;
  }
`;

function DoesNotExist() {
  const history = useHistory();

  return (
    <DoesNotExistPanel>
      <p>Sorry, but this repo does not exist!</p>
      <GoHomeButton
        onClick={() => {
          history.push(`/`);
        }}
      >
        Return to Home
      </GoHomeButton>
    </DoesNotExistPanel>
  );
}

export default DoesNotExist;
