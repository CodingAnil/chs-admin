import { Card } from "@nextui-org/card";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import useMountData from "../utils/hooks/data_getting_hook";
import ButtonSpinner from "./loaders/buttonSpinner";
import { callPostApi } from "../services";
import { toastMessage } from "../utils/configs/toast";
import { getLocalData } from "../utils/configs/localStorage";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = () => {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "image",
    // "video",
    // "formula",
  ];

  // Toolbar modules
  const modules = {
    toolbar: [
      [{ font: [] }, { size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ direction: "rtl" }, { align: [] }],
      ["link", "image"],
      // ["clean"],
    ],
  };

  const { data, loading, setLoading, getAllData } =
    useMountData("/admin/get-policy");

  useEffect(() => {
    console.log(data, "fffffffff");
    if (data) {
      setContent(data?.policy);
    }
  }, [data]);

  const updatePolicy = async () => {
    try {
      console.log(content, "content");
      if (!content) {
        toastMessage("error", "Add some content to privacy policy document");
        return;
      }
      const admin = getLocalData("adminDetails");
      setLoading("update");
      const uploadResponse = await callPostApi(`/admin/add-policy`, {
        policy: content,
        adminId: admin?._id,
      });
      if (!uploadResponse.status) throw new Error(uploadResponse.message);
      toastMessage(
        "success",
        "Privacy policy document is  updated Successfully."
      );
      setLoading(false);
    } catch (error) {
      console.error("Privacy policy document error ", error);
    }
  };

  return (
    <div className="w-full bg-transparent rounded-xl border-none">
      {/* Text Editor */}
      <Card
        radius="lg"
        className="border-none overflow-visible custom-editor mb-4 relative rounded-xl"
      >
        <ReactQuill
          value={content}
          onChange={handleChange}
          placeholder={
            loading
              ? "Getting privacy policy details..."
              : "Write something awesome..."
          }
          theme="snow"
          formats={formats}
          modules={modules}
        />
      </Card>
      <div className="flex gap-4 mb-4 justify-end me-3">
        <button
          onClick={updatePolicy}
          disabled={loading}
          className="bg-primary min-w-[120px] flex justify-center items-center text-white px-4 py-2.5 text-base rounded-lg"
        >
          Save {loading == "update" && <ButtonSpinner />}
        </button>
      </div>
      {/* Preview Content */}
      {/* <div className="mt-0  py-4 rounded-lg">
        {/* <div dangerouslySetInnerHTML={{ __html: content }} /> 
        <h4 className="text-lg font-medium mb-2">Preview Content:</h4>
        <Card
          radius="lg"
          className="border-none overflow-visible custom-editor mb-5 relative rounded-xl"
        >
          <ReactQuill
            value={content}
            readOnly={true}
            placeholder={
              loading
                ? "Getting privacy policy details..."
                : "Write something awesome..."
            }
            theme="snow" // Optional for consistent formatting
            modules={{ toolbar: false }} // Disable toolbar
          />
        </Card>
        {/* Save and Toggle Buttons ]
      </div> */}
    </div>
  );
};

export default TextEditor;
