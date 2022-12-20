import React from "react";
import "./Slider.Styles.scss";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

export default function BtnSlider({ direction, moveSlide }) {
    console.log(direction, moveSlide);
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
            {
                direction === "next" ? <HiOutlineChevronRight /> : <HiOutlineChevronLeft />
            }
        </button>
    );
}