import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
body{
    background-color: #0f0f0f;
    font-family: 'Poppins', sans-serif;
    ::-webkit-scrollbar{
        width: 12px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #d37541;
    }
    ::-webkit-scrollbar-track{
        background-color: #000;
    }
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
`

export default  GlobalStyle;