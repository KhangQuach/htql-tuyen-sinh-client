import "./Style.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoSearchSharp } from "react-icons/io5";
export default function CandidateProfile() {
  const data = [
    {
      title: "Hồ sơ A",
      createdDate: "30/11/2004",
      status: "Đã duyệt"
    },
    {
      title: "Hồ sơ B",
      createdDate: "30/11/2004",
      status: "Đã duyệt"
    },
    {
      title: "Hồ sơ C",
      createdDate: "30/11/2004",
      status: "Đã duyệt"
    },
    {
      title: "Hồ sơ D",
      createdDate: "30/11/2004",
      status: "Đã duyệt"
    },
    {
      title: "Hồ sơ E",
      createdDate: "30/11/2004",
      status: "Đã duyệt"
    },
    {
      title: "Hồ sơ F",
      createdDate: "30/11/2004",
      status: "Đã duyệt"
    },
    {
      title: "Hồ sơ G",
      createdDate: "30/11/2004",
      status: "Đã duyệt"
    },
    {
      title: "Hồ sơ M",
      createdDate: "30/11/2004",
      status: "Đã duyệt"
    },
    {
      title: "Hồ sơ L",
      createdDate: "30/11/2004",
      status: "Đã duyệt"
    },
    {
      title: "Hồ sơ K",
      createdDate: "30/11/2004",
      status: "Đã duyệt"
    },
    {
      title: "Hồ sơ Y",
      createdDate: "30/11/2004",
      status: "Đã duyệt"
    },
    {
      title: "Hồ sơ N",
      createdDate: "30/11/2004",
      status: "Đã duyệt"
    }
  ]
  return (
    <>
      <div className="container">
        <h1 className="font-bold mb-5 text-2xl">Danh sách hồ sơ đã tạo</h1>
        <div className="flex justify-between mb-5" >
          <div className="flex ml-16 gap-5">
            <Button style={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "4px",
            }} className="">Tạo hồ sơ</Button>
            <Button style={{
              backgroundColor: "rgb(2,132,199)",
              color: "white",
              borderRadius: "4px",
            }} className="">In hồ sơ</Button>

          </div>

          <div className="flex gap-2 mr-16">
            <Input placeholder="Tìm kiếm hồ sơ..." style={{
              width: "300px",
              marginLeft: "10px"
            }} />
            <Button className="bg-sky-500 hover:bg-sky-400" ><IoSearchSharp /></Button>
          </div>
        </div>
        <div className="profile-list mb-32">
          {data.map((item, index) => {
            return (
              <div className="profile-card" data-id="1">
                <h3>{item.title}</h3>
                <p>Ngày tạo: {item.createdDate}</p>
                <p>Trạng thái: {item.status}</p>
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