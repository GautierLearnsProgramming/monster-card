import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { Layout, Row, Col } from 'antd';
import Grid from '../Grid/grid.component'

function App() {

  const { Content } = Layout;
    useEffect(() => {
        document.title = "Monster Rolodex"
    }, []);


  return (
      <Layout>
          <Content className={styles.main}>
              <Row className={[styles.title, styles.titleRow].join(' ')} justify = "center">
                  <Col>
                     Monster Rolodex
                  </Col>
              </Row>
            <Grid/>
          </Content>
      </Layout>
  );
}

export default App;
