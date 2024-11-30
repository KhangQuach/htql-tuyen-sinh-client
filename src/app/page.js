import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
export default function Home() {
  const imgUrl = [
    'https://www.ctu.edu.vn/images/2024/03/Slideweb_W3.png',
    'https://www.ctu.edu.vn/images/2024/03/branding.png',
    'https://www.ctu.edu.vn/images/2024/03/Sliderweb-desktop.png',
    'https://www.ctu.edu.vn/images/upload/slideshow/2024/tiep_nhan_phan_hieu_Soc_Trang.png'
  ]
  return (
    <div className="container mx-auto " style={{ height: '600px' , width:'100%'}}>
      <div className="flex justify-center"> 
        <Carousel className='w-full mt-20' >
          <CarouselContent>
            {imgUrl.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className=" rounded-none border-none shadow-none">
                    <CardContent className="flex aspect-square items-center justify-center p-6 w-full " style={{height:'400px',}}>
                        <img src={item} alt="" className=""/>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )

}