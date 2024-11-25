'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";
function Header() {
  const [position, setPosition] = useState("bottom")
  const nav = [
    {
      title: "Trang chủ",
      href: "/",
    },
    {
      title: "Tin tức",
      href: "/",
    },
    {
      title: "Tuyển sinh",
      href: "/",
    },
    {
      title: "Thông Báo",
      href: "/",
    },
  ]
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#f5f5f5",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        fontFamily: "Poppins, sans-serif",
        fontSize: "16px",
        fontWeight: "bold",
        letterSpacing: "0.5px",
        color: "#333",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}>
        <div style={{
          flex: 1
        }}>
          <Link href="/" style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
            <img
              src="https://www.ctu.edu.vn/images/branding/logo/CTU_logo.png"
              alt="Logo"
              style={{
                width: "100px",
                objectFit: "contain",
                borderRadius: "50%",
                marginRight:"30px",
                marginLeft:"15px"
              }}
            />
            <div>
              <ul style={{
                display: "flex",
                gap: "30px",
                listStyleType: "none",
                justifyContent: "start"
              }}>
                {nav.map((item, index) => (
                  <li key={index}>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div>
                          <div href={item.href}>{item.title}</div>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </div>

        <div className="auth" style={{
          width: "15%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "10px",
          marginRight:"10px"
        }}>
          <Button style={{ backgroundColor: 'rgb(2 132 199)' }} >Hồ sơ</Button>
          <Button style={{ backgroundColor: 'rgb(2 132 199)' }} >Tài khoản</Button>
          <Button style={{ backgroundColor: 'rgb(2 132 199)' }} >Thông báo</Button>
          <Button style={{ backgroundColor: 'rgb(2 132 199)' }} >Đăng nhập</Button>
        </div>
      </div>
    </>
  )
}

export default Header;