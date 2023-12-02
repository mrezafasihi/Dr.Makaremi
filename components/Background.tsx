import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";

function Background({ url }: any) {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "300px",
  };
  return (
    <div style={styles}>
      <Navbar />
      <Header
        title={"چشم پزشکی دکتر مکارمی"}
        desc={
          "سلامتی چشم‌های خود را در کلینیک دکتر علی مکارمی تضمین کنید.با دستگاه‌های پیشرفته و روز دنیا"
        }
      />
    </div>
  );
}

export default Background;
