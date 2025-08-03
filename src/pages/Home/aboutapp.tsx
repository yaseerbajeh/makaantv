import React from "react";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { aboutAppStyles } from "./aboutapp-style";

const AboutAppGlobalStyle = createGlobalStyle`${aboutAppStyles}`;

const AboutApp: React.FC = () => {
  return (
    <div className="about-app-container">
      <AboutAppGlobalStyle />
      {/* Video Section */}
      <div className="video-section">
        <h1 className="video-title">
          فيديو تعريفي عن خدمتنا
        </h1>
        <div className="video-wrapper">
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/07YSC7LHioQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-section">
        <h2 className="text-title">تفاصيل الخدمة</h2>
        <div className="text-content">
          <p className="text-paragraph">
            مرحبًا بكم في منصتنا التي تقدم أفضل تجربة ترفيهية لمحبي الأفلام، المسلسلات، والرياضة! نقدم لكم مجموعة واسعة من المحتوى الحصري الذي يشمل جميع مسلسلات شاهد، محتوى نتفلكس، OSN، Starzplay، بالإضافة إلى البث المباشر لقنوات SSC وbeIN Sport. سواء كنت من عشاق الدراما، الأكشن، أو متابعي دوري روشن ودوري أبطال أسيا، ستجد كل ما تبحث عنه في مكان واحد.
          </p>
          <p className="text-paragraph">
            تم تصميم خدمتنا لتكون متوافقة مع جميع الأجهزة الذكية، بما في ذلك الهواتف الذكية، الأجهزة اللوحية، أجهزة الكمبيوتر، وشاشات السمارت مثل LG وSamsung. يمكنك بسهولة تنزيل تطبيقنا من متجر التطبيقات الخاص بجهازك، أو الوصول إلى المحتوى من خلال متصفح الإنترنت. عملية التثبيت بسيطة وسريعة، وفريق الدعم لدينا متاح دائمًا لمساعدتك عبر واتساب.
          </p>
          <p className="text-paragraph">
            ما يميزنا هو التزامنا بتقديم تجربة مستخدم سلسة ومريحة. نقدم اشتراكات مرنة تناسب جميع الاحتياجات، سواء كنت تبحث عن باقة أساسية للأفلام والمسلسلات، أو باقة مميزة تشمل قنوات رياضية، أو حتى باقة فاخرة تجمع كل شيء. جميع الاشتراكات تأتي مع ضمان كامل للمدة، ويتم تفعيل الخدمة خلال دقائق من الدفع.
          </p>
          <p className="text-paragraph">
            بالإضافة إلى ذلك، نقدم تجربة مجانية مدتها 3 ساعات لتتمكن من استكشاف الخدمة قبل الاشتراك. كل ما عليك هو التواصل معنا عبر واتساب، وسنرسل لك تفاصيل التجربة فورًا. انضم إلينا اليوم واستمتع بعالم من الترفيه بلا حدود!
          </p>
          <p className="text-paragraph">
            إذا كنت بحاجة إلى مساعدة إضافية أو لديك استفسارات حول التثبيت أو الاشتراك، لا تتردد في التواصل مع فريق الدعم عبر{' '}
            <a
              href="https://wa.me/+966542668201?text=مرحبا،%20أود%20معرفة%20المزيد%20عن%20الخدمة"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              واتساب
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;