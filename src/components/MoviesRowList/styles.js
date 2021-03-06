import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
padding: 5px;
margin: 5px;
background-color: #141414;
color: whitesmoke;

.movieRow{
    margin-bottom: 30px;
}

.movieRowLeft, .movieRowRight{
    width: 40px;
    height: 225px;
    position: absolute;
    background-color: rgba(0,0,0,0.6);
    border-radius: 5px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 1;
}

.movieRowLeft{
    left:0;
    padding-left: 5px;
}
    
.movieRowRight{
    right: 0;
}

.movieRow--listArea{
    overflow-x: hidden;
    margin-left: 10px;
}

.movieRow--listArea:hover .movieRowRight {
    background-color: red;
    transition: all ease-in-out 0.5s;
}

.movieRow--list{
    transition: all ease-in-out 0.6s;
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
        border-radius: 10px;
        transform: scale(1);
        transition: all ease-in-out 0.3s;
    }
}

`;

export const Title = styled.div`
    margin: 0px 0px 0px 10px;
`;