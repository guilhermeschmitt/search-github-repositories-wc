import { Skeleton } from 'antd';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import useCommon from '../../../hooks/Common';
import { Routes } from '../../../routes/Routes';

import {
  Container,
  Header,
  RepositoryIcon,
  TextLink,
  Description,
  Content,
  ContentInfo,
  StarIcon,
  Language
} from './styles';

function RepositoryCard({ repository, history }) {

  const { handleFavorites, setRepoResume } = useCommon();

  const [repoFav, setRepoFav] = useState(repository?.favorite || false);
  const languageClass = repository?.language ? repository.language.toLowerCase() : 'other';

  function pushToResume() {
    const [userName, repoName] = repository?.full_name.split('/');

    setRepoResume(repository);
    history.push(Routes.repository.format(userName, repoName));
  }

  function handleFavorite() {
    if (repoFav)
      setRepoFav(false);
    else
      setRepoFav(true);

    handleFavorites(repository);
  }

  return (
    <Skeleton loading={repository.loading} active avatar>
      <Container>
        <Header>
          <RepositoryIcon />
          <TextLink onClick={pushToResume}>
            {repository?.full_name}
          </TextLink>
        </Header>
        <Description>
          {repository?.description}
        </Description>
        <Content>
          <ContentInfo
            onClick={handleFavorite}
            title='Click to favorite!'
            className={`clickable ${repoFav ? 'favorite' : ''}`}
          >
            <StarIcon />
            <span>
              {repository?.stargazers_count}
            </span>
          </ContentInfo>
          <ContentInfo>
            <Language className={`${languageClass}`} />
            <span>
              {repository?.language || 'Other'}
            </span>
          </ContentInfo>
          <ContentInfo>
            <span>
              {repository?.license?.name || 'No license specified'}
            </span>
          </ContentInfo>
          <ContentInfo>
            <span>
              {repository?.updated_at}
            </span>
          </ContentInfo>
        </Content>
      </Container>
    </Skeleton>
  )
}

export default withRouter(RepositoryCard);
