import React from "react";
import Layout from "./Layout";

function PatientId() {
  const visit = [
    { reason: "ضعیفی چشم", date: "1402 / 02 / 28", time: "12:00" },
    { reason: "ضعیفی چشم", date: "1402 / 02 / 28", time: "12:00" },
    { reason: "ضعیفی چشم", date: "1402 / 02 / 28", time: "12:00" },
    { reason: "ضعیفی چشم", date: "1402 / 02 / 28", time: "12:00" },
  ];
  return (
    <Layout>
      <div>
        <div></div>
        <div>
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          <table className="border text-center w-full  ">
            <thead>
              <tr>
                <th>علت مراجعه</th>
                <th>تاریخ مراجعه</th>
                <th>ساعت مراجعه</th>
                <th>نوبت جدید</th>
              </tr>
            </thead>
            {visit.map((item) => {
              return (
                <tbody className="odd:bg-slate-500">
                  <tr className="">
                    <td className="border ">{item.reason}</td>
                    <td className="border ">{item.date}</td>
                    <td className="border ">{item.time}</td>
                    <td className="border ">مشاهده</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default PatientId;
