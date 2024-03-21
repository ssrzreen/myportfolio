import { Col, Row, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import Cards from '../../container/Cards'
import StoreGallery from './StoreGallery'
import StoreDetail from './StoreDetail'
import { useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../../../../utils/Themes'
import Icon from '../../../../images/iconapp.png'
import Pic1 from '../../../../images/1.png'
import Pic2 from '../../../../images/2.png'
import Pic3 from '../../../../images/3.png'
import Pic4 from '../../../../images/4.png'
import Pic5 from '../../../../images/5.png'
import Pic6 from '../../../../images/6.png'
import Pic7 from '../../../../images/7.png'
import Pic8 from '../../../../images/8.png'
import Pic9 from '../../../../images/9.png'
import Pic10 from '../../../../images/10.png'
import Pic11 from '../../../../images/11.png'
import Pic12 from '../../../../images/12.png'
import IconWMSL from '../../../../images/WMSL.png'
import WMSL1 from '../../../../images/รูปภาพ1.png'
import WMSL2 from '../../../../images/รูปภาพ2.png'
import WMSL3 from '../../../../images/รูปภาพ3.png'
import WMSL4 from '../../../../images/รูปภาพ4.png'
import WMSL5 from '../../../../images/รูปภาพ5.png'
import WMSL6 from '../../../../images/รูปภาพ6.png'
import WMSL7 from '../../../../images/รูปภาพ7.png'
import WMSL8 from '../../../../images/รูปภาพ8.png'
import IconME from '../../../../images/ME1.png'
import PicRe1 from '../../../../images/รูปภาพ React 1.png'
import PicRe2 from '../../../../images/รูปภาพ React 2.png'
import PicRe3 from '../../../../images/รูปภาพ React 3.png'
import PicRe4 from '../../../../images/รูปภาพ React 4.png'
import PicRe5 from '../../../../images/รูปภาพ React 5.png'
import PicRe6 from '../../../../images/รูปภาพ React 6.png'
import PicRe7 from '../../../../images/รูปภาพ React 7.png'
import IconSut from '../../../../images/sutvul.png'
import PicE1 from '../../../../images/E1.png'
import PicE2 from '../../../../images/E2.png'
import PicE3 from '../../../../images/E3.png'
import PicE4 from '../../../../images/E4.png'
import PicE5 from '../../../../images/E5.png'
import PicE6 from '../../../../images/E6.png'
import PicE7 from '../../../../images/E7.png'

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
        "storeTitle": "1 st Internship for 4 months",
        "storeSubDescription": "WebApplication Develop",
        "storeDetail": " Job position : Application Developer / Software Tester (WebApplication Develop)",
        "storeCardImage": IconWMSL,
        "storeGallery": [
          {
            "id": 1,
            "imageUrl": WMSL1
          },
          {
            "id": 2,
            "imageUrl": WMSL2
          },
          {
            "id": 3,
            "imageUrl": WMSL3
          },
          {
            "id": 4,
            "imageUrl": WMSL4
          },
          {
            "id": 5,
            "imageUrl": WMSL5
          },
          {
            "id": 6,
            "imageUrl": WMSL6
          },
          {
            "id": 7,
            "imageUrl": WMSL7
          },
          {
            "id": 8,
            "imageUrl": WMSL8
          },
        ]
      },
      {
        "storeId": 2,
        "storeTitle": "2 nd Internship for 4 months",
        "storeSubDescription": "Moblie Develop",
        "storeDetail": " - Job position : Moblie Develop",
        "storeCardImage": IconME,
        "storeGallery": [
          {
            "id": 1,
            "imageUrl": PicRe1
          },
          {
            "id": 2,
            "imageUrl": PicRe2
          },
          {
            "id": 3,
            "imageUrl": PicRe3
          },
          {
            "id": 4,
            "imageUrl": PicRe4
          },
          {
            "id": 5,
            "imageUrl": PicRe5
          },
          {
            "id": 6,
            "imageUrl": PicRe6
          },
          {
            "id": 7,
            "imageUrl": PicRe7
          },
        ]
      },
      {
        "storeId": 3,
        "storeTitle": "Yolo Wash App Project",
        "storeSubDescription": "Project In Digital Technology",
        "storeDetail": "Designing IOT devices to make student accommodation’s washing machines smarter and make an app to be able to see the availabilty of the machine status, washing time, queue booking, including laundry delivery sevice.",
        "storeCardImage": Icon,
        "storeGallery": [
          {
            "id": 1,
            "imageUrl": Pic1
          },
          {
            "id": 2,
            "imageUrl": Pic2
          },
          {
            "id": 3,
            "imageUrl": Pic3
          },
          {
            "id": 4,
            "imageUrl": Pic4
          },
          {
            "id": 5,
            "imageUrl": Pic5
          },
          {
            "id": 6,
            "imageUrl": Pic6
          },
          {
            "id": 7,
            "imageUrl": Pic7
          },
          {
            "id": 8,
            "imageUrl": Pic8
          },
          {
            "id": 9,
            "imageUrl": Pic9
          },
          {
            "id": 10,
            "imageUrl": Pic10
          },
          {
            "id": 11,
            "imageUrl": Pic11
          },
          {
            "id": 12,
            "imageUrl": Pic12
          },
        ]
      },
      
      {
        "storeId": 4,
        "storeTitle": "Emergency Assessment And Rescue App",
        "storeSubDescription": "Project in android application development",
        "storeDetail": "it is an app that can report when someone is injured in an accident by locating the app and sending it to the first aid . in the app , you can assess the injured person’s condition and tell them the way to treat them .",
        "storeCardImage": IconSut,
        "storeGallery": [
          {
            "id": 1,
            "imageUrl": PicE1
          },
          {
            "id": 2,
            "imageUrl": PicE2
          },
          {
            "id": 3,
            "imageUrl": PicE3
          },
          {
            "id": 4,
            "imageUrl": PicE4
          },
          {
            "id": 5,
            "imageUrl": PicE5
          },
          {
            "id": 6,
            "imageUrl": PicE6
          },
          {
            "id": 7,
            "imageUrl": PicE7
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

