import { useState } from "react";
import "./App.css";
const tableData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {
  const [data, setData] = useState(tableData);

  const handleSortDate = () => {
    const newData = [...data];
    const filterData = newData.sort((a, b) => {
      if (b.views === a.views) {
        return b.date - a.date;
      } else {
        return b.views - a.views;
      }
    });
    console.log(filterData);

    setData(filterData);
  };

  const handleSortViews = () => {
    const newData = [...data];
    const filterData = newData.sort((a, b) => {
      if (b.views === a.views) {
        return b.date - a.date;
      } else {
        return b.views - a.views;
      }
    });
    console.log(filterData);

    setData(filterData);
  };

  return (
    <div className="container">
      <h1>Date and Views Table</h1>
      <div className="button-container">
        <button onClick={handleSortDate}>Sort by Date</button>
        <button onClick={handleSortViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={`${item.article}_${i}`}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
