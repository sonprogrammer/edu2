import React from 'react'

const page = () => {
  return (
    <div className='flex'>
        <div className="sideBar">
            <div className='lists'>
                <div className="logo font-serif">instagram</div>
                <ul className='menu'>
                    <li>🏠 home</li>
                    <li>🔎 search</li>
                    <li>🧭 explore</li>
                    <li>🎥 reels</li>
                    <li>💌 message</li>
                </ul>
                <div className='setting px-[30px] py-[30px]'> ⌨️ more</div>
            </div>
        </div>
        <div className="main">
            <div className="storys">    
                <div className="story">
                    <img src="./next.svg" alt="story" className='w-[70px] h-[70px]' />
                    <span>name</span>
                </div>
                <div className="story">
                    <img src="./next.svg" alt="story" className='w-[70px] h-[70px]' />
                    <span>name</span>
                </div>
                <div className="story">
                    <img src="./next.svg" alt="story" className='w-[70px] h-[70px]' />
                    <span>name</span>
                </div>
                
                
                <div className="story">
                    <img src="./next.svg" alt="story" className='w-[70px] h-[70px]' />
                    <span>name</span>
                </div>
                <div className="story">
                    <img src="./next.svg" alt="story" className='w-[70px] h-[70px]' />
                    <span>name</span>
                </div>
                <div className="story">
                    <img src="./next.svg" alt="story" className='w-[70px] h-[70px]' />
                    <span>name</span>
                </div>
                <div className="story">
                    <img src="./next.svg" alt="story" className='w-[70px] h-[70px]' />
                    <span>name</span>
                </div>
                <div className="story">
                    <img src="./next.svg" alt="story" className='w-[70px] h-[70px]' />
                    <span>name</span>
                </div>
                <div className="story">
                    <img src="./next.svg" alt="story" className='w-[70px] h-[70px]' />
                    <span>name</span>
                </div>
                <div className="story">
                    <img src="./next.svg" alt="story" className='w-[70px] h-[70px]' />
                    <span>name</span>
                </div>
            </div>
            <div className="post">
                <div className="postbox">
                    <div className="profile">
                        <img src="./next.svg" alt="profile" />
                        <p>name</p>
                    </div>
                    <div className="photo">
                        <img src="./bg.jpg" alt="post" />
                    </div>
                    <div className="icons">
                        ❤️ 💭 🏓
                    </div>
                    <div className="comment"></div>
                </div>
            </div>
        </div>
        <div className="recommend">
            im recommend page
        </div>
    </div>
  )
}

export default page
