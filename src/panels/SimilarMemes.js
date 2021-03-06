import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, Group, Spinner} from '@vkontakte/vkui';
import "./postImg.css"
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import InfiniteScroll from "react-infinite-scroll-component";

const SimilarMemes = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="home">
                <Icon28ChevronBack/>
            </HeaderButton>}
        >
            Similar memes
        </PanelHeader>

        {/*<img className="postImg" src="https://i.uaportal.com/gallery/2018/11/9/13.jpg"/>*/}

        <InfiniteScroll
            dataLength={props.similarMemes.length}
            next={props.getSimilarMemes(props.postId)}
            hasMore={true}
            loader={<div style={{height: 100}}>
                <Spinner/>
            </div>
            }
        >
            {props.similarMemes.map((meme) => (
                <Group>
                    <p>{meme.text}</p>
                    <img className="postImg" src={meme.urlPic}/>
                </Group>
            ))}
        </InfiniteScroll>
    </Panel>
);

SimilarMemes.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default SimilarMemes;
