import styled from "styled-components";
import ImageLoadingView from "../common/ImageLoadingView";
import TextLoadingView from "../common/TextLoadingView";
import Colors from "../../consts/Colors";
import IconButton from "../common/IconButton";
import { useNavigate } from "react-router-dom";

const TodayTipsContainer = styled.div`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ContentContainer = styled.div`
    flex-direction: column;
    gap: 2px;
`;

const LikeContainer = styled.div`
    flex-direction: row;
    gap: 12px;
`;

const LikePairContainer = styled.div`
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;

export interface TodayTipsProps {
    title: string | undefined,
    content: string | undefined,
    likes: number | undefined,
    hates: number | undefined,
    imgUrl: string | undefined,
    articleId: number | undefined
};

const TodayTips = ({ title, content, likes, hates, imgUrl, articleId }: TodayTipsProps) => {
    const navigate = useNavigate();
    return (
        <TodayTipsContainer
            onClick={() => navigate(`/detail/${articleId}`)}
        >
            <ContentContainer>
                <TextLoadingView
                    text={title}
                    font="semibold"
                    size={16}
                    color={Colors.Black}
                />
                <TextLoadingView
                    text={content}
                    font="medium"
                    size={14}
                    color={Colors.Gray2}
                />
                <LikeContainer>
                    <LikePairContainer>
                        <IconButton
                            src="like"
                            size={12}
                            onclick={() => {}}
                        />
                        <TextLoadingView
                            text={`${likes}개`}
                            font="regular"
                            size={12}
                            color={Colors.Gray2}
                        />
                    </LikePairContainer>
                    <LikePairContainer>
                        <IconButton
                            src="dislike"
                            size={12}
                            onclick={() => {}}
                        />
                        <TextLoadingView
                            text={`${hates}개`}
                            font="regular"
                            size={12}
                            color={Colors.Gray2}
                        />
                    </LikePairContainer>
                </LikeContainer>
            </ContentContainer>
            <ImageLoadingView
                src={imgUrl}
                width="76px"
                height="76px"
                radius={8}
                objectFit="cover"
                alt="image"
            />
        </TodayTipsContainer>
    );
};

export default TodayTips;