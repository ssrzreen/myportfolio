import { Card } from "antd";
import React from "react";

export default function StoreDetail(props) {
    return (
        <Card title="ข้อมูลร้านค้า" bordered={false}>
            <p>{props.data}</p>
        </Card>
    )
}