import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import useCommon from '../../../hooks/Common';
import { Routes } from '../../../routes/Routes';
import { formatDateToDateString } from '../../../Utils/DateUtils';

import {
  Container,
  Header,
  RepositoryIcon,
  TextLink,
  Description,
  Content,
  ContentInfo,
  StarIcon,
  Language,
  SkeletonWrapper,
  FavoriteIcon,
  FavoriteContainer
} from './styles';

function RepositoryCard({ repository, favorite, history, index }) {

  const { handleFavorites, setRepoResume } = useCommon();

  const [repoFav, setRepoFav] = useState(favorite);
  const languageClass = repository?.language ? repository.language.toLowerCase() : 'other';

  function pushToResume() {
    const [userName, repoName] = repository?.full_name.split('/');

    setRepoResume(repository);
    history.push(Routes.repository.format(userName, repoName));
  }

  useEffect(() => {
    setRepoFav(favorite);
  }, [favorite]);

  function handleFavorite() {
    if (repoFav)
      setRepoFav(false);
    else
      setRepoFav(true);

    handleFavorites(repository);
  }

  return (
    <SkeletonWrapper
      active
      width={300}
      avatar
      loading={repository.loading}
    >
      <Container>
        <Header>
          <div>
            <RepositoryIcon />
            <TextLink onClick={pushToResume}>
              {repository?.full_name}
            </TextLink>
          </div>
          <FavoriteContainer
            id={`id${index}`}
            onClick={handleFavorite}
            className={`${repoFav ? 'favorite' : ''}`}
          >
            <FavoriteIcon />
            <span>
              Favorite
            </span>
          </FavoriteContainer>
        </Header>
        <Description>
          {repository?.description}
        </Description>
        <Content>
          <ContentInfo>
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
              Last update:
              {
                repository?.updated_at
                  ? ` ${formatDateToDateString(repository.updated_at)}`
                  : ' Uninformed.'
              }
            </span>
          </ContentInfo>
        </Content>
      </Container>
    </SkeletonWrapper>
  )
}

export default withRouter(RepositoryCard);
