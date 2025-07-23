import { withTranslation, TFunction } from "react-i18next";
import { Container, TextWrapper, Content, Text } from "./styles";

interface Props {
  title: string;
  content: string;
  t: TFunction;
}

const Block = ({ title, content, t }: Props) => {
  return (
    <Container dir="rtl">
      <Text>{t(title)}</Text>
      <TextWrapper>
        <Content>{t(content)}</Content>
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);