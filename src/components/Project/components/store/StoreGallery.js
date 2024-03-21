import React from 'react'
import { Col, Row, Card, Image } from 'antd';


export default function StoreGallery(props) {
    return (
        <>
            <Card title="ภาพถ่ายสินค้า" bordered={false}>
                <Row>
                    {props.data?.map((val, index) => {
                        return (
                            <Col
                                key={index} xs={24} sm={12} md={12} lg={6} xl={6} xxl={4}
                                style={{ paddingRight: 5, paddingLeft: 5, paddingBottom: 10 }}>
                                <Image
                                    src={val.imageUrl}
                                    alt="Snow"
                                    style={{ width: '100%', height: 120 }}>

                                </Image>
                            </Col>
                        )
                    })}

                </Row>

            </Card>
        </>
    )
}
