import { css } from "styled-components";

export const aboutAppStyles = css`
  .about-app-container {
    min-height: 100vh;
    background-color: #f3f4f6; /* Tailwind bg-gray-100 */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem; /* Tailwind py-8 px-4 */
    direction: rtl; /* Support Arabic text */
    font-family: 'Noto Sans Arabic', sans-serif; /* Suitable for Arabic */
  }

  .video-section {
    width: 100%;
    max-width: 1024px; /* Tailwind max-w-4xl */
  }

  .video-title {
    font-size: 1.875rem; /* Tailwind text-3xl */
    font-weight: 700; /* Tailwind font-bold */
    text-align: center;
    margin-bottom: 1.5rem; /* Tailwind mb-6 */
    color: #1f2937; /* Tailwind text-gray-800 */
  }

  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    width: 100%;
  }

  .video-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem; /* Tailwind rounded-lg */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* Tailwind shadow-lg */
  }

  .text-section {
    width: 100%;
    max-width: 1024px; /* Tailwind max-w-4xl */
    margin-top: 2rem; /* Tailwind mt-8 */
  }

  .text-title {
    font-size: 1.5rem; /* Tailwind text-2xl */
    font-weight: 600; /* Tailwind font-semibold */
    margin-bottom: 1rem; /* Tailwind mb-4 */
    color: #374151; /* Tailwind text-gray-700 */
  }

  .text-content {
    font-size: 1.125rem; /* Tailwind text-lg */
    color: #4b5563; /* Tailwind text-gray-600 */
    line-height: 1.75; /* Tailwind leading-relaxed */
  }

  .text-paragraph {
    margin-bottom: 1rem; /* Tailwind mb-4 */
  }

  .text-link {
    color: #3b82f6; /* Tailwind text-blue-500 */
    text-decoration: underline;
  }

  .text-link:hover {
    color: #1d4ed8; /* Tailwind hover:text-blue-700 */
  }
`;