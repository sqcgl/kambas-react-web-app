export default function BootstrapNavigation() {
  return (
    <div>
      <div id="wd-css-navigation-with-tabs">
        <h2>Tabs</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a href="#" className="nav-link active">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>

      <div id="wd-css-navigating-with-cards">
        <h2>Cards</h2>
        <div className="card" style={{ width: "18rem" }}>
          <img src="images/reactjs.jpg" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">React</h5>
            <p className="card-text">Reacting to codes</p>
            <a href="#" className="btn btn-primary">
              Go
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
