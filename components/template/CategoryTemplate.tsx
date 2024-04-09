import { Col, Row } from "antd";
import React from "react";
import Styles from "./Category.module.scss";
import Image from "next/image";

const CategoryTemplate = (props: any) => {
  const {
    title,
    imageBlock,
    backgroundColor,
    categoryProps,
    textColor,
    subCategoryList,
  } = props;
  const imageDomain =
    "https://sarkarifiling-assets.s3.ap-south-1.amazonaws.com/images/";
  return (
    <Row>
      <Col xs={24} md={11} className={`${backgroundColor} ${Styles.leftBlock}`}>
        <Row>
          <Col
            xs={24}
            md={24}
            style={{ paddingBottom: 24 }}
            className="imageBlock"
          >
            {imageBlock}
          </Col>
          <Col xs={{ span: 24 }} className={`block2`}>
            <div className={`${backgroundColor}`}>
              <div className={`${Styles.titleText} ${textColor}`}>{title}</div>
              <div className={`${Styles.summaryHolder}`}>
                {categoryProps?.content}
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      {subCategoryList && (
        <Col
          xs={{ order: 1, span: 24 }}
          sm={{ order: 1 }}
          md={{ order: 1, span: 13 }}
          lg={{ order: 1 }}
          className={`${backgroundColor} block1`}
        >
          <Row gutter={[16, 16]} style={{ paddingBottom: 16 }}>
            {subCategoryList.map((item: any) => {
              const discount = Math.round(
                ((item.pricing_info?.price -
                  item.pricing_info?.discounted_price) /
                  item.pricing_info?.price) *
                  100
              );
              let icon =
                `${imageDomain}${item.image_identifier}.png` ||
                `${imageDomain}${item.image_identifier}.PNG`;
              return (
                <Col key={item.id} xs={12} md={12}>
                  {item.pricing_info?.discounted_price && (
                    <div className={Styles.priceHolder}>
                      <div className={Styles.discountPercentage}>
                        {discount ? (
                          <div
                            className={Styles.discountText}
                          >{`${discount}%`}</div>
                        ) : null}
                      </div>
                      <div className={Styles.priceTextHolder}>
                        {discount ? (
                          <div className={Styles.actualPrice}>
                            ₹{item.pricing_info?.price}
                          </div>
                        ) : null}
                        <div className={Styles.discountPrice}>
                          ₹{item.pricing_info?.discounted_price}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className={`${Styles.subCategory} ${textColor}`}>
                    {/* {item.image_identifier && (
                      <Image
                        src={`${icon}`}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src = `${imageDomain}${item.image_identifier}.PNG`;
                          currentTarget.srcset = `/_next/image?url=${imageDomain}${item.image_identifier}.PNG&w=96&q=75 1x, /_next/image?url=${imageDomain}${item.image_identifier}.PNG&w=256&q=75 2x`;
                        }}
                        width={70}
                        height={80}
                        alt={item.display_name}
                      />
                    )} */}
                    {item.display_name.toUpperCase()}
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      )}
    </Row>
  );
};

export default CategoryTemplate;
