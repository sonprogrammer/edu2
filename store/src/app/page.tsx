import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
        <div className="clothes">
          <div className="shoes hover:scale-[1.05] hover:shadow-lg transition-shadow">
              <p className="text-white ">shoes</p>
          </div>
          <div className="jacket hover:scale-[1.05] hover:shadow-lg transition-shadow">

              <p className="text-white">jacket</p>
          </div>
          <div className="pants hover:scale-[1.05] hover:shadow-lg transition-shadow">
              <p className="text-white">pants</p>

          </div>
          <div className="bedding hover:scale-[1.05] hover:shadow-lg transition-shadow">
              <p className="text-white">bedding</p>

          </div>
        </div>
    </div>
    
  );
} 
