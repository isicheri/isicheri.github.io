import styled from "styled-components";

export const ConCon = styled.div`
height: 100vh;
color: white;
display: flex;
justify-content: center;
align-items: center;
scroll-snap-align: center;


.colorful-form {
    width: 70%;
    margin: 0 auto;
    padding: 20px;
    background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: white;
  }
  
  .form-input {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #fff;
    color: #333;
    border-radius: 5px;
    outline: none;
  }
  
  textarea.form-input {
    height: 100px;
  }
  
  .form-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: purple;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
//   .form-button:hover {
//     background-color: #ff5f59;
//   }
`;