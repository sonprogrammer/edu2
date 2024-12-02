'use client'

import Modal from "@/app/Modal";
import Image from "next/image";
import { MouseEventHandler, ReactEventHandler, useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<string>('')

  const OpenModal =(item: string)=> {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  
  return (
    <div className="h-full w-full">
        <div className="clothes">
          <div 
            className="shoes hover:scale-[1.05] hover:shadow-lg transition-shadow"
             onClick={() => OpenModal('shoes')}
            >
              <p className="text-white ">shoes</p>
          </div>
          <div className="jacket hover:scale-[1.05] hover:shadow-lg transition-shadow"
            onClick={() => OpenModal('jacket')}
          >

              <p className="text-white">jacket</p>
          </div>
          <div className="pants hover:scale-[1.05] hover:shadow-lg transition-shadow"
            onClick={() => OpenModal('pants')}
          >
              <p className="text-white">pants</p>

          </div>
          <div className="bedding hover:scale-[1.05] hover:shadow-lg transition-shadow"
            onClick={() => OpenModal('bedding')}
          >
              <p className="text-white">bedding</p>
          </div>
        </div>
        <Modal closeModal={closeModal} isOpen={isModalOpen} selectedItem={selectedItem}/>
    </div>

  );
} 
