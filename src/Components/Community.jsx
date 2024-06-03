import React, { useState } from "react";
import communityData from "../Data/CommunityData";

const Community = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleTitleClick = (id) => {
    setSelectedId(id);
  };

  const selectedCommunity = communityData.find(
    (item) => item.id === selectedId
  );

  return (
    <>
      <div className="comm-parent py-5">
        <div className="container py-5 mx-auto ">
          <div className="row px-4 d-flex justify-content-center text-center align-items-center  mb-5">
            {communityData.map((item) => (
              <div key={item.id} className="col-md-3">
                <p
                  className={` commnuti ${
                    selectedId === item.id
                      ? "text-danger border-bottom  "
                      : "text-white"
                  }`}
                  onClick={() => handleTitleClick(item.id)}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          {selectedCommunity && (
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="text-wrap">
                  <p className="text-light text-center ">
                    {selectedCommunity.text}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Community;
