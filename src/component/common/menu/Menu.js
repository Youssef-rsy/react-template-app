import React , {Fragment} from 'react';
import SideBar from './sidebar/SideBar';
import UpperBar from './upperbar/UpperBar';

const Menu = () => {
    return (
        <Fragment>
            <UpperBar/>
            <SideBar/>
        </Fragment>
    )
}

export default Menu;