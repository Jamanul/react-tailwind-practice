import { useState } from "react";
import NavPath from "../NavPath/NavPath";
import { TiThMenu } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [logo, setLogo] = useState(false);

  const routes = [
    {
      id: 1,
      name: "home",
      path: "/" /* Description: Route for the home page */,
    },
    {
      id: 2,
      name: "dataList",
      path: "/data" /* Description: Route for displaying a list of data entries */,
    },
    {
      id: 3,
      name: "dataDetail",
      path: "/data/:id" /* Description: Route for displaying details of a specific data entry */,
    },
    {
      id: 4,
      name: "addData",
      path: "/data/add" /* Description: Route for adding a new data entry */,
    },
    {
      id: 5,
      name: "editData",
      path: "/data/:id/edit" /* Description: Route for editing an existing data entry */,
    },
  ];

  return (
    <div className="m-6">
      <div onClick={() => setLogo(!logo)}>
        {logo === true ? <RxCross1 /> : <TiThMenu />}
      </div>
      <ul className={`md:flex  absolute duration-1000 ${logo ?'top-8':'-top-60'} m-6 bg-red-500 text-white p-2 rounded`}>
        {routes.map((navPath) => (
          <NavPath key={navPath.id} navPath={navPath}></NavPath>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
