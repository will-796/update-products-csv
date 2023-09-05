import styled from "styled-components";

// css of section container
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: auto;
  `;

// css of dropzone
export const Dropzone = styled.div`
  width: 100%;
  border: 2px dashed #ddd;
  border-radius: 5px;
  padding: 25px;
  text-align: center;
  font-family: sans-serif;
  font-size: 20px;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
  &:hover {
    border: 2px dashed #ccc;
  }
`;

//files preview
export const FilesPreview = styled.aside`
  width: 100%;
  height: 100%;
  padding: 25px;
  margin-top: 25px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: sans-serif;
  font-size: 18px;
  color: #bdbdbd;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin-bottom: 10px;
    }
  }
`;