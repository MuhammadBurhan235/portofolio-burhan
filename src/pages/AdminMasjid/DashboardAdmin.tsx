import React from "react";
import { Auth } from "./Auth";
import { UploadImage } from "./UploadImage";

const DashboardAdmin: React.FC = () => {
  return (
    <div>
      <h1>Secure App</h1>
      <Auth />
      <UploadImage />
    </div>
  );
};

export default DashboardAdmin;
