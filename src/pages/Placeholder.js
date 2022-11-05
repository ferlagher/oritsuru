import styled from 'styled-components';

const Img = styled.img`
    width: min(100%, 500px);
    height: auto;
`;

export const Placeholder = () => {
    return(
        <main>
            <Img src="https://i.giphy.com/media/fJKG1UTK7k64w/giphy.webp"/>
        </main>
    )
};