"use client";

import React, { useState } from 'react';

const CREDIT_COST = 0.03; // R0.03 per credit
const STANDARD_LOOKUP_COST = 1; // 1 credit for standard lookup

export default function AdminCostEstimator() {
  const [numLookups, setNumLookups] = useState(0);

  const calculateCost = () => {
    const totalCredits = numLookups * STANDARD_LOOKUP_COST;
    return (totalCredits * CREDIT_COST).toFixed(2);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">API Cost Estimator</h2>
      <div className="mb-4">
        <label htmlFor="numLookups" className="block text-sm font-medium text-gray-700">
          Number of Vehicle Lookups:
        </label>
        <input
          type="number"
          id="numLookups"
          value={numLookups}
          onChange={(e) => setNumLookups(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="text-lg font-semibold">
        Estimated Cost: R{calculateCost()}
      </div>
    </div>
  );
}
