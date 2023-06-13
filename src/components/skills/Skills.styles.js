import styled from "styled-components";

export const SkillCon = styled.div`
height: 100vh;
color: white;
display: flex;
justify-content: center;
align-items: center;
`;

export const MainCon = styled.div`
background: purple;
width: 80%;
height: 60vh;
// border-radius: 50px;
// background: #a81bd0;
// box-shadow:  20px 20px 60px #8f17b1,
//              -20px -20px 60px #c11fef;


border-radius: 50px;
background: #670881;
box-shadow:  20px 20px 60px #58076e,
             -20px -20px 60px #760994;

             display: flex;
             justify-content: space-between;
             align-items: center;


             .card {
                width: 190px;
                height: 154px;
                border-radius: 20px;
                padding: 5px;
                box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
                background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
              }
              
              .card__content {
                background: rgb(5, 6, 45);
                border-radius: 17px;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
              }

`;