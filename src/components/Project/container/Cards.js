import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'antd';
import styled from 'styled-components';
import "./Cards.css"

const { Meta } = Card;

export default function Cards(props) {

    let navigate = useNavigate();

    const redirectToStore = (data) => {
        navigate(`/store?storeId=${data.storeId}`);
    }

    const genCardImage = (val) => {
        return (
            <div class="container">
                {val.storeCardImage ?
                    <img
                        src={val.storeCardImage}
                        alt='Snow'
                        style={{ width: '100%' }}
                        onClick={() => redirectToStore(val)}>
                    </img>
                    :
                    <img
                        src={``}
                        alt='Snow'
                        style={{ width: '100%' }}
                        onClick={() => redirectToStore(val)}>
                    </img>}
            </div>
        )
    }

    const genCardInfo = (val) => {
        return (
            <Row style={{
                height: 100,
                padding: (props.isShowSingle ? "24px" : 0)
            }}
                onClick={() => redirectToStore(val)}
            >
                <Col span={24}>
                    <Meta
                        className='card-text course-item-text'
                        title={val.storeTitle}
                        description={val.storeSubDescription}
                    />

                </Col>

            </Row>
        )
    }

    const genCard = (val) => {
        return (
            <Card
                hoverable={!props.isShowSingle}
                bodyStyle={{ padding: "10px" }}
                style={{
                    width: '100%',
                    borderRadius: 10
                }}
                cover={props.isShowSingle ? genCardInfo(val) : genCardImage(val)}
            >
                {props.isShowSingle ? genCardImage(val) : genCardInfo(val)}
            </Card>

        )
    }

    const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

    const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
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


    return (
        <div>
            {props.isShowSingle ?
                genCard(props.data) :
                <Wrapper>
                    {/* <label style={{ paddingLeft: 5 }}> รายการหน้าร้านค้า</label> */}
                    <Title>Projects</Title>
                    <Desc>
                        My work experience as a software engineer and working on different companies and projects.
                    </Desc>
                    <Row style={{ paddingTop: 10 }}>
                        {props.data?.map(val => {
                            return (
                                <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={4} style={{ paddingRight: 5, paddingLeft: 5, paddingBottom: 10 }}>
                                    {genCard(val)}
                                </Col>
                            )
                        })}

                    </Row>
                </Wrapper>}
        </div>
    )
}
