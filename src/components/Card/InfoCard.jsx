import React from "react";
import { Descriptions, Card } from "antd";

import s from "./Card.module.scss";
import { capitalizeFirstLetter } from "./utils";

export default function InfoCard({ movie, loading }) {
  const type = movie["Type"]
    ? capitalizeFirstLetter(movie["Type"])
    : "Movie/Serie";
  return (
    <div className={s.movieDes}>
      <Card
        loading={loading}
        title={`${type} Info`}
        hoverable
        style={{ width: 700, borderRadius: 20 }}
        cover={
          <Descriptions layout="vertical" bordered size="small">
            <Descriptions.Item label="Genre">
              {movie["Genre"]}
            </Descriptions.Item>
            <Descriptions.Item label="Year">{movie["Year"]}</Descriptions.Item>
            <Descriptions.Item label="Released">
              {movie["Released"]}
            </Descriptions.Item>
            <Descriptions.Item label="Runtime">
              {movie["Runtime"]}
            </Descriptions.Item>
            <Descriptions.Item label="Director">
              {movie["Director"]}
            </Descriptions.Item>
            <Descriptions.Item label="Writer">
              {movie["Writer"]}
            </Descriptions.Item>
            <Descriptions.Item label="Actors" span={3}>
              {movie["Actors"]}
            </Descriptions.Item>
            <Descriptions.Item label="Plot">{movie["Plot"]}</Descriptions.Item>
          </Descriptions>
        }
      ></Card>
    </div>
  );
}
