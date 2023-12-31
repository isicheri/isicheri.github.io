import styled from "styled-components";

export const HomeCon = styled.div`
height: 100vh;
color: white;
display: flex;
justify-content: center;
align-items: center;
scroll-snap-align: center;

@media screen and (max-width: 960px) {
    display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
`;

export const Con1 = styled.div`
// background: black;
height: 60vh;
width: 50%;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
.text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
}
 h1 {
    color: #3e00b3;
 }
 p {
    text-align: left;
    font-size: 20px;
 }
 .button-con {
    // background: white;
    width: 80%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
 }

 button {
    width: 70%;
    border: 1px solid black;
    height: 60px;
border-radius: 10px;
background: purple;
box-shadow: 4px 4px 0 0 #be7efe;
border-radius: 10px;
transition: all 0.3s ease;
&:hover {
  box-shadow: none;
}
 }

 a {
    color: white;
    font-size: 20px;
}

@media screen and (max-width: 960px) {
    height: 50vh;
    width: 100%;
    .text {

    }
    h1 {
        color: #3e00b3;
        font-size: 22px;
        text-align: center;

     }
     p {
        text-align: center;
        font-size: 15px;
     }

     button {
        width: 100%;
        border: 1px solid black;
        height: 50px;
    border-radius: 10px;
    background: purple;
     }
}
`;

export const Con2 = styled.div`
// background: black;
height: 60vh;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
.image-holder {
    height: 300px; 
    width: 300px;
    border-radius: 50%;
    border: 1px solid purple;
   //  background: purple;
}

@media screen and (max-width: 960px) {
height: 70vh;
display: flex;
justify-content: center;
align-items: center;
   .image-holder {
      height: 250px; 
      width: 250px;
      border-radius: 50%;

  }
}
`;

//http://192.168.43.183:3000