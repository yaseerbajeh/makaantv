import styled from 'styled-components';

export const SubscriptionWrapper = styled.div`
  padding: 60px 10px;
  text-align: center;

  @media only screen and (max-width: 600px) {
    padding: 32px 2px;
  }
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  color: #222;
  margin-bottom: 50px;
  font-weight: 800;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 28px;
  }
`;

export const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
  gap: 48px;
  max-width: 1600px;
  margin: 0 auto;

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 28px;
    max-width: 100vw;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
    max-width: 100vw;
    padding: 0 4px;
  }
`;

export const PlanCard = styled.div<{ color: string }>`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 6px 32px rgba(0, 0, 0, 0.13);
  overflow: visible;
  position: relative;
  transition: transform 0.3s cubic-bezier(.4,2,.6,1);
  min-height: 520px;
  max-width: 540px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 10px;

  @media only screen and (max-width: 600px) {
    min-height: 420px;
    max-width: 98vw;
    padding-bottom: 4px;
  }

  &:hover {
    transform: scale(1.04) translateY(-12px);
  }
`;

export const PlanSVG = styled.img`
  position: absolute;
  top: -40px;
  right: -40px;
  width: 200px;
  height: 185px;
  z-index: 2;
  pointer-events: none;

  @media only screen and (max-width: 600px) {
    width: 120px;
    height: 117px;
    top: -20px;
    right: -20px;
  }
`;

export const PlanHeader = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  color: #fff;
  padding: 32px 20px 24px 20px;

  @media only screen and (max-width: 600px) {
    padding: 20px 10px 16px 10px;
  }
`;

export const PlanName = styled.h2`
  font-size: 2.4rem;
  margin: 0;

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const PlanDescription = styled.p`
  font-size: 1.25rem;
  margin: 16px 0 0;
  opacity: 0.92;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    margin: 10px 0 0;
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 28px 24px 18px 24px;
  margin: 0;

  @media only screen and (max-width: 600px) {
    padding: 18px 8px 10px 8px;
  }
`;

export const FeatureItem = styled.li`
  font-size: 1.15rem;
  color: #444;
  margin-bottom: 14px;
  position: relative;
  padding-left: 30px;

  &:before {
    content: '✔';
    position: absolute;
    left: 0;
    color: #4CAF50;
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 10px;
    padding-left: 22px;
    &:before {
      font-size: 1rem;
    }
  }
`;

export const PricingSection = styled.div`
  padding: 0 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    padding: 0 8px 12px;
    gap: 12px;
  }
`;

export const PricingOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  background: #f9f9f9;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    padding: 10px;
    border-radius: 7px;
  }
`;

export const Duration = styled.span`
  font-size: 1.15rem;
  font-weight: 700;
  color: #333;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Price = styled.span`
  font-size: 1.35rem;
  color: #222;
  font-weight: 800;

  @media only screen and (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const SubscribeButton = styled.button`
  background: #222;
  color: #fff;
  border: none;
  padding: 13px 28px;
  border-radius: 7px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #444;
  }

  @media only screen and (max-width: 600px) {
    padding: 10px 18px;
    font-size: 1rem;
    border-radius: 6px;
  }
`;