import React, { Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
  };

  removeTour = id => {
    const tours = this.state.tours.filter(tour => tour.id !== id);
    this.setState({ tours });
  };

  render() {
    const { tours } = this.state;
    if (this.state.tours.length === 0) {
      return (
        <h1 style={{ textAlign: "center", color: "gold", marginTop: "50px" }}>
          {" "}
          Sorry thats all the tours we had on offer, look forward to more tours
          coming soon!
        </h1>
      );
    }
    return (
      <section className="tourList">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
