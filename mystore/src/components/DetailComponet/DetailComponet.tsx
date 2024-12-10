import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StyledContainer, StyledContent, StyledIndPort, StyledPortfolio, StyledTitle } from './style'
import { Section } from '../../types'

const DetailComponet = () => {
    const [item, setItem] = useState<Section | null>(null)
    const { id } = useParams()


    useEffect(() => {
        if (id) {
            const itemId = Number(id);
            const savedItems = localStorage.getItem('myItem');
            if (savedItems) {
                const items: Section[] = JSON.parse(savedItems);
                const selectedItem = items.find((item) => item.id === itemId);
                setItem(selectedItem || null);
            }
        }

    }, [id])

    if (!item) {
        return <div>there is nothing</div>
    }


    return (
        <StyledContainer>
            <StyledTitle>{item.title}</StyledTitle>
            {typeof item.content === 'string' ? (
                <StyledContent>{item.content}</StyledContent>
            ) : (
                <StyledPortfolio>
                    {item.content.map((portfolio, index) => (
                        <StyledIndPort key={index}>

                            {portfolio.Link ? (
                                <div className='flex justify-between text-[17px] font-bold'>
                                    <h1>Github</h1>
                                    <a
                                        href={portfolio.Link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-blue-500 underline'
                                    >
                                        {portfolio.description}
                                    </a>
                                </div>
                            ) : (
                                <>

                                    <div className='flex justify-between text-[17px] font-bold'>
                                        <h1>Project Name</h1>
                                        <h3>{portfolio.projectTitle}</h3>
                                    </div>
                                    <h2>Project Description ⇩</h2>
                                    <p className='text-violet-600'>{portfolio.description}</p>
                                    <h2 className='font-bold'>My Role</h2>
                                    <p className='p-1'>{portfolio.role}</p>
                                    <h2 className='font-bold'>Reflection</h2>
                                    <p className='p-1'>{portfolio.reflection}</p>
                                </>
                            )}
                        </StyledIndPort>
                    ))}
                </StyledPortfolio>

            )}
        </StyledContainer>
    )
}

export default DetailComponet
