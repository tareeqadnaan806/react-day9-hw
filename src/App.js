import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [homeValue, setHomeValue] = useState(5000);
  const [downPayment, setDownPayment] = useState(1000);
  const [loanAmount, setloanAmount] = useState(1000);
  const [interestRate, setInteresrRate] = useState(3);
  const [tenure, setTenure] = useState(5);

  const p = loanAmount - downPayment;

  const data = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        data: [homeValue * interestRate, downPayment * tenure],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl bg-blue-800 text-white text-center p-4">
        Bank of React
      </h1>

      <div className="flex justify-center p-10 md:flex-col md:p-0 items-center ">
        <div className="w-1/2 ">
          <div className="mb-5">
            <h1>Home Value</h1>
            <p>{`$ ${homeValue}`}</p>
            <input
              type="range"
              min={1000}
              max={10000}
              value={homeValue}
              className="w-4/5"
              onChange={(e) => setHomeValue(e.target.value)}
            />
            <div className="flex justify-between items-center w-4/5">
              <p>$ 1000</p>
              <p>$ 10000</p>
            </div>
          </div>

          <div className="mb-5">
            <h1>Down payment</h1>
            <p>{`$ ${downPayment} `}</p>
            <input
              type="range"
              min={0}
              max={homeValue}
              value={downPayment}
              className="w-4/5"
              onChange={(e) => setDownPayment(e.target.value)}
            />

            <div className="flex justify-between items-center w-4/5">
              <p>$ 0</p>
              <p>{`$ ${homeValue}`}</p>
            </div>
          </div>

          <div className="mb-5">
            <h1>Loan Amount</h1>
            <p>{`$ ${loanAmount}`}</p>
            <input
              type="range"
              min={0}
              max={homeValue}
              value={loanAmount}
              className="w-4/5"
              onChange={(e) => setloanAmount(e.target.value)}
            />
            <div className="flex justify-between items-center w-4/5">
              <p>$ 0</p>
              <p>{`$ ${homeValue}`}</p>
            </div>
          </div>

          <div className="mb-5">
            <h1>Interest Rate</h1>
            <p>{`% ${interestRate}`}</p>
            <input
              type="range"
              min={2}
              max={18}
              step="1"
              value={interestRate}
              className="w-4/5"
              onChange={(e) => setInteresrRate(e.target.value)}
            />
            <div className="flex justify-between items-center w-4/5">
              <p>% 2</p>
              <p>% 18</p>
            </div>
          </div>

          <div className="mb-5">
            <fieldset class="border-2 w-4/5 border-black rounded">
              <legend className="border-3 border-black border-solid">
                Tenure
              </legend>
              <select
                onChange={(e) => setTenure(e.target.value)}
                className="w-full"
              >
                <option value="5" key="">
                  5 years
                </option>
                <option value="10" key="">
                  10 years
                </option>
                <option value="15" key="">
                  15 years
                </option>
                <option value="20" key="">
                  20 years
                </option>
                <option value="25" key="">
                  25 years
                </option>
              </select>
            </fieldset>
          </div>
        </div>

        <div className="w-1/2 ">
          <div className="w-4/5">
            <h1>Monthly EMI: </h1>
            <Pie data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
