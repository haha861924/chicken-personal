import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/csDelegate/csDelegate4.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "📪 [四.] 委派 (Delegate)(Action 委派) - 馬戲團";

function csDelegate4() {
  useTitle("Chicken Say Hi | 📪 [四.] 委派 (Delegate)");
  return (
    <>
      <Portfolio
        backPath={LinkMap.CsharpEventHome}
        title={pageTitle}
        text={testMd}
      />
    </>
  );
}

export default csDelegate4;
