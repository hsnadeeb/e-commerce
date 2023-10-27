import React from "react";
import { Table } from "react-bootstrap";

function Home() {
  const tours = [
    { date: "2023-11-01", city: "New York", title: "City Tour" },
    { date: "2023-11-05", city: "Los Angeles", title: "Hollywood Tour" },
    { date: "2023-11-10", city: "San Francisco", title: "Golden Gate Tour" },
    { date: "2023-11-15", city: "Chicago", title: "Windy City Tour" },
    { date: "2023-11-20", city: "Miami", title: "Beach Tour" },
    { date: "2023-11-25", city: "Las Vegas", title: "Entertainment Tour" },
  ];

  return (
    <div>
      <h3 className="display-4 text-center">Tours</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Dates</th>
            <th>City</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour, index) => (
            <tr key={index}>
              <td>{tour.date}</td>
              <td>{tour.city}</td>
              <td>{tour.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
