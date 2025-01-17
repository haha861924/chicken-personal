import { Header, PageSide } from "../../components";
import { useTitle } from "../../utils/PageTitle";
import { pageList } from "./pageData";

function PhaserPage() {
  useTitle("Chicken Say Hi | Phaser js");
  return (
    <>
      <PageSide list={pageList} />
    </>
  );
}

export default PhaserPage;
