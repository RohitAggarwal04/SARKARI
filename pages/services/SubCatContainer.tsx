import React from "react";
import Image from "next/image";
import CategoryTemplate from "../../components/template/CategoryTemplate";
import { Col, Row } from "antd";
import Head from "next/head";

const SubCatContainer = (props: any) => {
  const { categoryItem, subCategoryData, seoData } = props;

  React.useEffect(() => {
    const sourceElement = document.querySelector(".ant-tabs-tab-active");
    if (sourceElement instanceof HTMLElement) {
      sourceElement.classList.add(`bg${categoryItem?.image_identifier}`);
    }
  }, [categoryItem?.image_identifier]);

  return (
    <div>
      <CategoryTemplate
        title={categoryItem?.display_name}
        backgroundColor={`bg${categoryItem?.image_identifier}`}
        textColor={`color${categoryItem?.image_identifier}`}
        imageBlock={
          <div className="border-div">
            <img
              src={`/assets/services/${categoryItem?.image_identifier}.jpg`}
              width={300}
              height={300}
              alt={categoryItem?.display_name}
            />
          </div>
        }
        categoryProps={{
          content: (
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus
              metus aliquam eleifend mi in nulla posuere sollicitudin. Enim sit
              amet venenatis urna. Sagittis nisl rhoncus mattis rhoncus urna.
              Arcu dictum varius duis at consectetur lorem donec massa. Etiam
              dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus. Venenatis urna cursus eget nunc scelerisque viverra
              mauris. Volutpat lacus laoreet non curabitur gravida arcu.
              Tristique risus nec feugiat in fermentum. Ornare lectus sit amet
              est placerat in. In arcu cursus euismod quis viverra nibh.
              Blandit.
            </div>
          ),
        }}
        subCategoryList={subCategoryData?.result}
      />
      <Row
        gutter={[0, 16]}
        className={`bg${categoryItem?.image_identifier} seoContentHolder seoContentParentHolder`}
      >
        <Col xs={24}>
          <div dangerouslySetInnerHTML={{ __html: seoData?.result?.content }} />
          {/* <h1>PROPREITORSHIP Definition:</h1>
                    <div>A single owner runs a business by investing  his/her money in it with having 100% ownership over the business decisions and profits and losses.</div>
                    <h2>Example: </h2>
                    <div>Beauty parlours,  taylor shops, bakeries, stationeries, Grocery store, etc.</div>
                    <h2>Advantages:</h2>
                    <div>
                        <ul>
                            <li>As a business is owned by a single person, start- up costs are low. The proprietor gains all the profits and bares losses.</li>
                            <li>Formation and closure are easier compared to any other type of businesses. A person can start a business whenever he/she wants and if circumstances change he/she can close the business.</li>
                            <li>All the decisions related to business are taken by a single owner. In this case, business matters can be kept confidential.</li>
                            <li>One can take tax deduction advantages related to business expenses.</li>
                        </ul>
                    </div>
                    <h2>Disadvantages:</h2>
                    <div>
                        <ul>
                            <li>This type of business has no separate legal entity. Proprietor has to bare all the debts. Proprietor might also have to give away his/her personal assets to clear debts.</li>
                            <li>Proprietor should have enough knowledge and skills in every aspect of business and survive in the market. It can be hectic for a single owner to run the business and he/she might go under loss.</li>
                            <li>They may have limited resources to start a business and it might work as per their expectations</li>
                        </ul>
                    </div>
                    <h2>Important registration to work in India:</h2>
                    <div>
                        <ul>
                            <li>Current bank Account.</li>
                            <li>GST registration form.</li>
                            <li>UDYAM registration.</li>
                            <li>Shop and Establishment Act.</li>
                        </ul>
                    </div>
                    <h2>Government schemes for supporting Sole proprietorship:</h2>
                    <div>
                        <ul>
                            <li>Samridhi Fund.</li>
                            <li>Pradhan Mantri Mudra Yojana.(PMMY)</li>
                            <li>Atal Innovation Mission.(AIM)</li>
                            <li>The Women Entrepreneurship Platform.(WEP)</li>
                            <li>Stand-Up India Scheme.</li>
                            <li>Self Employment and Talent Utilisation. (SETU)</li>
                            <li>Venture Capital Assistance Scheme.</li>
                        </ul>
                    </div>
                    <h2>Tax Benefits:</h2>
                    <div> In presumptive taxation under Section 44AD, your net income is considered as 8% of your turnover and you will pay tax on that income. If your receipts are in digital (non-cash) form then only 6% of your receipts are your net income and you will pay tax on that income. You don’t have to maintain accounting records.</div> */}
        </Col>
      </Row>
    </div>
  );
};

export default SubCatContainer;
