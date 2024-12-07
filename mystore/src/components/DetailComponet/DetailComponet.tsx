import React from 'react'
import { useParams } from 'react-router-dom'
import { StyledContainer } from './style'

const DetailComponet = () => {
    const { id } = useParams()

    return (
        <StyledContainer>
            <h1>{id}</h1>
            <p>description. 스페인 '피차헤스'는 6일(이하 한국시간) "레알 마드리드가 프리미어리그에서 뛰는 스타 플레이어를 주목하고 있다"라며 손흥민의 이름을 언급했다.
                매체는 "레알 마드리드는 다가오는 이적 시장에서 영입 가능한 주요 선수 중 하나로 손흥민을 주시하고 있다. 그는 이번 시즌이 끝나면 토트넘과 계약이 종료될 예정이다. 손흥민의 미래는 런던을 떠나는 방향으로 흘러갈 가능성이 커 보인다. 토트넘은 손흥민이 팀 공격력을 보강하는 데 있어 경험과 득점력을 겸비한 중요한 자원으로 평가하고 있다"라고 보도했다.
                2008년 함부르크 SV 유소년 팀에 입단하며 유럽 축구 무대에 첫 발을 내디딘 손흥민은 2010년 18세의 나이로 분데스리가에 데뷔했다. 첫 시즌부터 3골을 기록하며 유망한 신예로 주목받았고, 이후 독일 리그에서 두각을 나타내며 '아시아의 별'로 자리잡았다.</p>
        </StyledContainer>
    )
}

export default DetailComponet
