import React from "react";
import "./Header.css";
// import {Button} from "antd";
// import {PageHeader} from "antd"
import { useNavigate } from "react-router-dom";

export default function Header() {
    // let navigate = useNavigate();
    return(
        <header>
            <nav className="header">
                {/* <PageHeader
                title = "Plearming"
                extra={[
                    <Button
                    key="1"
                    type="text"
                    onClick={() => navigate("/about")}> About

                    </Button>
                ]}
                style={{
                    backgroundColor : 'white',
                    margin : 0 ,
                    paddingBottom : 5 ,
                    paddingLeft : 10,
                    paddingRight: 5,
                    paddingTop : 5
                }}
                avatar ={{
                    src: "https://www.prachachat.net/wp-content/uploads/2018/09/41937319_2227893787439992_4830542910288035840_ng.jpg"
                }}
                /> */}
            </nav>
        </header>
    )
}