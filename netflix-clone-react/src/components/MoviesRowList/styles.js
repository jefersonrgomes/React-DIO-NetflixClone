import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
padding: 5px;
margin: 5px;
background-color: #111;
color: whitesmoke;

.movieRow{
    margin-bottom: 30px;
}

.movieRow--listArea{
    overflow-x: hidden;
    margin-left: 10px;
}

.movieRow--list{
    width: 99999999px;
}

.movieRow--item{
    display: inline-block;
    width: 150px;
    cursor: pointer;
}


.movieRow--item img{
    width: 100%;
    transform: scale(0.9);

    &:hover{
        border: 2px solid white;
        transform: scale(1);
        transition: all ease-in-out 0.3s;
    }
}

`;

export const Title = styled.div`
    margin: 0px 0px 0px 10px;
`;