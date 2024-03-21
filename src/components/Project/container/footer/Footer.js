import { Col, Image, Row } from 'antd'
import React from 'react'
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
                                    fallback='https://www.prachachat.net/wp-content/uploads/2018/09/41937319_2227893787439992_4830542910288035840_ng.jpg'
                                    src='error'
                                    width={50}
                                    height={50}
                                    style={{ marginTop: -5 }}
                                />
                                <label style={{ paddingLeft: 10, fontSize: 25 }}> Toflyn</label>
                            </Col>
                            <Col span={24} style={{ paddingTop: 12 }}>
                                <span>แหล่งรวมร้านขายของเล่น ทั้งมือหนึ่ง และมือสอง ที่มากที่สุดในประเทศ</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </nav>
        </footer>
    )
}

