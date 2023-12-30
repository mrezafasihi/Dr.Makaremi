import React, { useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";


interface CKeditorProps {
  onChange: (data: string) => void;

  name: string;
  value: string;
}

export default function CKeditor({
  onChange,

  name,
  value,
}: CKeditorProps) {
  const editorRef = useRef<{
    CKEditor: typeof CKEditor;
    ClassicEditor: typeof ClassicEditor;
  }>();
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          onChange(data);
        }}
       
        config={{
          
          toolbar: [
        //  '|','alignment:left','alignment:right','alignment:center', 'alignment:justify'
       
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'imageUpload',
        'blockQuote',
        'undo',
        'redo'
            
            
            

          ],
        }}
      />
    </>
  );
}
