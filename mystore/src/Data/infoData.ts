interface Section {
    title: string;
    ImageUrl: string;
    content: string | Portfolio[]
}

interface Portfolio{
    projectTitle: string;
    description: string;
    image: string
}

export const infoData = [
    {
        id: 0,
        title: 'About me',
        ImageUrl: './me.webp',
        content: "I have hands-on experience in front-end development using React, Node.js, and TypeScript. I enjoy implementing user-centric designs and solving technical challenges. Some key projects include 'CAN' and 'BNTY'."
    },
    {
        id: 1,
        title: 'Overseas Experience',
        ImageUrl: 'ex1.webp',
        content: '영국 더 하드 태클은 6일(한국시간) 스페인 피차헤스를 인용하여 "손흥민은 레알의 영입 타깃이다. 레알은 토트넘 훗스퍼 주장 손흥민을 보스만 룰을 통해 영입하기를 바라고 있다. 손흥민은 레알의 뛰어난 영입생이 될 수 있다. 그는 레알에 득점과 창의성을 더할 것이다. 레알은 팀에 더 많은 깊이를 더하고 싶어하고, 손흥민은 이상적인 영입이 될 것이다"라고 보도했다.'
    },
    {
        id: 2,
        title: 'Development Experience',
        ImageUrl: 'code1.webp',
        content: "I have hands-on experience in front-end development using React, Node.js, and TypeScript. I enjoy implementing user-centric designs and solving technical challenges. Some key projects include 'CAN' and 'BNTY'."
    },
    {
        id: 3,
        title: 'Technical Skills',
        ImageUrl: 'skill.webp',
        content: "Proficient in React, Node.js, TypeScript, JavaScript, and MongoDB. Skilled in using tools like Styled-Components, Recoil, and Axios for efficient development. Passionate about UI/UX design and responsive web applications."
    },
    {
        id: 4,
        title: 'Portfolio',
        ImageUrl: 'po.webp',
        content: [
            {
              projectTitle: "Mingle",
              description: "A platform for people who want to share theirs song or playlists.",
              image: "https://example.com/can-project.jpg"
            },
            {
              projectTitle: "CAN (Check Again Note)",
              description: "A platform for trainers and members to manage workout and dietary records.",
              image: "https://example.com/can-project.jpg"
            },
            {
              projectTitle: "BNTY",
              description: "A web application featuring photo albums, QR code scanning, and chat functionalities.",
              image: "https://example.com/bnty-project.jpg"
            }
          ]
    }
]