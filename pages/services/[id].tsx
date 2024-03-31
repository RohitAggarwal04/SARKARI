"use client";

import React from "react";
import { Col, Row, Tabs } from "antd";
import { useRouter } from "next/navigation";
import SubCatContainer from "./SubCatContainer";

export default function Services(props) {
  const { categoryData, subCategoryData, seoData, params } = props;
  const { TabPane } = Tabs;
  const router = useRouter();
  let category: any = {};
  const onChange = (key: string) => {
    event.preventDefault();
    router.push(`/services/${key}`);
  };

  if (categoryData) {
    category = categoryData.result.find((item: any) => item.id === params.id);
  }

  return (
    <div className="blockHolder">
      <Row>
        <Col xs={24} md={1} lg={1} xl={1} xxl={24}></Col>
        <Col xs={24} md={22} lg={22} xl={22} xxl={24}>
          {categoryData && (
            <div className="serviceBlock">
              <Tabs
                tabBarGutter={0}
                type="card"
                onChange={(e) => onChange(e)}
                defaultActiveKey={params.id.toString()}
                destroyInactiveTabPane={true}
              >
                {categoryData?.result?.map((item: any) => {
                  return (
                    <TabPane tab={item.display_name} key={item.id}>
                      <Row>
                        <Col xs={1} md={24}></Col>
                        <Col xs={22} md={24}>
                          {subCategoryData && (
                            <SubCatContainer
                              categoryItem={item}
                              seoData={seoData}
                              subCategoryData={subCategoryData}
                            />
                          )}
                        </Col>
                        <Col xs={1} md={24}></Col>
                      </Row>
                    </TabPane>
                  );
                })}
              </Tabs>
            </div>
          )}
        </Col>
        <Col xs={24} md={1} lg={1} xl={1} xxl={24}></Col>
      </Row>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "6" } },
      { params: { id: "7" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const categoryRes = await fetch("http://65.2.101.63:9000/api/category");
    const response = await fetch(
      `http://65.2.101.63:9000/api/sub_category?category_id=${params.id}`
    );
    const seoRes = await fetch(
      `http://65.2.101.63:9000/api/seo?entity_id=${params.id}&entity_type=CATEGORY`
    );
    if (!response.ok && !categoryRes.ok && !seoRes.ok) {
      throw new Error("Error");
    }
    const categoryData = await categoryRes.json();
    const subCategoryData = await response.json();
    const seoData = await seoRes.json();

    return {
      props: {
        subCategoryData,
        categoryData,
        seoData,
        params,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);

    // Handle the error as needed, e.g., return a default value or an error message
    return {
      props: {
        subCategoryData: null, // or an error message
        categoryData: null,
        seoData: null,
      },
    };
  }
}
