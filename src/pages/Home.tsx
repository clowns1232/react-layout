import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";

const Home = () => {
  return (
    <>
      <Title size="large" color="primary">
        제목 테스트
      </Title>
      <div>home body</div>
      <Button disabled={false} scheme="normal" size="large">
        버튼 테스트
      </Button>
      <InputText placeholder="여기에 입력" />
    </>
  );
};

export default Home;
