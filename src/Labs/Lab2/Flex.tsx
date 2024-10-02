export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-75px">Colum 1</div>
        <div className="wd-bg-color-blue">Colum 2</div>
        <div className="wd-bg-color-red wd-flex-grow-1">Colum 3</div>
      </div>
    </div>
  );
}
