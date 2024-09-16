import { Fragment } from "react/jsx-runtime";
import { IChildren } from "../../Interfaces";

export default function ContainerSession({ children }: IChildren) {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-12 p-0">
            <div className="login-card login-dark">
                {children}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
