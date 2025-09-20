import React from 'react';
import Container from '../../common/Container';
import ContentBlock from '../../components/ContentBlock';
import * as S from './pricescss';
import { Link } from "react-router-dom";

const subscriptionPlans = [
  {
    name: 'باقة أساسية',
    description: 'لمتابعي الأفلام والمسلسلات',
    features: ['جميع مسلسلات شاهد', "جميع محتوى نتفلكس", 'OSN جميع محتوى ', 'Starzplay جميع محتوى '],
    pricing: { 3: 25, 6: 45, 12: 75 },
    color: '#4CAF50'
    // No svg property for this plan
  },
  {
    name: 'باقة مميزة',
    description: 'مناسبة لمتابعي دوري روشن',
    features: ["جميع مميزات الباقة الأساسية من مسلسلات وأفلام" , ' قنوات ثمانية دوري روشن '  ],
    pricing: { 3: 40, 6: 65, 12: 100 },
    color: '#2196F3',
    svg: '/img/svg/savic.svg',
  },
  {
    name: 'باقة فاخرة ',
    description: "لمتابعة الكرة الشاملة محلية وأوروبية",
    features: ["جميع مميزات الباقة الأساسية من مسلسلات وأفلام", " جميع مميزات الباقة المميزة من قنوات ثمانية" , ' beIN Sport قنوات ' , "beIN دوري أبطال أسيا "],
    pricing: { 3: 50, 6: 80, 12: 150 },
    color: '#F44336',
    svg: '/img/svg/vini.svg',
  },
];

const qAndA = [
  {
    question: "كيف أستطيع الاشتراك؟",
    answer: "يمكنك الاشتراك عن طريق الضغط على زر الاشتراك في الباقة المناسبة وسيتم توجيهك إلى واتساب لإكمال العملية.",
  },
  {
    question: "هل يمكنني تغيير الباقة لاحقاً؟",
    answer: "نعم، يمكنك ترقية أو تغيير الباقة في أي وقت بالتواصل مع الدعم.",
  },
  {
    question: "هل يشتغل على جهازي؟",
    answer: (
      <>
        تطبيقنا ييشتغل على جميع الأجهزة الذكية وأجهزة الكمبيوتر والشاشات، يمكنك تحميل التطبيق من المتجر المناسب لجهازك.
        <br />
        <Link to="/tarkeeb" style={{ color: "#2196F3", textDecoration: "underline" }}>
          اضغط هنا لمعرفة الأجهزة المدعومة
        </Link>
      </>
    ),
  },
  {
    question: "الضمان وسرعة التسليم؟",
    answer: " جميع الاشتراكات تأتي مع ضمان الفترة كاملة، وسيتم تفعيل الاشتراك خلال دقائق من الدفع في أوقات العمل",
  },
  {
    question: "هل أقدر أطلب تجربة؟",
    answer: (
      <>
        أكيد، كلمنا على الواتس وبنرسلك تجربة مدتها 3 ساعات
        <br />
        <a
          href="https://wa.me/+966542668201?text=مرحبا،%20أرغب%20في%20طلب%20تجربة%20مدتها%203%20ساعات"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2196F3", textDecoration: "underline" }}
        >
          اضغط هنا لتجربة الخدمة
        </a>
      </>
    ),
  },
];

const Subscription: React.FC = () => {
  return (
    <Container>
      <ContentBlock
        direction="right"
        title="باقاتنا وأسعارنا"
        content="اختار الباقة اللي تناسبك واستمتع بعالم مفتوح من المتعة"
        icon="haaland.svg"
        id="intro"
      />
      <S.SubscriptionWrapper>
        <S.Title>اختر الباقة</S.Title>
        <S.PlanGrid>
          {subscriptionPlans.map((plan) => (
            <S.PlanCard key={plan.name} color={plan.color}>
              {plan.svg && <S.PlanSVG src={plan.svg} alt="" />}
              <S.PlanHeader color={plan.color}>
                <S.PlanName>{plan.name}</S.PlanName>
                <S.PlanDescription>{plan.description}</S.PlanDescription>
              </S.PlanHeader>
              <S.FeatureList>
                {plan.features.map((feature) => (
                  <S.FeatureItem key={feature}>{feature}</S.FeatureItem>
                ))}
              </S.FeatureList>
              <S.PricingSection>
                {[3, 6, 12].map((months) => {
                  const isTwelveMonth = months === 12;
                  return (
                    <S.PricingOption key={months}>
                      {isTwelveMonth && (
                        <div style={{
                          background: 'linear-gradient(90deg, #ff9800 0%, #ffd600 100%)',
                          color: '#222',
                          fontWeight: 'bold',
                          fontSize: '1.5rem',
                          borderRadius: '8px',
                          padding: '10px 0',
                          marginBottom: '10px',
                          boxShadow: '0 2px 12px rgba(255, 193, 7, 0.18)',
                          letterSpacing: '1px',
                        }}>
                          🎁 مع سنة اضافية هدية مجانا 🎁
                        </div>
                      )}
                      <S.Duration>{months} Months</S.Duration>
                      <S.Price>ر.س {plan.pricing[months as 3 | 6 | 12]}</S.Price>
                      {isTwelveMonth && (
                        <div style={{
                          color: '#d32f2f',
                          fontWeight: 'bold',
                          fontSize: '1.3rem',
                          margin: '8px 0 0 0',
                          letterSpacing: '1px',
                        }}>
                          سنتين بسعر السنة
                        </div>
                      )}
                      <S.SubscribeButton
                        as="a"
                        href={`https://wa.me/+966542668201?text=بطلب%20%20${plan.name}%20%20%20${months}%20أشهر${months > 1 ? '' : ''}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        اشترك الآن
                      </S.SubscribeButton>
                    </S.PricingOption>
                  );
                })}
              </S.PricingSection>
            </S.PlanCard>
          ))}
        </S.PlanGrid>
      </S.SubscriptionWrapper>

      {/* Q&A Section */}
      <div style={{ marginTop: "60px", marginBottom: "40px", maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}>
        <h2 style={{ fontWeight: "bold", fontSize: "2rem", marginBottom: "24px", textAlign: "center" }}>الأسئلة الشائعة</h2>
        {qAndA.map((item, idx) => (
          <div key={idx} style={{ marginBottom: "32px" }}>
            <div style={{ fontWeight: "bold", fontSize: "2rem", marginBottom: "8px" }}>{item.question}</div>
            <div style={{ fontSize: "1.7rem", color: "#444" }}>{item.answer}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Subscription;