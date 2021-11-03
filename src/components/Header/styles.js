import styled from 'styled-components';

export const Container = styled.div`
height: 90px;
width: inherit;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
z-index: 999;
top: 0;
left:0;
right: 0;
transition: all ease-in-out 0.5s;

.headerblack{
    background-color: #141414;
}

img{
    height: 80px;
}

.header--user{
    margin-right: 90px;

    img{
        height: 50px;
        border-radius: 10px;
    }
}
`;


