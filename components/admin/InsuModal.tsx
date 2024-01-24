import * as React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomInput from "../user/test";
import { useState } from "react";
import { useRouter } from "next/router";
import apiRequests from "@/Axios/config";
export default function ServerModal({ open, setOpen }: any) {
  //   const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const route = useRouter();
  const close = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [name, setName] = useState<any>();
  const [adress, setAdress] = useState<any>();
  const [file, setFile] = useState<any>();
  const confirm = () => {
    const token = localStorage.getItem("token");
    
    apiRequests
      .post(
        `/api/insurances`,
        {
          name: name,
          site_url: adress,
          logo: file,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((confirm) =>{ setOpen(false),route.reload()})
  };
  
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        open={open}
        style={{
          // backgroundColor:"white",
          background: "white",
          // boxShadow: "2px solid black",
          height: 516,
          width: 448,
          margin: "auto",
          padding: "2%",
          // color: "white",
        }}
      >
        <Box
          sx={{
            height: 516,
            width: 448,
            flexGrow: 1,
            minWidth: 300,
            bgcolor: "white",
            // position: "absolute top-[20%]",
            transform: "translateZ()",
            borderRadius: "10px",
          }}
          ref={rootRef}
        >
          <div className="flex flex-col items-center">
            <input
              type="file"
              className="h-20 absolute bottom-[60%] opacity-0"
              onChange={(e: any) => setFile(e.target.files[0])}
            />
            {file ? (
              <img
                className="w-[40%] h-[30%] mt-[4%]"
                src={URL.createObjectURL(file)}
                alt=""
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="121"
                height="121"
                viewBox="0 0 121 121"
                fill="none"
                className=" mt-12"
                onChange={(e: any) => setFile(e.target.files)}
              >
                <path
                  d="M45.375 50.4167C50.9439 50.4167 55.4583 45.9022 55.4583 40.3333C55.4583 34.7645 50.9439 30.25 45.375 30.25C39.8061 30.25 35.2917 34.7645 35.2917 40.3333C35.2917 45.9022 39.8061 50.4167 45.375 50.4167Z"
                  stroke="#064247"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M65.5417 10.083H45.375C20.1667 10.083 10.0833 20.1663 10.0833 45.3747V75.6247C10.0833 100.833 20.1667 110.916 45.375 110.916H75.625C100.833 110.916 110.917 100.833 110.917 75.6247V50.4163"
                  stroke="#064247"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M79.4062 25.208H107.135"
                  stroke="#064247"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M93.2708 39.0729V11.3438"
                  stroke="#064247"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M13.4613 95.5395L38.3167 78.8516C42.2996 76.1795 48.0471 76.482 51.6267 79.5574L53.2904 81.0195C57.2229 84.3974 63.5754 84.3974 67.5079 81.0195L88.4812 63.0207C92.4137 59.6428 98.7663 59.6428 102.699 63.0207L110.917 70.0791"
                  stroke="#064247"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
            <p className="text-[#064247] text-[12px] mx-auto mt-4">
              لوگوی بیمه را اینجا آپلود کنید
            </p>
          </div>
          <div className="flex flex-col items-center mt-12">
            <CustomInput
              placeholder={"مثال : بیمه دانا"}
              label={"نام بیمه"}
              onChange={(e: any) => setName(e.target.value)}
            />
            <CustomInput
              placeholder={"مثال : https://www.dana-insurance.com/"}
              label={"آدرس سایت بیمه"}
              onChange={(e: any) => setAdress(e.target.value)}
            />
            <button
              className="w-[119px] h-[32px] bg-[#288E87] rounded-[3.16px] text-white mt-12"
              onClick={confirm}
            >
              تایید
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
