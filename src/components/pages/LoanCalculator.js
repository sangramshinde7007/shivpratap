import React, { useState } from "react";
import { FaCalculator, FaMoneyBillWave, FaClock, FaPercent, FaChartPie, FaRupeeSign } from "react-icons/fa";

export default function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [months, setMonths] = useState("12");
  const [roi, setRoi] = useState("10.5");

  const monthlyRate = roi ? roi / 100 / 12 : 0;

  const emi =
    amount && months && monthlyRate
      ? (amount *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1)
      : 0;

  const totalPayment = emi * months;
  const totalInterest = totalPayment - amount;

  return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mb-10 transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 mb-2">
          Loan EMI Calculator
        </h1>
        <p className="text-gray-600 text-lg">Plan your loan payments with ease</p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-pink-600 to-rose-500 p-6 text-white">
            <h2 className="text-2xl font-bold flex items-center">
              <FaCalculator className="mr-3" /> Loan Details
            </h2>
          </div>
          
          <div className="p-8 space-y-8">
            {/* Amount Input */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <FaMoneyBillWave className="mr-2 text-pink-500" /> Loan Amount (₹)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaRupeeSign className="text-gray-400" />
                </span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter Loan Amount"
                  className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 outline-none transition-all text-lg font-medium text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Period Input */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <FaClock className="mr-2 text-pink-500" /> Loan Tenure (Months)
              </label>
              <div className="relative">
                 <input
                  type="number"
                  value={months}
                  onChange={(e) => setMonths(e.target.value)}
                  placeholder="Enter Months"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 outline-none transition-all text-lg font-medium text-gray-800 placeholder-gray-400"
                />
                <span className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500 font-medium">Months</span>
              </div>
            </div>

            {/* Interest Input */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <FaPercent className="mr-2 text-pink-500" /> Interest Rate (% Annual)
              </label>
              <input
                type="number"
                value={roi}
                onChange={(e) => setRoi(e.target.value)}
                placeholder="Interest Rate"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 outline-none transition-all text-lg font-medium text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        {amount > 0 ? (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-100 hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white">
               <h2 className="text-2xl font-bold flex items-center">
                <FaChartPie className="mr-3 text-pink-400" /> Repayment Summary
              </h2>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-center space-y-6">
              
              {/* Total Card */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-100 text-center transform hover:scale-105 transition-transform duration-300">
                <p className="text-gray-600 font-semibold mb-2">Monthly EMI</p>
                <p className="text-4xl px-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                   ₹{emi ? emi.toLocaleString('en-IN', { maximumFractionDigits: 2 }) : "0.00"}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                    <p className="text-sm text-gray-500 mb-1">Total Payment</p>
                    <p className="text-xl font-bold text-gray-800">
                        ₹{totalPayment ? totalPayment.toLocaleString('en-IN', { maximumFractionDigits: 2 }) : "0.00"}
                    </p>
                 </div>
                 <div className="p-4 rounded-xl border border-red-100 bg-red-50 hover:bg-white hover:shadow-md transition-all">
                    <p className="text-sm text-red-600 mb-1">Total Interest</p>
                    <p className="text-xl font-bold text-red-700">
                        ₹{totalInterest ? totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 2 }) : "0.00"}
                    </p>
                 </div>
              </div>

              {/* Progress Bar Visual */}
              <div className="mt-4 pt-6 border-t border-gray-100">
                <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
                   <span>Loan Amount</span>
                   <span>Interest</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden flex">
                  <div 
                    className="bg-gray-800 h-full" 
                    style={{ width: `${(amount / totalPayment) * 100}%` }}
                  ></div>
                  <div 
                    className="bg-pink-500 h-full" 
                    style={{ width: `${(totalInterest / totalPayment) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                   <span>{((amount / totalPayment) * 100).toFixed(1)}%</span>
                   <span>{((totalInterest / totalPayment) * 100).toFixed(1)}%</span>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div className="hidden lg:flex h-full items-center justify-center bg-white/50 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400 p-8">
             <div className="text-center">
                <FaCalculator className="text-6xl mx-auto mb-4 text-pink-200" />
                 <p className="text-xl font-medium">Enter loan details to check EMI</p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
