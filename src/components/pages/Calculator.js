import React, { useState } from "react";

const Calculator = () => {
  const [weight, setWeight] = useState("");
  const [purity, setPurity] = useState("24");
  const [months, setMonths] = useState("12");

  // ✅ STATIC GOLD PRICE (₹ per gram – 24K)
  // 👉 रोज manually update करू शकतोस
  const goldPrice24K = 6250;

  const purityFactor = {
    24: 1,
    22: 0.916,
    18: 0.75,
    14: 0.585,
    12: 0.5,
  };

  const pricePerGram = goldPrice24K * purityFactor[purity];

  const totalPrice = weight
    ? (weight * pricePerGram).toFixed(2)
    : 0;

  // EMI Calculation (10% annual interest)
  const monthlyInterestRate = 0.10 / 12;
  const emi =
    totalPrice && months
      ? (totalPrice *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, months)) /
        (Math.pow(1 + monthlyInterestRate, months) - 1)
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-amber-100">

        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 to-amber-600 p-6">
          <h1 className="text-3xl font-bold text-white text-center">
            🪙 Gold Loan Calculator
          </h1>
          {/* <p className="text-yellow-100 text-center mt-2">
            No API • Lifetime Free
          </p> */}
        </div>

        <div className="p-6">
          {/* Weight */}
          <input
            type="number"
            placeholder="Weight in grams"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full mb-4 px-4 py-3 border-2 rounded-lg"
          />

          {/* Purity */}
          <select
            value={purity}
            onChange={(e) => setPurity(e.target.value)}
            className="w-full mb-4 px-4 py-3 border-2 rounded-lg"
          >
            <option value="24">24K</option>
            <option value="22">22K</option>
            <option value="18">18K</option>
            <option value="14">14K</option>
            <option value="12">12K</option>
          </select>

          {/* Months */}
          <select
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            className="w-full mb-6 px-4 py-3 border-2 rounded-lg"
          >
            <option value="6">6 Months</option>
            <option value="12">12 Months</option>
            <option value="18">18 Months</option>
            <option value="24">24 Months</option>
            <option value="36">36 Months</option>
          </select>

          {/* Gold Price */}
          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <p className="text-sm">24K Gold Price</p>
            <p className="text-2xl font-bold">
              ₹{goldPrice24K.toLocaleString("en-IN")} / gram
            </p>
            <p className="text-sm mt-2">
              {purity}K Price: ₹{pricePerGram.toFixed(2)} / gram
            </p>
          </div>

          {/* Result */}
          {totalPrice > 0 && (
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <p className="text-green-700 font-semibold mb-2">
                कर्जासाठी तुम्ही पात्र आहात ✅
              </p>

              <p className="text-xl font-bold">
                कर्जाची रक्कम: ₹{Number(totalPrice).toLocaleString("en-IN")}
              </p>

              <p className="text-2xl font-bold text-amber-600 mt-3">
                EMI: ₹{emi.toFixed(2)}
              </p>

              <p className="text-xs text-gray-500">
                {months} महिने • 10% वार्षिक व्याज
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
