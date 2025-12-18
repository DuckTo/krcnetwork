import Link from "next/link";

export default function AppBar() {
  return (
    <div className="Appbar">
      {/* <Link className="logo" href={"/"}>
        KRC Network
      </Link> */}
        <Link className="item" href={"/"}>
        홈
      </Link>
      <Link className="item" href={"/introduce"}>
        소개
      </Link>
      <Link className="item" href={"/application"}>
        어플
      </Link>
      <Link className="item" href={"/contact"}>
        연락처
      </Link>
      </div>
  );
}
