import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { SimpleBlockSection, SimpleContent, SimpleContentWrapper } from "./styles";

interface SimpleBlockProps {
  title: string;
  content: string;
  t: TFunction;
}

const SimpleBlock = ({ title, content, t }: SimpleBlockProps) => {
  return (
    <SimpleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <SimpleContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <SimpleContent>{t(content)}</SimpleContent>
            </Col>
          </SimpleContentWrapper>
        </Row>
      </Slide>
    </SimpleBlockSection>
  );
};

export default withTranslation()(SimpleBlock);
