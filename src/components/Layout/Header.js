import classes from './Header.module.scss';
import Form from '../Form/Form';
import { GeoButton, UnitButton } from '../UI/Buttons';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <GeoButton />
            <Form />
            <UnitButton />
        </header>
    );
};

export default Header;
