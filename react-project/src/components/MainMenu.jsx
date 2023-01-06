import React from "react"
import SubMenu from "./SubMenu";
import { Navbar } from "react-bootstrap"
import menus from "../data/menus"
function MainMenu() {

    const subMenus = menus.map(subMenu => {
        return (
            <SubMenu title={subMenu.title} position={subMenu.position} children={subMenu.children} />
        )
    })

    return (
        <div className="bg-light">

            <div className="container d-flex align-items-center justify-content-between">            
                <div className="d-flex">
                    <button class="btn bg-warning rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </button>
                    <Navbar className="px-5" bg="light" expand="lg">
                        {subMenus}
                    </Navbar>

                </div>
                <div>
                    <p className="fs-5 my-1 free-return">30 Days Free Return</p>
                </div>
            </div>
        </div>
    )
}

export default MainMenu;