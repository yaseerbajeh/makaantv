import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import { Button } from "../../common/Button";
import Block from "../Block";
import { ContactContainer, ButtonContainer } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+966542668201";
    const message = encodeURIComponent("Hello, I'd like to get in touch!");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <ContactContainer id={id}>
      <Row justify="center" align="middle">
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <ButtonContainer>
              <Button name="submit" onClick={handleWhatsAppRedirect}>
                {t("كلمنا واتساب")}
              </Button>
            </ButtonContainer>
          </Slide>
        </Col>
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);