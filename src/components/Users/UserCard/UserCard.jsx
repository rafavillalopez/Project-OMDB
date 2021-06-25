import React from "react";
import { Card, Tooltip } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

import s from "./UserCard.module.scss";
import useLoading from "../../../hooks/useLoading";

const UserCard = ({ user, loading }) => {
  const { Meta } = Card;
  const history = useHistory();

  const extra = (
    <Tooltip placement="rightTop" title={`Ver favoritos`}>
      <HeartOutlined
        onClick={() => {
          history.push(`/users/${user.id}`);
        }}
      />
    </Tooltip>
  );

  return (
    <div className={s.card}>
      <Card
        loading={loading}
        style={{ width: 200, borderRadius: 20 }}
        extra={extra}
      >
        <Meta
          title={user.name}
          description={`This user have ${user.favorites.length} favorites`}
        />
      </Card>
    </div>
  );
};

UserCard.Loading = function Loading() {
  const { loading } = useLoading();
  return (
    <div className={s.card}>
      <Card
        loading={loading}
        hoverable
        style={{ width: 200, borderRadius: 20 }}
      >
        <Card.Meta
          title="No Users"
          description="Please look for another Name"
        />
      </Card>
    </div>
  );
};

export default UserCard;
