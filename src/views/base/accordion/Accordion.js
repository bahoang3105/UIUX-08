import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CTableDataCell,
  CTableHeaderCell,
  CTable,
  CTableBody,
  CTableRow,
  CTableHead,
} from '@coreui/react'
import { CChartLine, CChartDoughnut, CChartBar } from '@coreui/react-chartjs' 
import { cilChevronCircleDownAlt } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import Accordion from '../spinners/Spinners'

const Accordio = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [visible6, setVisible6] = useState(false)
  const [visible7, setVisible7] = useState(false)

  useEffect(() => {
    document.title = 'Dash board công việc đơn vị'
  })

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-1">
          <CCardHeader>
            <strong>Tổng quan công việc cá nhân</strong>
          </CCardHeader>
          <div className='tongquan'>
            <div style={{ padding: 10 }}>
              <div style={{ textAlign: 'center', padding: 5 }}>Tổng số cv</div>
              <div style={{ textAlign: 'center', fontSize: 20, fontWeight: 600, color: 'rgb(34, 104, 211)' }}>15</div>
            </div>
            <div style={{ padding: 10 }}>
              <div style={{ textAlign: 'center', padding: 5 }}>Bạn đã tạo</div>
              <div style={{ textAlign: 'center', fontSize: 20, fontWeight: 600, color: 'rgb(34, 104, 211)' }}>1</div>
            </div>
            <div style={{ padding: 10 }}>
              <div style={{ textAlign: 'center', padding: 5 }}>Bạn thực hiện</div>
              <div style={{ textAlign: 'center', fontSize: 20, fontWeight: 600, color: 'rgb(34, 104, 211)' }}>13</div>
            </div>
            <div style={{ padding: 10 }}>
              <div style={{ textAlign: 'center', padding: 5 }}>Bạn phê duyệt</div>
              <div style={{ textAlign: 'center', fontSize: 20, fontWeight: 600, color: 'rgb(34, 104, 211)' }}>0</div>
            </div>
            <div style={{ padding: 10 }}>
              <div style={{ textAlign: 'center', padding: 5 }}>Bạn tư vấn</div>
              <div style={{ textAlign: 'center', fontSize: 20, fontWeight: 600, color: 'rgb(34, 104, 211)' }}>0</div>
            </div>
            <div style={{ padding: 10 }}>
              <div style={{ textAlign: 'center', padding: 5 }}>Bạn quan sát</div>
              <div style={{ textAlign: 'center', fontSize: 20, fontWeight: 600, color: 'rgb(34, 104, 211)' }}>1</div>
            </div>
          </div>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-1">
          <CCardHeader>
            <strong>Tổng quan công việc 10-2021</strong>
            <CIcon
              icon={cilChevronCircleDownAlt}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setVisible1(!visible1)
              }}
              style={{
                cursor: 'pointer',
                float: 'right',
              }}
            />
          </CCardHeader>
          <CCollapse visible={visible1}>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>
                      Đơn vị
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>
                      Tổng số công việc
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Đang thực hiện</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Đã hoàn thành</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Quá hạn</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row" style={{ textAlign: 'center' }}>Tổng</CTableHeaderCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>4</CTableDataCell>
                    <CTableDataCell style={{ color: 'blue', textAlign: 'center' }}>
                      3
                    </CTableDataCell>
                    <CTableDataCell style={{ color: 'green', textAlign: 'center' }}>3</CTableDataCell>
                    <CTableDataCell style={{ color: 'red', textAlign:'center' }}>1</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row" style={{ textAlign: 'center' }}>Nguyễn Bá Hoàng</CTableHeaderCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>4</CTableDataCell>
                    <CTableDataCell style={{ color: 'blue', textAlign: 'center' }}>
                      1
                    </CTableDataCell>
                    <CTableDataCell style={{ color: 'green', textAlign: 'center' }}>3</CTableDataCell>
                    <CTableDataCell style={{ color: 'red', textAlign:'center' }}>1</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCollapse>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-1">
          <CCardHeader>
            <strong>Đóng góp công việc 10-2021</strong>
            <CIcon
              icon={cilChevronCircleDownAlt}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setVisible2(!visible2)
              }}
              style={{
                cursor: 'pointer',
                float: 'right',
              }}
            />
          </CCardHeader>
          <CCollapse visible={visible2}>
            <CCardBody>
            <CChartBar
              data={{
                labels: ['Nguyễn Bá Hoàng', 'Đồng Quốc Hoàn', 'Phạm Nam Anh', 'CHITPASONG SINGKHAOPHET'],
                datasets: [
                  {
                    label: 'Công việc',
                    backgroundColor: '#f87979',
                    data: [5, 8, 6, 4],
                  },
                ],
              }}
              labels="months"
            />
            </CCardBody>
          </CCollapse>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-1">
          <CCardHeader>
            <strong>Tiến độ công việc 10-2021</strong>
            <CIcon
              icon={cilChevronCircleDownAlt}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setVisible3(!visible3)
              }}
              style={{
                cursor: 'pointer',
                float: 'right',
              }}
            />
          </CCardHeader>
          <CCollapse visible={visible3}>
            <CCardBody>
              <CCol xs={6} style={{ marginLeft: '25%' }}>
                <CChartDoughnut
                  data={{
                    labels: ['Đúng tiến độ', 'Trễ tiến độ', 'Quá hạn'],
                    datasets: [
                      {
                        backgroundColor: ['green', 'orange', 'red'],
                        data: [4, 5, 3],
                      },
                    ],
                  }}
                />
              </CCol>
            </CCardBody>
          </CCollapse>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-1">
          <CCardHeader>
            <strong>Kết quả trung bình công việc 10-2021</strong>
            <CIcon
              icon={cilChevronCircleDownAlt}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setVisible5(!visible5)
              }}
              style={{
                cursor: 'pointer',
                float: 'right',
              }}
            />
          </CCardHeader>
          <CCollapse visible={visible5}>
            <CCardBody>  
              <CChartLine
                data={{
                  labels: ['09-2021', '10-2021', '11-2021', '12-2021', '01-2022'],
                  datasets: [
                    {
                      label: 'UIUX_10',
                      backgroundColor: 'rgba(220, 220, 220, 0.2)',
                      borderColor: 'rgba(220, 220, 220, 1)',
                      pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                      pointBorderColor: '#fff',
                      data: [9, 36, 40, 13, 24],
                    },
                    {
                      label: 'UIUX_08',
                      backgroundColor: 'rgba(151, 187, 205, 0.2)',
                      borderColor: 'rgba(151, 187, 205, 1)',
                      pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                      pointBorderColor: '#fff',
                      data: [19, 6, 20, 43, 34],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCollapse>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-1">
          <CCardHeader>
            <strong>Tải công việc đơn vị 10-2021</strong>
            <CIcon
              icon={cilChevronCircleDownAlt}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setVisible6(!visible6)
              }}
              style={{
                cursor: 'pointer',
                float: 'right',
              }}
            />
          </CCardHeader>
          <CCollapse visible={visible6}>
            <CCardBody>
              <CChartLine
                data={{
                  labels: ['09-2021', '10-2021', '11-2021', '12-2021', '01-2022'],
                  datasets: [
                    {
                      label: 'Tải công việc',
                      backgroundColor: 'rgba(220, 220, 220, 0.2)',
                      borderColor: 'rgba(220, 220, 220, 1)',
                      pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                      pointBorderColor: '#fff',
                      data: [9, 36, 40, 13, 24],
                    }
                  ],
                }}
              />
            </CCardBody>
          </CCollapse>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-1">
          <CCardHeader>
            <strong>Thống kê bấm giờ 10-2021</strong>
            <CIcon
              icon={cilChevronCircleDownAlt}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setVisible7(!visible7)
              }}
              style={{
                cursor: 'pointer',
                float: 'right',
              }}
            />
          </CCardHeader>
          <CCollapse visible={visible7}>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>
                      STT
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>
                      Họ và tên
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Tổng thời gian</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Bấm giờ</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Bấm hẹn giờ</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Bấm bù giờ</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell style={{ textAlign: 'center' }}>1</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>Nguyễn Bá Hoàng</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>00:00:00</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>00:00:00</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>00:00:00</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>00:00:00</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell style={{ textAlign: 'center' }}>2</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>Đồng Quốc Hoàn</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>00:00:00</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>00:00:00</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>00:00:00</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>00:00:00</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell style={{ textAlign: 'center' }}>3</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>Phạm Nam Anh</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>00:00:00</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>00:00:00</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>00:00:00</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>00:00:00</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell style={{ textAlign: 'center' }}>4</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>CHITPASONG SINGKHAOPHET</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>00:00:00</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>00:00:00</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>00:00:00</CTableDataCell>
                    <CTableDataCell style={{ textAlign: 'center' }}>00:00:00</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCollapse>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordio
