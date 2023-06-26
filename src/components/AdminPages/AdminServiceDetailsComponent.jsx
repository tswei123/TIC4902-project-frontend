import React, { useState, useEffect } from 'react';
import useAdminModify from './AdminModifyContainer';
import { useLocation } from 'react-router-dom';
import UpdateServiceForm from './UpdateServiceForm';
import DeletePrice from './AdminDeletePrice';
import DeleteItem from './AdminDeleteItem';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';

const AdminServiceDetails = () => {
  const [updateStatus, setUpdateStatus] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const { getData, servicedata, loading } = useAdminModify();
  useEffect(() => {
    const fetchData = async () => {
      await getData();
    }
    fetchData();
  }, [loading, updateStatus]);
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  return (
    loading ?
      <>
        <hr />
        <h3>Service ID {servicedata.id}</h3>
        <Nav tabs>
          <NavItem className='col-sm'>
            <NavLink
              className={classnames({
                active:
                  activeTab === '1'
              })}
              onClick={() => { toggle('1'); }}
            >
              Modify Service
            </NavLink>
          </NavItem>
          <NavItem className='col-sm'>
            <NavLink
              className={classnames({
                active:
                  activeTab === '2'
              })}
              onClick={() => { toggle('2'); }}
            >
              Price Packages
            </NavLink>
          </NavItem>
          <NavItem className='col-sm'>
            <NavLink
              className={classnames({
                active:
                  activeTab === '3'
              })}
              onClick={() => { toggle('3'); }}
            >
              Additional Item
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <UpdateServiceForm servicedata={servicedata} setUpdateStatus={setUpdateStatus}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <DeletePrice pricedata={servicedata.prices} setUpdateStatus={setUpdateStatus} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <DeleteItem itemdata={servicedata.items} setUpdateStatus={setUpdateStatus} />
              </Col>
            </Row>
          </TabPane>
        </TabContent>



      </>
      :
      <>
        Loading...
      </>
  )
}

export default AdminServiceDetails;