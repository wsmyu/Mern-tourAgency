import React from "react";
import TourCard from "../../shared/TourCard";
import Col from "react-bootstrap/Col";
import useFetch from "./../../hooks/useFetch.js";
import { BASE_URL } from "./../../utils/config.js";

const FeaturedTourList = () => {
  const { data: featuredTours,loading,error} = useFetch(
    `${BASE_URL}/tours/search/getFeaturedTours`
  );
  

  return (
    <>
    {loading &&<h4>Loading...</h4>}
    {error && <h4>{error}</h4>}
      {!loading && !error && featuredTours?.map((tour) => (
        <Col lg="3" md='6' sm='6'className="mb-4" key={tour._id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;
