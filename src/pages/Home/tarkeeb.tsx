import React from "react";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { tarkeebStyles } from "./tarkeeb-style";

const TarkeebGlobalStyle = createGlobalStyle`${tarkeebStyles}`;

const Tarkeeb = () => (
  <>
    <TarkeebGlobalStyle />
    <div className="tarkeeb-container">
      <h1 className="tarkeeb-title">طريقة تثبيت التطبيق</h1>

      <section className="tarkeeb-section">
        <h2>لأجهزة iPhone / iPad</h2>
        <ol>
          <li>افتح متجر App Store على جهازك.</li>
          <li>ابحث عن تطبيق <b>Veed IPTV</b> أو التطبيق الذي تم تزويدك به.</li>
          <li>قم بتنزيل التطبيق وتثبيته.</li>
          <li>افتح التطبيق وأدخل بيانات الاشتراك التي حصلت عليها.</li>
        </ol>
      </section>

      <section className="tarkeeb-section">
        <h2>لأجهزة اللابتوب (Windows / Mac)</h2>
        <ol>
          <li>افتح متصفح الإنترنت (Chrome أو Edge أو Safari).</li>
          <li>
            ادخل على الموقع:{" "}
            <a
              href="https://web.iptvsmarters.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              web.iptvsmarters.com
            </a>
          </li>
          <li>سجّل الدخول باستخدام بيانات الاشتراك.</li>
        </ol>
      </section>

      <section className="tarkeeb-section">
        <h2>لأجهزة Android (جوال أو تابلت)</h2>
        <ol>
          <li>افتح متجر Google Play.</li>
          <li>ابحث عن تطبيق <b>Veed IPTV</b> أو التطبيق الذي تم تزويدك به.</li>
          <li>قم بتنزيل التطبيق وتثبيته.</li>
          <li>افتح التطبيق وأدخل بيانات الاشتراك.</li>
        </ol>
      </section>

      <section className="tarkeeb-section">
        <h2>لشاشات LG / Samsung (سمارت)</h2>
        <ol>
          <li>افتح متجر التطبيقات على الشاشة (LG Content Store أو Samsung Apps).</li>
          <li>ابحث عن تطبيق <b>Smart IPTV</b> أو <b>SET IPTV</b>.</li>
          <li>ثبت التطبيق وافتحه.</li>
          <li>أرسل لنا عنوان MAC الظاهر على الشاشة لتفعيل الاشتراك.</li>
          <li>بعد التفعيل، أعد تشغيل التطبيق وستظهر القنوات.</li>
        </ol>
      </section>

      <section className="tarkeeb-section">
        <h2>لأجهزة Android TV (مثل Mi Box, Nvidia Shield, وغيرها)</h2>
        <ol>
          <li>افتح متجر Google Play على جهاز Android TV.</li>
          <li>ابحث عن تطبيق <b>Veed IPTV</b> أو <b>IPTV Smarters Pro</b>.</li>
          <li>ثبت التطبيق وافتحه.</li>
          <li>أدخل بيانات الاشتراك التي حصلت عليها.</li>
        </ol>
      </section>

      <div className="tarkeeb-support">
        <p>
          لأي استفسار أو مساعدة في التثبيت، تواصل معنا عبر{" "}
          <a
            href="https://wa.me/+966542668201"
            target="_blank"
            rel="noopener noreferrer"
          >
            واتساب
          </a>
          .
        </p>
        <Link to="/" className="tarkeeb-home-link">
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </div>
  </>
);

export default Tarkeeb;
