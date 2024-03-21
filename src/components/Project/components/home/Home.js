import React, { useEffect, useState } from "react";
import Cards from "../../container/Cards";
import { Spin } from "antd";
import { ThemeProvider } from 'styled-components';
import { darkTheme } from "../../../../utils/Themes";
import IconYolo from '../../../../images/iconapp.png'
import IconWMSL from '../../../../images/WMSL.png'
import IconMe from '../../../../images/ME1.png'
import styled from "styled-components";
import IconSutVul from '../../../../images/sutvul.png'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;
const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;
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
                "storeTitle": "1 st Internship for 4 months",
                "storeSubDescription": "WebApplication Develop",
                "storeCardImage": IconWMSL
            },
            {
                "storeId": 2,
                "storeTitle": "2 nd Internship for 4 months",
                "storeSubDescription": "Moblie Develop",
                "storeCardImage": IconMe
            },
            {
                "storeId": 3,
                "storeTitle": "Yolo Wash App Project",
                "storeSubDescription": "Designing IOT devices to make student accommodation’s washing machines smarter and make an app",
                "storeCardImage": IconYolo
            },
            {
                "storeId": 4,
                "storeTitle": " Emergency Assessment And Rescue App",
                "storeSubDescription": "it is an app that can report when someone is injured in an accident by locating the app and sending it to the first aid .",
                "storeCardImage": IconSutVul
            },

        ])

        setLoading(false)
    }

    useEffect(() => {
        getBaseApi();
    }, [])
    return (
        <Container id="project">
            <Container>
                <ThemeProvider theme={darkTheme}>
                    <article>
                        <div style={{ alignContent: "center" }}>
                            {!loading ?
                                <Cards data={list} isShowSingle={false} />
                                :
                                <div style={{ padding: '20%' }}>
                                    <center><Spin size='large'></Spin></center>
                                </div>}
                        </div>
                    </article>
                </ThemeProvider>
            </Container>
            {/* <Header /> */}

        </Container>

    )
}