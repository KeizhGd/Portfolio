import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CenterMode(items) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };

  const [Items, setItems] = useState([]);

  useEffect(() => {
    const it = items;
    console.log("Esto es lo que recibe ", it.items);
    setItems(it.items);
  }, [Items]);

  return (
    <div className="slider-container border  rounded "  >
      <Slider {...settings}>
        {Items && Items.length > 0 ? (
          Items.map((proyecto, index) => (
            <div
              className="border rounded  py-4 m-0  align-items-center justify-content-center  "
              key={index}
              style={{ height: "100%" }}
            >
              <div
                className=" d-flex align-items-center justify-content-center"
                key={index}
              >
                <div
                  className="bg-dark p-0 m-0"
                  style={{
                    width: "500px",
                    height: "350px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    className="img-fluid mx-auto rounded"
                    src={`${process.env.PUBLIC_URL}/${proyecto.image}`}
                    alt="proyecto imagen"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill",
                    }}
                  />
                </div>
              </div>

              <h4 className="mt-4">{proyecto.nombre}</h4>
              <p className="bold"   >
                <strong> {proyecto.tecnologias}</strong>
              </p>
              <p>{proyecto.descripcion}</p>
            </div>
          ))
        ) : (
          <p>Cargando proyectos...</p>
        )}
      </Slider>
    </div>
  );
}

export default CenterMode;
