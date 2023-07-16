import { ThreeCircles } from "react-loader-spinner";

interface antIcons {
  size: string;
  classNames:string
}

export const LoaderIcon = ({ size,classNames }: antIcons) => {
  return (
    <div className={`${classNames} flex justify-center items-center`}>
      <ThreeCircles
        height={size}
        width={size}
        color="#757D75"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor="#D2D7D3"
        middleCircleColor="#BDC3C7"
      />
    </div>
  );
};



