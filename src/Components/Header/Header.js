import "./Header.scss";
import { Menu } from "semantic-ui-react";
export default function Header() {
    return (
        <div classname="header-menu">
            <Menu secondary>
                <Menu.Item name="Home" onClick={() => console.log("Haciendo click en el menu")} />
                <Menu.Item name="Series" onClick={() => console.log("Haciendo click en el series")} />
                <Menu.Item name="Comics" onClick={() => console.log("Haciendo click en el comics")} />
            </Menu>
        </div>
    );

}
