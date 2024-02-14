import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { borderRadius, height } from "@mui/system";
import apiRequests from "@/Axios/config";
import { useRouter } from "next/router";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 516,
  height: 465,

  bgcolor: "#F9F9F9",
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
};

function ResualtTest({ data }: any) {
  const [titleResult, setTitleResult] = useState<any>();
  const [desc, setDesc] = useState<any>();
  const [testResult, setTestResult] = useState<any>([]);
  const route = useRouter();
  useEffect(() => {
    // getTestResult();
    // setTestResult(data)
  }, []);
  const getTestResult = () => {
    const idTestResult = localStorage.getItem("idTestResult");
    console.log(idTestResult);
    const token = localStorage.getItem("token");
    apiRequests
      .get(`/api/results/${idTestResult}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res), setTestResult([res.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const medicalTest = [
    { title: "اپتومتیک", date: "1402 / 02 / 28" },
    { title: "آزمایش فشار چشم", date: "1402 / 02 / 10" },
    { title: "عکس‌برداری", date: "1402 / 02 / 06" },
  ];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sendResult = () => {
    const token = localStorage.getItem("token");

    const idDocument = route.query.patientId;

    apiRequests
      .post(
        "/api/results",
        { test_name: titleResult, result: desc, document_id: idDocument },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res);
        route.reload();
      })
      .catch((res) => console.log(res));
  };

  return (
    <div className="border  border-[#EDEDEE] rounded-[11.94px] text-center w-[482px] h-[189px] overflow-y-auto ">
      <table className=" w-full h-full">
        <thead className="even:bg-black h-[46px]">
          <tr className="w-full">
            <th className="text-right font-iranSansMedium text-[12px] text-[#064247] pr-[5%]">
              نتایج آزمایشات
            </th>
            <th></th>
            <th></th>
            <th onClick={handleOpen} className="text-[#45CBC2]">
              <div className="flex items-center justify-end text-[12px] pl-[18%]">
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-[5%]"
                >
                  <path
                    d="M11.9482 6.8251H7.68252V11.0908C7.68252 11.56 7.29861 11.9439 6.82938 11.9439C6.36016 11.9439 5.97625 11.56 5.97625 11.0908V6.8251H1.71056C1.24133 6.8251 0.857422 6.44119 0.857422 5.97196C0.857422 5.50274 1.24133 5.11883 1.71056 5.11883H5.97625V0.853138C5.97625 0.383912 6.36016 0 6.82938 0C7.29861 0 7.68252 0.383912 7.68252 0.853138V5.11883H11.9482C12.4174 5.11883 12.8013 5.50274 12.8013 5.97196C12.8013 6.44119 12.4174 6.8251 11.9482 6.8251Z"
                    fill="#45CBC2"
                  />
                </svg>
                افزودن گزارش
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="h-[141px]  text-center overflow-auto">
          {data.test_result?.map((item: any) => {
            return (
              <tr
                className=" text-right h-[47px]   odd:bg-[#f3fffe] "
                key={item.id}
              >
                <td className=" text-[#757575]  pr-[4.9%] text-[12px]">
                  {item.test_name}
                </td>
                <td
                  style={{ direction: "ltr" }}
                  className="text-[#757575] font-iranSansLight pr-[5%] text-[12px] "
                >
                  {item.date}
                </td>
                <td className="text-[#0D0630] pr-[9%] opacity-80 text-[12px] font-iranSansMedium">
                  مشاهده
                </td>
                <td className=" pr-[50%]  flex  justify-center items-center h-full flex-col ">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9999 3.98617C11.7799 3.76617 9.54655 3.65283 7.31988 3.65283C5.99988 3.65283 4.67988 3.7195 3.35988 3.85283L1.99988 3.98617"
                      fill="#C70000"
                    />
                    <path
                      d="M13.9999 3.98617C11.7799 3.76617 9.54655 3.65283 7.31988 3.65283C5.99988 3.65283 4.67988 3.7195 3.35988 3.85283L1.99988 3.98617"
                      stroke="#C70000"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.66663 3.3135L5.81329 2.44016C5.91996 1.80683 5.99996 1.3335 7.12663 1.3335H8.87329C9.99996 1.3335 10.0866 1.8335 10.1866 2.44683L10.3333 3.3135"
                      stroke="#C70000"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5667 6.09326L12.1334 12.8066C12.06 13.8533 12 14.6666 10.14 14.6666H5.86002C4.00002 14.6666 3.94002 13.8533 3.86668 12.8066L3.43335 6.09326"
                      stroke="#C70000"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.88672 11H9.10672"
                      stroke="#C70000"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.33337 8.3335H9.66671"
                      stroke="#C70000"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[#C70000] text-[10px] font-iranSansLight">
                    حذف
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <div className="flex flex-col justify-between h-full items-center ">
            <div className="flex justify-between w-full">
              <p className="text-[#0D0630]">گزارش آزمایش</p>
              <p className="text-[#757575]">
                تاریخ آزمایش : <span>1402 / 02 / 28</span>
              </p>
            </div>
            <input
              type="file"
              className="absolute top-[20%] w-full opacity-0"
            />
            <div className="flex border border-[#CBCBCB] rounded-[4.725px]  w-[84.52%] h-[12.48%] items-center pr-[4.85%]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.00008 11.3335V7.3335L4.66675 8.66683"
                  fill="#45CBC2"
                />
                <path
                  d="M6.00008 11.3335V7.3335L4.66675 8.66683"
                  stroke="#45CBC2"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.99997 7.3335L7.3333 8.66683"
                  stroke="#45CBC2"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6667 6.66683V10.0002C14.6667 13.3335 13.3334 14.6668 10.0001 14.6668H6.00007C2.66674 14.6668 1.3334 13.3335 1.3334 10.0002V6.00016C1.3334 2.66683 2.66674 1.3335 6.00007 1.3335H9.3334"
                  stroke="#45CBC2"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6666 6.66683H12C9.99998 6.66683 9.33331 6.00016 9.33331 4.00016V1.3335L14.6666 6.66683Z"
                  stroke="#45CBC2"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[#064247]">اپلود فایل</p>
            </div>

            <input
              type="text"
              placeholder="عنوان آزمایش"
              className="border border-[#CBCBCB] rounded-[4.725px] w-[84.52%] h-[12.48%] pr-[4.85%] "
              onChange={(e) => setTitleResult(e.target.value)}
            />
            <textarea
              name=""
              id=""
              placeholder="توضیحات"
              className=" border border-[#CBCBCB] rounded-[4.725px] w-[84.52%] h-[35.91%] pr-[4.85%]"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <button
              onClick={sendResult}
              className="w-[119px] h-[32px] bg-[#288E87] rounded-[3.16px] text-white "
            >
              تایید
            </button>
          </div>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}

export default ResualtTest;
