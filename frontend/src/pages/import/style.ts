import styled from "styled-components";

// css of section container
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: auto;
  padding: 15%;
  background-color: #e5f5f5;
  height: 100vh;
`;

// css of dropzone
export const Dropzone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  width: 100%;
  flex: 1;
  border: 2px dashed #0196f3;
  border-radius: 5px;
  padding: 25px;
  text-align: center;
  font-family: sans-serif;
  font-size: 20px;
  color: #2196f3;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
  &:hover {
    border: 2px dashed #1976d2;
  }
`;

//files preview
export const FilesPreview = styled.aside`
  width: 100%;
  padding: 25px;
  margin-top: 25px;
  border: 1px solid #993399;
  border-radius: 5px;
  font-family: sans-serif;
  font-size: 18px;
  color: #993399;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin-bottom: 10px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  width: 100%;
  button {
    width: 50%;
    margin: 10px;
    height: 50px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    background-color: #2196f3;
    cursor: pointer;
    outline: none;
    &:hover {
      background-color: #1976d2;
    }
    &:disabled {
      background-color: #bdbdbd;
      color: #fff;
      cursor: not-allowed;
    }
  }

`;
