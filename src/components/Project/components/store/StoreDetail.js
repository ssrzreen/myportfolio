import { Card } from "antd";
import React from "react";

export default function StoreDetail(props) {
    return (
        <Card title="Information" bordered={false}>
            <p>{props.data}</p>
        </Card>
    )
}