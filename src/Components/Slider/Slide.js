import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";
import "./style.css";
import { LinkBtn } from "../btn/LinkBtn";

export function Slide() {
  const Sliderdata = useSelector((state) => state.sliderData);
  console.log("ssssssssssssssssssssssssssss");
  const Slider = () => (
    <Carousel
      interval="3000"
      navButtonsProps={{
        style: {
          display: "none",
        },
      }}
      indicatorIconButtonProps={{
        style: {
          display: "none",
        },
      }}
    >
      {Sliderdata.map((e) => (
        <div key={e.id}>
          <img className=" vh100" src={e.img} alt="First slide" />
          <div className="title">
            <div>{e.mainTitle}</div>
            <div>{e.subTitle}</div>

            <LinkBtn to="/Shope"> Shope Now</LinkBtn>
          </div>
        </div>
      ))}
    </Carousel>
  );

  return <>{Slider()}</>;
}
