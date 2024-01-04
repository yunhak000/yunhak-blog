import Image from "next/image";
import profileImgSrc from "../../public/images/profile.jpg";

export const Hero = () => {
  return (
    <div className="border-b-[1px] border-white text-center font-semibold pb-4">
      <div className="w-full my-0 mx-auto rounded-lg overflow-hidden">
        <Image src={profileImgSrc} alt="프로필 이미지" width={250} height={250} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-[15px] font-bold pt-3 whitespace-nowrap">{"Welcome Hak's Blog"}</h3>
      {/* <p className="text-[20px]">Front Engineer</p>
      <p className="text-[14px]">안녕하세요 심심하면 코딩할 생각부터하는 이윤학입니다.</p> */}
    </div>
  );
};
