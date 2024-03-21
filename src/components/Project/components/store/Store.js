import { Col, Row, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import Cards from '../../container/Cards'
import StoreGallery from './StoreGallery'
import StoreDetail from './StoreDetail'
import { useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../../../../utils/Themes'
// import { getStoreByIdFetch} from ''

export default function Store() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const storeId = params.get("storeId")

  const [storeInfo, setStoreInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const getBaseApi = async () => {
    setLoading(true)

    const result = [
      {
        "storeId": 1,
        "storeTitle": "ร้านขายรถของเล่น",
        "storeSubDescription": "ของเล่นรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน",
        "storeDetail": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "storeCardImage": "https://inwfile.com/s-fq/lvuzqt.jpg",
        "storeGallery": [
          {
            "id": 1,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
          {
            "id": 2,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
          {
            "id": 3,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
          {
            "id": 4,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
          {
            "id": 5,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
        ]
      },
      {
        "storeId": 2,
        "storeTitle": "ร้านขายรถของเล่น2",
        "storeSubDescription": "ของเล่นรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน",
        "storeDetail": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "storeCardImage": "https://inwfile.com/s-fq/lvuzqt.jpg",
        "storeGallery": [
          {
            "id": 1,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
          {
            "id": 2,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
          {
            "id": 3,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
          {
            "id": 4,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
          {
            "id": 5,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
        ]
      },
      {
        "storeId": 3,
        "storeTitle": "ร้านขายรถของเล่น",
        "storeSubDescription": "ของเล่นรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน",
        "storeDetail": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "storeCardImage": "https://inwfile.com/s-fq/lvuzqt.jpg",
        "storeGallery": [
          {
            "id": 1,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
          {
            "id": 2,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
          {
            "id": 3,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
          {
            "id": 4,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
          {
            "id": 5,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
        ]
      },
      {
        "storeId": 4,
        "storeTitle": "ร้านขายรถของเล่น",
        "storeSubDescription": "ของเล่นรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน",
        "storeDetail": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "storeCardImage": "https://inwfile.com/s-fq/lvuzqt.jpg",
        "storeGallery": [
          {
            "id": 1,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
          {
            "id": 2,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
          {
            "id": 3,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
          {
            "id": 4,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
          {
            "id": 5,
            "imageUrl": "https://inwfile.com/s-fq/lvuzqt.jpg"
          },
        ]
      },
    ]
    // const result = await getStoreByIdFetch(storeId);
    let tmp = result.filter(val => val.storeId === Number(storeId))[0]
    setStoreInfo(tmp)

    setLoading(false)
  }

  useEffect(() => {
    getBaseApi()
  }, [])

  return (
    <>
      {/* <Header /> */}
      <ThemeProvider theme={darkTheme}>
        <article>
          <div style={{ paddingTop: 24, paddingBottom: 24, paddingLeft: '5%', paddingRight: '5%' }}>
            {!loading ?
              <Row gutter={[24, 24]}>
                <Col xs={24} sm={8} md={6} lg={6}>
                  <Cards data={storeInfo ? storeInfo : null} isShowSingle={true} />
                </Col>

                <Col xs={24} sm={16} md={18} lg={18}>
                  <Row gutter={[0, 24]}>
                    <Col span={24}>
                      <StoreDetail data={storeInfo ? storeInfo.storeDetail : '-'} />
                    </Col>

                    <Col span={24}>
                      <StoreGallery data={storeInfo ? storeInfo.storeGallery : []} />
                    </Col>
                  </Row>
                </Col>
              </Row>
              :
              <div style={{ padding: '20%' }}>
                <center><Spin size='large'></Spin></center>
              </div>
            }
          </div>
        </article>
      </ThemeProvider>
    </>
  )
}

