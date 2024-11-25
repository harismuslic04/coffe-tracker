import React from "react";
import { coffeeOptions } from "../utils";
import { useState } from "react";
export default function CoffeeForm() {
  const [showCoffeTypes, setShowCoffeTypes] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [coffeeCost, setCoffeeCost] = useState(0);
  const [hour, setHour] = useState(null);
  const [min, setMin] = useState(null);
  function handleSumbitForm() {
    console.log(selectedCoffee, coffeeCost, hour, min);
  }
  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-pencil"></i>
        <h2>Start Tracking today</h2>
      </div>
      <h4>Select coffee type</h4>
      <div className="coffee-grid">
        {coffeeOptions.slice(0, 5).map((option, optionIndex) => {
          return (
            <button
              onClick={() => {
                setSelectedCoffee(option.name);
                setShowCoffeTypes(false);
              }}
              className={
                "button-card " +
                (option.name === selectedCoffee
                  ? "coffee-button-selected "
                  : "")
              }
              key={optionIndex}
            >
              <h4>{option.name}</h4>
              <p>{option.caffeine}mg</p>
            </button>
          );
        })}
        <button
          onClick={() => {
            setShowCoffeTypes(true);
            setSelectedCoffee(null);
          }}
          className={
            "button-card " + (showCoffeTypes ? "coffee-button-selected " : "")
          }
        >
          <h4>Other</h4>
          <p>n/a</p>
        </button>
      </div>
      {showCoffeTypes && (
        <select
          onChange={(e) => {
            setSelectedCoffee(e.target.value);
          }}
          id="coffee-list"
          name="coffee-list"
        >
          <option value={null}>Select type</option>
          {coffeeOptions.map((option, optionIndex) => {
            return (
              <option value={option.name} key={optionIndex}>
                {option.name} ({option.caffeine} mg)
              </option>
            );
          })}
        </select>
      )}
      <h4>Add the cost ($)</h4>
      <input
        type="number"
        className="w-full"
        placeholder="4.50"
        value={coffeeCost}
        onChange={(e) => {
          setCoffeeCost(e.target.value);
        }}
      />
      <h4>Time since consumption</h4>
      <div className="time-entry">
        <div>
          <h6>Hours</h6>
          <select
            onChange={(e) => {
              setHour(e.target.value);
            }}
            id="hours-select"
          >
            {[
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23,
            ].map((hour, hoursIndex) => {
              return (
                <option value="hour" key={hoursIndex}>
                  {hour}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <h6>Min</h6>
          <select
            onChange={(e) => {
              setMin(e.target.value);
            }}
            id="mins-select"
          >
            {[0, 5, 10, 15, 30, 45].map((min, minIndex) => {
              return (
                <option value="min" key={minIndex}>
                  {min}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <button onClick={handleSumbitForm}>
        <p>Add entry </p>
      </button>
    </>
  );
}
