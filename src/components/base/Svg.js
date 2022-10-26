import styled from "styled-components";

export default styled.svg.attrs({ 
    version: '1.1', 
    xmlns: 'http://www.w3.org/2000/svg', 
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
    height: 1.2rem;
    width: 1.2rem;
    fill: ${({theme}) => theme.colors.nori};
`;