import "./Announce.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoSearchSharp } from "react-icons/io5";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaUpAlt } from "react-icons/fa";
export default function Announce() {
  const data = [
    {
      title: "Thông báo A",
      createdDate: "30/11/2004",
      content:"Anh hẹn em pickle ball, ta vờn nhau pickle ball"
    },
    {
      title: "Thông báo B",
      createdDate: "30/11/2004",
      content:"Anh hẹn em pickle ball, ta vờn nhau pickle ball"
    },
    {
      title: "Thông báo C",
      createdDate: "30/11/2004",
      content:"Anh hẹn em pickle ball, ta vờn nhau pickle ball"
    },
    {
      title: "Thông báo D",
      createdDate: "30/11/2004",
      content:"Anh hẹn em pickle ball, ta vờn nhau pickle ball"
    },
    {
      title: "Thông báo F",
      createdDate: "30/11/2004",
      content:"Anh hẹn em pickle ball, ta vờn nhau pickle ball"
    },
    {
      title: "Thông báo G",
      createdDate: "30/11/2004",
      content:"Anh hẹn em pickle ball, ta vờn nhau pickle ball"
    },{
      title: "Thông báo H",
      createdDate: "30/11/2004",
      content:"Anh hẹn em pickle ball, ta vờn nhau pickle ball"
    },
    {
      title: "Thông báo I",
      createdDate: "30/11/2004",
      content:"Anh hẹn em pickle ball, ta vờn nhau pickle ball"
    },
  ]
  return (
    <>
      <div className="container">
        <h1 className="font-bold mb-5 text-2xl">Danh sách thông báo</h1>
        <div className="flex justify-between mb-5" >
          <div className="flex gap-3">
            <Button style={{
              color: "white",
              borderRadius: "4px",
            }} className="bg-sky-500 hover:bg-sky-400"><FaSortAlphaDown /></Button>
            <Button style={{
              color: "white",
              borderRadius: "4px",
            }} className="bg-sky-500 hover:bg-sky-400"><FaSortAlphaUpAlt /></Button>

          </div>

          <div className="flex gap-2">
            <Input placeholder="Tìm kiếm thông báo..." style={{
              width: "300px",
              marginLeft: "10px"
            }} />
            <Button className="bg-sky-500 hover:bg-sky-400" ><IoSearchSharp /></Button>
          </div>
        </div>
        <div className="profile-list-announce mb-32">
          {data.map((item, index) => {
            return (
                <div className="profile-card-announce flex gap-32" data-id="1">
                  <div>
                    <h3 className="text-sky-500 font-semibold">{item.title}</h3>
                    <p>Ngày nhận: {item.createdDate}</p>
                  </div>
                  <div>
                    <h3 className="text-sky-500 font-semibold">Nội dung:</h3>
                    <p>{item.content}</p>
                  </div>
                </div>
            )
          })}
        </div>
        <div id="profile-detail" className="hidden">
          <button id="close-btn">Đóng</button>
          <h2>Chi tiết hồ sơ</h2>
          <p id="detail-content"></p>
        </div>
      </div>
    </>
  )
}