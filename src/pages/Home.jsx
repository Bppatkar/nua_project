import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./home.css";
import Chart from "../components/Chart";
import Featured from "../components/Featured";
import TableComponent from "../components/Table";
import Widget from "../components/Widget";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>

          <TableComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
