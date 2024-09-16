import { Fragment } from "react/jsx-runtime";
import ContainerSession from "../Component/ContainerSession";
import AccountUser from "./Components/AccountUser";

export default function CreateAccount() {
  return (
    <Fragment>
      <ContainerSession>
        <AccountUser />
      </ContainerSession>
    </Fragment>
  );
}
