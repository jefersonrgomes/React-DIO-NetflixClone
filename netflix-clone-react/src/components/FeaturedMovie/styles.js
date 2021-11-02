import styled from 'styled-components';

export const Container = styled.div`

    .featured{
        height: 100vh;
        }

        .featured--vertical{
            width: inherit;
            height: inherit;
            background: linear-gradient(to top, #111 10%, transparent 90%);
        }

        .featured--horizontal{
            width: inherit;
            height: inherit;
            background: linear-gradient(to right, #111 35%, transparent 75%);
        }

        .featured--name{
            font-size: 60px;
            font-weight: bold;
            margin-left: 15px;

        }

        .featured--info{
            font-size: 18px;
            font-weight: bold;
            margin-top: 15px;
            margin-right: 15px;
            margin-left: 15px;
        }

        .featured--points, .featured--year, .featured--seasons
        {
            display: inline-block;
            margin-right: 15px;
        }
        .featured--points{
            color: #46d369;
        }

        .featured--overview{
            margin-top: 15px;
            margin-bottom: 15px;
            max-width: 40%;
            color:#999;
            font-weight: 400;
            font-size: 20px;
        }

        .featured--buttons{
            text-decoration: none;
            color: white;
            border: none;
            margin-top: 15px;
            margin-bottom: 15px;
        }

        .featured--watchButton, .featured--myListButton{
            padding: 15px 25px;
            margin-right: 15px;
            display: inline-block;
            border-radius: 10px;
            font: bold;
            font-size: 20px;
            text-decoration: none;
            transition: all ease 0.3s;
            &:hover{
                opacity: 0.7;
            }

        }

        .featured--watchButton{
            background-color: white;
            color: black;
        }

        .featured--myListButton{
            background-color: #222;
            color: white;
        }

        .featured--genres{
            color:#999;
            font-weight: 400;
            font-size: 20px;
            margin-right: 15px; 
        }

        


`;