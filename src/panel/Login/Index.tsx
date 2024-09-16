import { Fragment } from "react/jsx-runtime";
import LoginCards from "./Components/LoginCards";
import ContainerSession from "../Component/ContainerSession";

export default function Login() {
  return (
    <Fragment>
      <ContainerSession>
        <LoginCards />
      </ContainerSession>
    </Fragment>
  );
}
