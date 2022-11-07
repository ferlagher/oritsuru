import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer, Logo, IconButton, UserIcon, CartWidget, Dropdown } from '../../components';
import { useNavBar } from './useNavBar';

const Header = styled(FlexContainer).attrs(({isHidden, isOpaque}) =>({
    as: 'header',

    style: {
        backgroundColor: isOpaque ? 'var(--color-bg-light)' : 'transparent',
        transform: `translateY(${isHidden ? '-100%' : '0%'})`,
    }
}))`
    position: sticky;
    top: 0;
    width: 100%;
    padding: var(--space-sm);
    z-index: 99;
    transition: background-color, transform;
    transition-duration: 0.2s, 0.5s;
    transition-timing-function: ease-in-out;
`;

const HeaderContent = styled(FlexContainer)`
    width: 100%;
    max-width: var(--max-width);
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-sm);
`;

const Nav = styled.nav`
    @media (max-width: 425px) {
        order: 2;
        width: 100%;
    }
`;

const Ul = styled(FlexContainer).attrs({
    as: 'ul',
})`
    justify-content: space-between;
    align-items: center;
    gap: var(--space-sm);
    list-style: none;
`;

const StyledNavLink = styled(NavLink)`
    color: transparent;
    background: linear-gradient(90deg, #ed8840, #eb8141, #e87b42, #e67543, #e36f44, #e16a45, #de6547, #dc6048, #d95b49, #d6574a, #d4534c, #d14f4d);
    -webkit-background-clip: text;
    padding: 0.25em;
    position: relative;
    line-height: 1em;
    font-weight: 400;
    
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        background-color: var(--color-salmon-light);
        height: 2.5em;
        width: 2.5em;
        border-radius: 50%;
        opacity: 0;
        scale: 0;
        transition: 0.2s ease-in-out;
    }

    &:hover::before {
        opacity: 0.2;
        scale: 1;
    }

    &.active {
        color: currentColor;
        opacity: 0.7;
    }
`;

const Categories = styled.ul`
    list-style: none;

    li {
        margin-bottom: 0.5em;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`;

export const NavBar = ({toggle}) => {
    const [isOpaque, isHidden] = useNavBar();
    
    return(
        <Header isOpaque={isOpaque} isHidden={isHidden}>
            <HeaderContent>
                <Link to='/'>
                    <Logo hideOnMobile/>
                </Link>

                <Nav>
                    <Ul>
                        <li><Dropdown
                        visible={<StyledNavLink activeclassname='active' to='/'>Menú</StyledNavLink>}
                        hidden={
                            <Categories>
                                <li><Link to='/category/gunkan'>Gunkan</Link></li>
                                <li><Link to='/category/sashimi'>Sashimi</Link></li>
                                <li><Link to='/category/temaki'>Temaki</Link></li>
                                <li><Link to='/category/nigiri'>Nigiri</Link></li>
                                <li><Link to='/category/roll'>Roll</Link></li>
                            </Categories>
                        }
                        /></li>
                        <li><StyledNavLink activeclassname='active' to='/about'>Sobre</StyledNavLink></li>
                        <li><StyledNavLink activeclassname='active' to='/contact'>Contacto</StyledNavLink></li>
                    </Ul>
                </Nav>

                <FlexContainer justify='space-between' align='center' gap='var(--space-sm)'>
                    {toggle}
                    <IconButton href='#'><CartWidget/></IconButton>
                    <IconButton href='#'><UserIcon/></IconButton>
                </FlexContainer>
            </HeaderContent>
        </Header>
    );
};