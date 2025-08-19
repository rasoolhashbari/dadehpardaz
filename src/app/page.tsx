import Image from "next/image";
import LoginComponent from "@/componets/login"
export default function Home() {
  return (
    <div className="bg-oceanblue h-screen grid place-items-center">
      <LoginComponent />
    </div>
  );

}
