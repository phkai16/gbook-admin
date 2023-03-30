import React from "react";
import Feature from "../components/Feature";
import {
  BuildOutlined,
  ReadOutlined,
  TeamOutlined,
  BookOutlined,
  TrophyOutlined,
  TrademarkCircleOutlined,
  TagsOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
const Home = () => {
  return (
    <div class="flex flex-wrap">
      <h3 className="w-full mb-4">Author & Genre</h3>
      <Feature
        icon={
          <TeamOutlined className="text-xl w-full h-full flex items-center justify-center" />
        }
        number={123}
        title={"Authors"}
        link={"/authors"}
      />
      <Feature
        icon={
          <TagsOutlined className="text-xl w-full h-full flex items-center justify-center" />
        }
        number={123}
        title={"Genres"}
        link={"/genres"}
      />
      <Feature
        icon={
          <BuildOutlined className="text-xl w-full h-full flex items-center justify-center" />
        }
        number={123}
        title={"Series"}
        link={"/series"}
      />
      <Feature
        icon={
          <TrophyOutlined className="text-xl w-full h-full flex items-center justify-center" />
        }
        number={123}
        title={"Awards"}
        link={"/awards"}
      />

      <h3 className="w-full mt-8 mb-4">Publisher & Form</h3>
      <Feature
        icon={
          <TrophyOutlined className="text-xl w-full h-full flex items-center justify-center" />
        }
        number={123}
        title={"Awards"}
        link={"/awards"}
      />
      <Feature
        icon={
          <TrademarkCircleOutlined className="text-xl w-full h-full flex items-center justify-center" />
        }
        number={123}
        title={"Publishers"}
        link={"/publishers"}
      />
      <Feature
        icon={
          <BookOutlined className="text-xl w-full h-full flex items-center justify-center" />
        }
        number={123}
        title={"Book Formats"}
        link={"/book-formats"}
      />
      <Feature
        icon={
          <TranslationOutlined className="text-xl w-full h-full flex items-center justify-center" />
        }
        number={123}
        title={"Languages"}
        link={"/languages"}
      />
      <h3 className="w-full mt-8 mb-4">Book & User</h3>
      <Feature
        icon={
          <ReadOutlined className="text-xl w-full h-full flex items-center justify-center" />
        }
        number={123}
        title={"Books"}
        link={"/books"}
      />
      <Feature
        icon={
          <TeamOutlined className="text-xl w-full h-full flex items-center justify-center" />
        }
        number={123}
        title={"Users"}
        link={"/users"}
      />
    </div>
  );
};

export default Home;
