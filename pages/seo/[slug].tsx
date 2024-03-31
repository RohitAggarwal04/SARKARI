'use client';

import React from 'react';
import { Col, Row } from 'antd';

export default function SeoComponent(props) {
    const {seoData} = props;

    return (
        <div className='blockHolder'>
            <Row>
            <Col xs={24} md={1} lg={1} xl={1} xxl={24}></Col>
            <Col xs={24} md={22} lg={22} xl={22} xxl={24}>
                <div dangerouslySetInnerHTML={{ __html: seoData?.result?.content}} />
            </Col>
            <Col xs={24} md={1} lg={1} xl={1} xxl={24}></Col>
            </Row>
        </div>
    );
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    return {
        paths: [
          { params: {slug: 'about-us'} },
        ],
        fallback: true, // false or "blocking"
      }
}


export async function getStaticProps({params}) {
    try {
      const seoRes = await fetch(`http://65.2.101.63:9000/api/seo?entity_id=${params.slug}&entity_type=${params.slug}`)
      if (!seoRes.ok) {
        throw new Error('Error');
      }
      const seoData = await seoRes.json();
  
      return {
        props: {
            seoData,
            params
        },
      };
    } catch (error) {
      console.error('Error fetching data:', error.message);
  
      // Handle the error as needed, e.g., return a default value or an error message
      return {
        props: {
            seoData: null,
        },
      };
    }
  }