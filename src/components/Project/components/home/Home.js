import React, { useEffect, useState } from "react";
import Cards from "../../container/Cards";
import { Spin } from "antd";
import { ThemeProvider } from 'styled-components';
import { darkTheme } from "../../../../utils/Themes";
export default function
    Home() {

    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([])

    const getBaseApi = async () => {
        setLoading(true)

        // const result = await getStoreAllFetch()
        setList([
            {
                "storeId": 1,
                "storeTitle": "ร้านขายรถของเล่น",
                "storeSubDescription": "ของเล่นรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน",
                "storeCardImage": "https://inwfile.com/s-fq/lvuzqt.jpg"
            },
            {
                "storeId": 2,
                "storeTitle": "ร้านขาย Lego",
                "storeSubDescription": "ของเล่นรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน",
                "storeCardImage": "https://inwfile.com/s-fq/lvuzqt.jpg"
            },
            {
                "storeId": 3,
                "storeTitle": "ร้านขายบ้านของเล่น",
                "storeSubDescription": "ของเล่นรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน",
                "storeCardImage": "https://inwfile.com/s-fq/lvuzqt.jpg"
            },
            {
                "storeId": 4,
                "storeTitle": "ร้านขายตุ๊กตาหมี",
                "storeSubDescription": "ของเล่นรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน",
                "storeCardImage": "https://inwfile.com/s-fq/lvuzqt.jpg"
            },

        ])

        setLoading(false)
    }

    useEffect(() => {
        getBaseApi();
    }, [])
    return (
        <div id="project">
            {/* <Header /> */}
            <ThemeProvider theme={darkTheme}>
                <article>
                    <div style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: 24 }}>
                        {!loading ?
                            <Cards data={list} isShowSingle={false} />
                            :
                            <div style={{ padding: '20%' }}>
                                <center><Spin size='large'></Spin></center>
                            </div>}

                    </div>
                </article>
            </ThemeProvider>
        </div>

    )
}