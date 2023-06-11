import styled from "styled-components";

export const MainCon = styled.div`
// background: black;
height: 130px;
display: flex;
justify-content: center;
align-items: center;
`;


export const NavCon = styled.div`
background: white;
height: 75px;
width: 70%;
/* From https://css.glass */
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`;

export const Nav = styled.div`
width: 80%;
height: inherit;
display: flex;
justify-content: space-around;
align-items: center;
// padding: 20px;
`;

export const TitleCon = styled.div`
width: 20%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
// background: black;
h1 {
    color: #3e00b3;
}
`;

export const LinkCon = styled.div`
// background: black;
width: 30%;
display: flex;
justify-content: center;
align-items: center;
height: 50px;
ul {
height: 50px;
display: flex;
justify-content: center;
align-items: center;
}

li {
    padding: 20px;
    list-style: none;
}
a {
    text-decoration: none;
    font-size: 20px;
    color:  white;
}
`;

export const IconCon = styled.div`
width: 20%;
// background: black;
display: flex;
justify-content: center;
align-items: center;
height: 50px;
a {
    color: black;
}
`;


export const ButtonCon = styled.div`

// background: black;
height: 50px;
width: 20%;
display: flex;
justify-content: center;
button {
width: 100%;
outline: none; 
border: 1px solid black;
border-radius: 10px;
background: purple;
}

a {
    color: white;
    font-size: 15px;
}
`; 

export const HamCon = styled.div`
display: none;
@media screen and (max-width: 960px) {
    display: flex;
    height: 50px;
    width: 30%;
    // justify-content: center;
    // align-items: center;
}
`;