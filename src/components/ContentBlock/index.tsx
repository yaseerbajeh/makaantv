import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const history = useHistory();

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                        },
                        idx: number
                      ) => {
                        // Left button: WhatsApp
                        if (idx === 0) {
                          return (
                            <Button
                              key={idx}
                              color={item.color}
                            >
                              <a
                                href="https://wa.me/+966542668201"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "inherit", textDecoration: "none" }}
                              >
                                {t(item.title)}
                              </a>
                            </Button>
                          );
                        }
                        // Right button: /prices page
                        if (idx === 1) {
                          return (
                            <Button
                              key={idx}
                              color={item.color}
                              onClick={() => history.push("/prices")}
                            >
                              {t(item.title)}
                            </Button>
                          );
                        }
                        return null;
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={11}>
                              <SvgIcon
                                src={item.icon}
                                width="60px"
                                height="60px"
                              />
                              <MinTitle>{t(item.title)}</MinTitle>
                              <MinPara>{t(item.content)}</MinPara>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
  };

export default withTranslation()(ContentBlock);