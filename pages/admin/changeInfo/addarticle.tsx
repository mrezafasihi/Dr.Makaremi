import React from "react";
import Layout from "../Layout";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import Editor from "ckeditor5-custom-build";
function addarticle() {
  return (
    <Layout>
      <div className="mt-[3%] mr-[5%]">
        <div className="flex items-center">
          <p className="text-[16px] text-[#45CBC2]">تغییر اطلاعات</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            className="mx-[3%]"
          >
            <path
              d="M8 1.5L2 7L8 12.5"
              stroke="#064247"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-[20px] text-[#757575] font-bold ">بلاگ و مقالات</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            className="mx-[3%]"
          >
            <path
              d="M8 1.5L2 7L8 12.5"
              stroke="#064247"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-[20px] text-[#757575] font-bold">افزودن مقاله</p>
        </div>
        <div className="flex items-center mt-[8%] flex-col">
          <p className="text-[#676767] text-[12px] mb-[1%]">
            عکس پیش‌نمایش مقاله خود را آپلود کنید...
          </p>
          <div className="border-[1px] border-[#45CBC2] w-[235px] h-[266px] rounded-xl flex flex-col justify-center items-center relative">
            <input type="file" className="h-24 absolute opacity-0" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="121"
              height="121"
              viewBox="0 0 121 121"
              fill="none"
            >
              <path
                d="M45.375 50.4167C50.9439 50.4167 55.4584 45.9022 55.4584 40.3333C55.4584 34.7645 50.9439 30.25 45.375 30.25C39.8061 30.25 35.2917 34.7645 35.2917 40.3333C35.2917 45.9022 39.8061 50.4167 45.375 50.4167Z"
                stroke="#CBCBCB"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M65.5416 10.084H45.375C20.1666 10.084 10.0833 20.1673 10.0833 45.3756V75.6256C10.0833 100.834 20.1666 110.917 45.375 110.917H75.625C100.833 110.917 110.917 100.834 110.917 75.6256V50.4173"
                stroke="#CBCBCB"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M79.4062 25.209H107.135"
                stroke="#CBCBCB"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M93.2708 39.0729V11.3438"
                stroke="#CBCBCB"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M13.4612 95.5405L38.3167 78.8526C42.2996 76.1805 48.0471 76.483 51.6267 79.5584L53.2904 81.0205C57.2229 84.3984 63.5754 84.3984 67.5079 81.0205L88.4812 63.0217C92.4137 59.6438 98.7662 59.6438 102.699 63.0217L110.917 70.0801"
                stroke="#CBCBCB"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <p className="text-[#064247] text-[12px]">موضوع مقاله</p>
        <input
          type="text"
          placeholder="عنوان مقاله خود را اینجا بنویسید."
          className="w-[881px] h-[63px] text-[12px] text-[#CBCBCB] mt-[2%] border-[1px] border-[#CBCBCB] rounded-md"
        />
        {/* <CKEditor
                    editor={ Editor }
                    config={ editorConfiguration }
                    data={ props.initialData }
                    onChange={ (event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                /> */}
        <textarea
          className="w-[881px] h-[437px] border-[1px] border-[#CBCBCB] rounded-md text-[12px] mt-[3%]"
          placeholder="متن مقاله خود را بنویسید..."
        />
        <div className="flex justify-center">
          <button className="w-[197px] h-[48px] rounded-[6.422px] text-white bg-[#288E87] mt-[5%] mx-auto">
            ارسال
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default addarticle;
