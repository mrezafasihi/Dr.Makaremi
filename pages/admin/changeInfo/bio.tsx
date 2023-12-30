//
import CKeditor from "@/components/admin/CkEditor";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

function bio() {
  const [data, setData] = useState("");
  const [editorLoaded, setEditorLoaded] = useState(false);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  const CKeditor=dynamic(() => import("../../../components/admin/CkEditor"), { ssr: false })
  return (
    <div>
      <CKeditor
        name="description"
        value={data}
        onChange={(data) => {
          setData(data);
        }}
        
      />
    </div>
  );
}

export default bio;
