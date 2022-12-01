import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    :root{
        --color:#fff22d;

        --primary:#434244;
        --text-secondary:#333333;
        --text-footer-title: #6D6D5F;
    }
`;