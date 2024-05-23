import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./home.css";
import Chart from "../components/Chart";
import Featured from "../components/Featured";
import TableComponent from "../components/Table";
import Widget from "../components/Widget";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
          <QueryClientProvider client={queryClient}>
            <TableComponent />
          </QueryClientProvider>
        </div>
      </div>
    </div>
  );
};

export default Home;
