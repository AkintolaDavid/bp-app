import React from "react";
import { useState } from "react";
import "./Content.css";
import { FaHeart } from "react-icons/fa";
import { IoScaleOutline } from "react-icons/io5";
import { HiOutlinePencil } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa6";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
export const Content = () => {
  const progressPercentage = 60;
  const finalRef = React.useRef(null);
  const [activeModal, setActiveModal] = useState(null); // Track currently active modal (notification or message)
  const notificationDisclosure = useDisclosure();
  const handleCloseModal = () => {
    setActiveModal(null); // Reset active modal state
    notificationDisclosure.onClose();
  };
  const handleWeight = () => {
    setActiveModal("weight");
    notificationDisclosure.onOpen();
  };
  const [showBloodPressure, setShowBloodPressure] = useState(false);
  const [showWeight, setShowWeight] = useState(false);

  const handleToggleBloodPressure = () => {
    setShowBloodPressure(!showBloodPressure);
    setShowWeight(false); // Close weight section when toggling blood pressure
  };

  const handleToggleWeight = () => {
    setShowWeight(!showWeight);
    setShowBloodPressure(false); // Close blood pressure section when toggling weight
  };

  return (
    <main className="content">
      <div className="btn_container">
        <button onClick={handleToggleBloodPressure} className="bp_btn">
          <FaHeart />
          Blood Pressure
        </button>
        <button onClick={handleToggleWeight} className="weight_btn">
          <IoScaleOutline />
          Weight
        </button>
      </div>
      {showBloodPressure && (
        <div>
          <h2>Blood Pressure Section</h2>
          <p>This is the blood pressure section.</p>
        </div>
      )}
      {showWeight && (
        <div className="weight_overrall">
          <div className="currentreading">Current reading: 10 May 2024</div>
          <div className="weightdisplay">88.0kg</div>
          <div className="weightcontainer">
            <div className="calculated_weight">
              <div className="goal_weight">86kg</div>
              <div className="last_reading_weight">88kg</div>
              <div className="start_reading_weight">90kg</div>
            </div>
            <div className="text_reading">
              <div className="goal_text">
                Goal <HiOutlinePencil />
              </div>
              <div className="last_reading_text">
                <span>last reading</span>
                <span>10 May 2024</span>
              </div>
              <div className="start_reading_text">
                <span>starting weight</span>
                <span>10 May 2024</span>
              </div>
            </div>
          </div>

          <div className="barcontainer">
            <div className="text_barcontainer">
              <div className="barcontainer_starting">
                <span>Starting weight</span>
                <span>90.0kg</span>
              </div>
              <div className="weight_barcontainer">86.0kg</div>
            </div>
            <div
              className="progress_bar"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="weights_away">1.0kg away from your goal</div>
          <div className="addweightbtn">
            {" "}
            <button onClick={handleWeight}>
              {" "}
              <FaPlus className="addicon" /> Add weight
            </button>
          </div>
          {activeModal === "weight" ? (
            <div className="modalcontainer">
              {" "}
              <Modal
                finalFocusRef={finalRef}
                isOpen={notificationDisclosure.isOpen}
                onClose={handleCloseModal}
              >
                <ModalContent className="modalcontent">
                  <ModalBody className="modalbody">
                    <div className="modalheader">
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={handleCloseModal}
                      >
                        Cancel
                      </span>
                      <span style={{ cursor: "pointer" }}>Save</span>
                    </div>
                    <div className="addweightreading">Add weight reading</div>
                    <div className="model_input">
                      <div className="date">Date:</div>{" "}
                      <div className="date_input">
                        11/05/2024 <SlCalender />
                      </div>
                    </div>
                    <div className="model_input">
                      <div className="time">Time:</div>{" "}
                      <div className="time_input">
                        9:16 <FaClock />
                      </div>
                    </div>
                    <div className="model_input">
                      <div className="weight">Weight in Kg:</div>{" "}
                      <div className="weight_input">80</div>
                    </div>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </main>
  );
};
