import styled from 'styled-components'
import { FlexContainer } from '../atoms';

const LogoContainer = styled(FlexContainer)`
    font-size: ${({size}) => size}; /* Easy child sizing using em's */
`

const Isotype = styled.svg.attrs({ 
    version: '1.1', 
    xmlns: 'http://www.w3.org/2000/svg', 
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
    height: 1em;
    width: 1.8em;
    fill: currentColor;
`;

const Logotype = styled.span`
    font-family: 'Nuku-Nuku', sans-serif;
    font-size: 1em;
    color: var(--color-salmon);
    background: linear-gradient(90deg, #ed8840, #eb8141, #e87b42, #e67543, #e36f44, #e16a45, #de6547, #dc6048, #d95b49, #d6574a, #d4534c, #d14f4d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${({hideOnMobile}) => hideOnMobile && `
        @media (max-width: 600px) {
            display: none;
        }
    `}
`;

export const Logo = ({size = '1.3em', full = false, hideOnMobile = false}) => {
    return(
        <LogoContainer size={size} gap='0.25em'>
            <Isotype viewBox="0 0 52.295 32">
                <polygon points="26.021 12.755 40.694 26.217 20.115 18.588 26.021 12.755"/>
                <polygon points="41.589 2.008 44.244 0.503 43.686 26.628 34.138 17.869 41.589 2.008"/>
                <path d="M26.0567,1.636,34.81,12.3932l-2,4.2571-6.23-5.716a.86.86,0,0,0-1.1859.0218L20.6322,15.659l-2.487-2.5127Z"/>
                <path d="M2.7133,0l16.695,16.8678-1.0737,1.06-4.19-1.5533a.8611.8611,0,0,0-.7839.0963l-3.1128,2.1277Z"/>
                <polygon points="13.963 18.142 39.712 27.687 27.616 27.687 27.614 27.687 0 27.687 13.963 18.142"/>
                <polygon points="12.488 29.407 23.067 29.407 14.211 32 12.488 29.407"/>
                <polygon points="41.877 32 31.301 29.407 43.133 29.407 41.877 32"/>
                <polygon points="45.864 5.226 45.95 1.218 52.295 8.229 45.864 5.226"/>
            </Isotype>
            <Logotype hideOnMobile={hideOnMobile}>ORITSURU{full && ' SUSHI'}</Logotype>
        </LogoContainer>
    );
};