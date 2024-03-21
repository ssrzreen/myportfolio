import { Col, Image, Row } from 'antd'
import React from 'react'
import Mypic from '../../../../images/SAVE_20240228_125331 (1).jpg'
// import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <nav
                style={{
                    backgroundColor: "#2C2C2C",
                    color: "white",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    paddingTop: 50,
                    paddingBottom: 50
                }}>
                <Row>
                    <Col xs={24} xl={9}>
                        <Row>
                            <Col span={24}>
                                <Image
                                    fallback= { Mypic }
                                    src='error'
                                    width={50}
                                    height={50}
                                    style={{ marginTop: -5 }}
                                />
                                <label style={{ paddingLeft: 10, fontSize: 25 }}> QuanTum</label>
                            </Col>
                            <Col span={24} style={{ paddingTop: 12 }}>
                                <span>This is My portfolio</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </nav>
        </footer>
    )
}

