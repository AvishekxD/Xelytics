"use client";

import { useState } from "react";
import * as XLSX from "xlsx";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

Chart.register(...registerables);

const GenerateCharts = () => {
  const [labels, setLabels] = useState<string[]>([]);
  const [values, setValues] = useState<number[]>([]);
  const [filename, setFilename] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFilename(file.name);

    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target?.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data: any[][] = XLSX.utils.sheet_to_json(ws, { header: 1 });

      // Assuming first row = headers, second row = data
      const xLabels = data[0] as string[];
      const xValues = data[1] as number[];

      setLabels(xLabels);
      setValues(xValues);
    };
    reader.readAsBinaryString(file);
  };

  const downloadAsPNG = async () => {
    const chart = document.getElementById("chart");
    if (!chart) return;

    const canvas = await html2canvas(chart);
    const link = document.createElement("a");
    link.download = `${filename}-chart.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const downloadAsPDF = async () => {
    const chart = document.getElementById("chart");
    if (!chart) return;

    const canvas = await html2canvas(chart);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 180, 100);
    pdf.save(`${filename}-chart.pdf`);
  };

  return (
    <section className="max-w-5xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-neutral-100">Excel Chart Generator</h2>

      <div className="mb-4">
        <input
          id="file-upload"
          type="file"
          accept=".xlsx"
          onChange={handleFileUpload}
          className="hidden"
        />
        <label
          htmlFor="file-upload"
          className="inline-flex cursor-pointer items-center justify-center rounded bg-neutral-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-neutral-800 transition duration-200 ease-in-out hover:scale-103 "
        >
          <span>📁 Upload Excel File</span>
        </label>
      </div>


      {labels.length > 0 && values.length > 0 && (
        <div className="space-y-4">
          <div
            id="chart"
            className="bg-neutral-800/50 shadow-md rounded-lg p-6 border  border-neutral-700"
          >
            <Bar
              data={{
                labels: labels,
                datasets: [
                  {
                    label: "Data",
                    data: values,
                    backgroundColor: "#fff",
                  },
                ],
              }}
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={downloadAsPNG}
              className="px-4 py-2 bg-neutral-700 text-white rounded hover:bg-neutral-700/80 transition duration-200 ease-in-out hover:scale-103"
            >
              Download PNG
            </button>
            <button
              onClick={downloadAsPDF}
              className="px-4 py-2 bg-neutral-700 text-white rounded hover:bg-neutral-700/80 transition duration-200 ease-in-out hover:scale-103"
            >
              Download PDF
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GenerateCharts;
