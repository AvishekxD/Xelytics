"use client";

import { useState } from "react";
import { FiTrash2, FiUpload } from "react-icons/fi";

interface FileItem {
  id: string;
  name: string;
  size: string;
  uploadedAt: string;
}

const dummyFiles: FileItem[] = [
  {
    id: "1",
    name: "sales-report-q1.xlsx",
    size: "120KB",
    uploadedAt: "2025-07-18",
  },
  {
    id: "2",
    name: "user-logs.xlsx",
    size: "82KB",
    uploadedAt: "2025-07-21",
  },
];

const MyFiles = () => {
  const [files, setFiles] = useState<FileItem[]>(dummyFiles);

  const handleDelete = (id: string) => {
    const confirm = window.confirm("Are you sure you want to delete this file?");
    if (!confirm) return;

    setFiles(files.filter((file) => file.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-100">My Excel Files</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-neutral-700 text-white rounded hover:bg-neutral-600 transition hover:scale-103 duration-300 ease-in-out">
          <FiUpload />
          Upload New
        </button>
      </div>

      {files.length === 0 ? (
        <div className="text-neutral-100 text-center py-10">No files uploaded yet.</div>
      ) : (
        <div className="bg-neutral-700 shadow rounded-lg overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-neutral-700">
              <tr>
                <th className="text-left px-6 py-3 text-neutral-200">File Name</th>
                <th className="text-left px-6 py-3 text-neutral-200">Size</th>
                <th className="text-left px-6 py-3 text-neutral-200">Uploaded</th>
                <th className="px-6 py-3 text-right text-neutral-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.id} className="border-t hover:bg-neutral-600 transition duration-200 ease-out">
                  <td className="px-6 py-4 text-neutral-200">{file.name}</td>
                  <td className="px-6 py-4 text-neutral-200">{file.size}</td>
                  <td className="px-6 py-4 text-neutral-200">{file.uploadedAt}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(file.id)}
                      className="text-neutral-100 hover:text-red-500 transition duration-200 hover:scale-115 scale-105  ease-in-out"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyFiles;
