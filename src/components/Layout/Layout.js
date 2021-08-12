import Container from '../UI/Container';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const Layout = (props) => {
    return (
        <>
            <Container>
                <Header />
                {props.children}
            </Container>
            <Footer />
        </>
    )
};

export default Layout;
