import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
z-index: 999;
top: 0;
left:0;
right: 0;
margin-left: 30px;

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


