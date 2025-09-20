import { Link } from "react-router-dom";
import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    return (
      <>

        <Link to="/aboutapp">
          <CustomNavLinkSmall>
            <Span>{t("عن التطبيق")}</Span>
          </CustomNavLinkSmall>
        </Link>
        <Link to="/prices">
          <CustomNavLinkSmall>
            <Span>{t("IPTV")}</Span>
          </CustomNavLinkSmall>
        </Link>
         <Link to="/netflix">
          <CustomNavLinkSmall>
            <Span>{t("نتفلكس")}</Span>
          </CustomNavLinkSmall>
        </Link>
                 <Link to="/shahid">
          <CustomNavLinkSmall>
            <Span>{t("شاهد")}</Span>
          </CustomNavLinkSmall>
        </Link>
              <Link to="/youtube">
          <CustomNavLinkSmall>
            <Span>{t("يوتيوب")}</Span>
          </CustomNavLinkSmall>
        </Link>
                    <Link to="/packages">
          <CustomNavLinkSmall>
            <Span>{t("البكجات")}</Span>
          </CustomNavLinkSmall>
        </Link>
        <CustomNavLinkSmall
          as="a"
          href="https://wa.me/+966542668201?text=مرحبا،%20أود%20معرفة%20المزيد%20عن%20الخدمة"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "200px" }}
        >
          <Span>
            <Button>{t("تواصل معنا")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between" align="middle">
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="1100px" height="200px" />
          </LogoContainer>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>القائمة</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);