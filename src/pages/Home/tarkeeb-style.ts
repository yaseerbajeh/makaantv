import { css } from "styled-components";

export const tarkeebStyles = css`
  .tarkeeb-container {
    max-width: 700px;
    margin: 40px auto;
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 6px 32px rgba(0,0,0,0.10);
    padding: 32px 18px;
    font-family: 'Tajawal', Arial, sans-serif;
    direction: rtl;
  }

  .tarkeeb-title {
    text-align: center;
    font-size: 2.2rem;
    color: #2196F3;
    margin-bottom: 32px;
    font-weight: bold;
  }

  .tarkeeb-section {
    margin-bottom: 28px;
  }

  .tarkeeb-section h2 {
    color: #4CAF50;
    font-size: 1.3rem;
    margin-bottom: 10px;
    font-weight: 700;
  }

  .tarkeeb-section ol {
    padding-right: 22px;
    margin: 0;
  }

  .tarkeeb-section li {
    margin-bottom: 8px;
    font-size: 1.08rem;
    color: #333;
  }

  .tarkeeb-section a {
    color: #2196F3;
    text-decoration: underline;
  }

  .tarkeeb-support {
    margin-top: 36px;
    text-align: center;
    font-size: 1.1rem;
  }

  .tarkeeb-home-link {
    display: inline-block;
    margin-top: 12px;
    color: #fff;
    background: #2196F3;
    padding: 8px 22px;
    border-radius: 7px;
    text-decoration: none;
    font-weight: 600;
    transition: background 0.2s;
  }

  .tarkeeb-home-link:hover {
    background: #1769aa;
  }

  @media (max-width: 600px) {
    .tarkeeb-container {
      padding: 16px 4px;
    }
    .tarkeeb-title {
      font-size: 1.3rem;
    }
    .tarkeeb-section h2 {
      font-size: 1.05rem;
    }
    .tarkeeb-section li {
      font-size: 0.98rem;
    }
  }
`;