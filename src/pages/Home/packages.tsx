import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  direction: rtl;
  font-family: 'Noto Sans Arabic', sans-serif;
`;

const Title = styled.h1`
  font-size: 2.7rem;
  font-weight: 900;
  color: #d32f2f;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  letter-spacing: 1px;
  text-align: center;
`;

const CenterImage = styled.img`
  width: 340px;
  max-width: 90vw;
  height: auto;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.13);
  margin-bottom: 2.5rem;
`;

const WhatsButton = styled.a`
  display: inline-block;
  background: linear-gradient(90deg, #25d366 0%, #128c7e 100%);
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  padding: 1.1rem 3.5rem;
  border-radius: 2.5rem;
  box-shadow: 0 4px 16px rgba(37,211,102,0.18);
  text-decoration: none;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  transition: background 0.2s;
  letter-spacing: 1px;
  text-align: center;
  &:hover {
    background: linear-gradient(90deg, #128c7e 0%, #25d366 100%);
    color: #fff;
  }
`;

const NetflixNationalOffer: React.FC = () => {
  return (
    <PageWrapper>
      <Title>عروض اليوم الوطني</Title>
  <CenterImage src="/img/svg/packageprices.svg" alt="عروض اليوم الوطني" />

      {/* Offer: 6 months */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>
          بكج ال6 أشهر ب <span style={{ color: '#d32f2f' }}>100</span> ريال
        </div>
        <div style={{ fontSize: '1.1rem', color: '#444', marginBottom: '1.2rem' }}>
          نتفلكس 6 اشهر + شاهد 6 اشهر + IPTV 6 اشهر
        </div>
      </div>

      {/* Offer: 12 months */}
      <div style={{ textAlign: 'center', marginBottom: '2.2rem' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>
          بكج السنة ب <span style={{ color: '#d32f2f' }}>150</span> ريال
        </div>
        <div style={{ fontSize: '1.1rem', color: '#444' }}>
          نتفلكس 12 شهر + شاهد 12 شهر + IPTV  12 شهر
        </div>
      </div>

      <WhatsButton
        href="https://wa.me/+966542668201?text=%D8%A7%D8%B1%D9%8A%D8%AF%20%D8%B9%D8%B1%D8%B6%20%D8%A7%D9%84%D8%A8%D9%83%D8%AC%20%D9%84%D9%84%D9%8A%D9%88%D9%85%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A"
        target="_blank"
        rel="noopener noreferrer"
      >
        للشراء تواصل واتس
      </WhatsButton>
    </PageWrapper>
  );
};

export default NetflixNationalOffer;