import styled from "styled-components";

export const Container = styled.div`
    .ano{
        background: var(--color);
        border-bottom: 1px solid #cdc333;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 5px 5px 5px 80px;
        > span{
            font-size: 8pt;
            color: var(--primary);
        }

        @media (max-width: 768px){
            >span{
                padding: 0px 0px 0px 5px;
                margin: 5px 0px 0px;
            }
        }
    }
    .itens{
        background: var(--color);
        padding: 25px 25px 25px 80px;
        > .icons{
            display: flex;
            justify-content: space-around;
            gap: 20px;
            @media (max-width: 768px){
                flex-wrap: wrap;
                justify-content: space-between;
            }
            .menu{
                display: none;
                @media (max-width: 768px){
                    display: block;
                    flex: 1;
                    cursor: pointer;
                    > .menuIcon{
                        width: 40px; 
                        height: 31px;
                    }
                }
            }

            .logo{
                order: 0;
                flex: 1;
            }

            .sacola{
                order: 3;
                flex: 1;
                display: flex; 
                justify-content: center;
                align-items: center;
                .sacolaIcon{
                    width: 36px;
                    height: 35px;
                }

                @media (max-width: 768px){
                    order: 2;
                }
            }

            .login{
                display: block;
                order: 2;
                flex: 1;
                display: flex; 
                justify-content: center;
                align-items: center;
                .loginIcon{
                    width: 36px;
                    height: 35px;
                }

                @media (max-width: 768px){
                    display: none;
                    display: flex;
                    justify-content: flex-start;
                    z-index: 200;
                    position: absolute;
                    background: #EBEBEB;
                    padding: 10px;
                    top: 120px;
                    left: 0;
                    width: 100%;
                    transform: translateX(-100vw);
                    transition: all 0.5s;
                    &.activeLogin{
                        transform: translateX(0vw);
                    }
                    &::after{
                        content: "Login";
                        cursor: pointer;
                    }
                }
            }

            .search{
                display: flex; 
                justify-content: center;
                align-items: center;
                flex: 2;
                order: 1;
                width: 100%;
                position: relative;

                @media (max-width: 768px){
                    order: 3;
                    width: 100%;
                    flex: none;
                }
                > input{
                    width: 100%;
                    border-radius: 20px;
                    border: 1px solid rgb(172, 172, 172);
                    padding: 10px 40px 10px 15px;
                    outline: none;
                    font-size: 0.75rem;
                    color: rgb(109, 109, 95);
                    height: 40px;
                    box-shadow: rgb(0 0 0 / 8%) 0px 1px 1px inset;

                    @media (max-width: 768px){
                        border-radius: 0;
                    }
                }

                > button{
                    position: absolute;
                    right: 15px;
                    border: none;
                    background: transparent;
                    cursor: pointer;
                }
            }
        }
    }

    .navbar{
        width: 100%;
        padding: 25px 50px;
        > ul{
            width: 100%;
            display: flex;
            justify-content: space-around;

            > li{
                list-style: none;
                

                > a{
                    text-decoration: none;
                    color: #434244;
                    font-size: 8pt;
                }
            }
        }

        @media (max-width: 768px){
            transform: translateX(-100vw);
            transition: all 0.5s;
            padding: 0;
            > ul{
                width: 100%;
                flex-direction: column;
                align-items: flex-start;
                > li{
                    padding: 17px;
                    background: #fff;
                    width: 100%;
                    border-bottom: 1px solid #c0c0c1;
                    
                    > a {
                        font-size: 14px;
                        font-weight: 500;
                    }
                }
            }

            &.active{
                transform: translateX(0vw);
                position: absolute;
                top: 169px;
                height: calc(100vh - 169px);
            }
        }
    }

   
`;
