import React, { useEffect, useState, useCallback } from 'react';
import { Col, Divider, Row, Avatar, Skeleton, message } from 'antd';
import NotFoundPage from '../NotFoundPage';

import {
  Container,
  Profile,
  ForkIcon,
  FollowerIcon,
  StarIcon,
  WatcherIcon,
  IssueIcon,
  FavIcon,
  FavColumn,
  IconColumn,
  NameColumn,
  InfoColumn,
  Descriptioncolumn,
  Language,
  Title,
  Name,
} from './styles';
import useCommon from '../../hooks/Common';
import { formatDateToDateString } from '../../Utils/DateUtils';
import UserService from '../../services/UserService';
import RepositoryService from '../../services/RepositoryService';
import RepositoryList from '../../components/Repository/RepositoryList';

function RepositoryPage(props) {
  const { repoResume, isFavorite, handleFavorites } = useCommon();

  const [pageInfo, setPageInfo] = useState({
    loading: true,
    user: undefined,
    repositories: [],
    repository: undefined,
  });

  useEffect(() => {
    async function findPageInfo() {
      const { userName, repoName } = props.match.params;
      try {
        let [repository, user, repositories] = await Promise.all([
          RepositoryService.getRepository(userName, repoName),
          UserService.getUserInfo(userName),
          UserService.getUserRepositories(userName, 1, 10)
        ]);

        repository = { ...repository, favorite: isFavorite(repository) }
        repositories = repositories.map(el => ({ ...el, favorite: isFavorite(el) }));

        setPageInfo({
          user,
          repository,
          repositories,
          loading: false,
        });
      } catch (error) {
        message.error(error.message);
        setPageInfo(prevState => ({
          ...prevState,
          loading: false,
          repository: { ...prevState.repository, error: true },
        }));
      }
    }

    async function findUserRepositories() {
      try {
        const { userName } = props.match.params;
        let [user, repositories] = await Promise.all([
          UserService.getUserInfo(userName),
          UserService.getUserRepositories(userName, 1, 10)
        ])

        repositories = repositories.map(el => ({ ...el, favorite: isFavorite(el) }));

        setPageInfo({
          user,
          repositories,
          loading: false,
          repository: repoResume,
        })
      } catch (error) {
        message.error(error.message);
        setPageInfo(prevState => ({ ...prevState, loading: false }));
      }
    }

    if (!repoResume?.id)
      findPageInfo();
    else
      findUserRepositories();
  }, [props.match.params]);

  const onChangePage = useCallback(async (page, pageSize) => {
    try {
      const { userName } = props.match.params;
      setPageInfo(prevState => ({ ...prevState, loading: true }));

      const value = await UserService.getUserRepositories(userName, page, pageSize);

      let repositories = value.map(el => ({ ...el, favorite: isFavorite(el) }));

      setPageInfo(prevState => ({
        ...prevState,
        repositories,
        loading: false,
      }));
    } catch (error) {
      message.error(error.message);
      setPageInfo(prevState => ({ ...prevState, loading: false }));
    }
  }, []);

  const handleFavorite = useCallback(() => {
    if (pageInfo.repository.favorite)
      setPageInfo(prevState => ({ ...prevState, favorite: false }));
    else
      setPageInfo(prevState => ({ ...prevState, favorite: true }));

    handleFavorites(pageInfo.repository);
  });

  const languageClass = pageInfo?.repository?.language ? pageInfo?.repository.language.toLowerCase() : 'other';

  if (pageInfo?.repository?.error)
    return <NotFoundPage />;

  return (
    <Container>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6}>
          <Profile>
            {
              pageInfo.loading &&
              <Skeleton.Avatar
                active
                size={128}
                shape='circle'
              />
            } {
              !pageInfo.loading &&
              <Avatar
                size={128}
                src={pageInfo?.repository?.owner?.avatar_url}
              />
            }
            <div>
              <Name>
                {pageInfo?.user?.name}
              </Name>
              <p>
                {pageInfo?.repository?.owner?.login}
              </p>
            </div>
          </Profile>
        </Col>
        <Col span={18}>
          {
            pageInfo.loading &&
            <Skeleton active />
          } {
            !pageInfo.loading &&
            <>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <IconColumn span={4}>
                  <ForkIcon />
                  <IconInfo
                    value={pageInfo?.repository?.forks_count || 0}
                    label='Forks'
                  />
                </IconColumn>
                <IconColumn span={4}>
                  <FollowerIcon />
                  <IconInfo
                    value={pageInfo?.repository?.subscribers_count || 0}
                    label='Followers'
                  />
                </IconColumn>
                <IconColumn span={4}>
                  <StarIcon />
                  <IconInfo
                    value={pageInfo?.repository?.stargazers_count || 0}
                    label='Stars'
                  />
                </IconColumn>
                <IconColumn span={4}>
                  <WatcherIcon />
                  <IconInfo
                    value={pageInfo?.repository?.watchers_count || 0}
                    label='Watchers'
                  />
                </IconColumn>
                <IconColumn span={4}>
                  <IssueIcon />
                  <IconInfo
                    value={pageInfo?.repository?.open_issues_count || 0}
                    label='Open issues'
                  />
                </IconColumn>
                <FavColumn
                  span={4}
                  onClick={handleFavorite}
                  className={`${pageInfo?.repository?.favorite ? 'favorite' : ''}`}
                >
                  <FavIcon />
                  <span>
                    Favorite
                  </span>
                </FavColumn>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: '10px' }}
              >
                <NameColumn span={24}>
                  <span>
                    {pageInfo?.repository?.name || 'Uninformed.'}
                  </span>
                </NameColumn>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <InfoColumn span={24}>
                  <span>
                    Created at {
                      pageInfo?.repository?.created_at
                        ? formatDateToDateString(pageInfo.repository.created_at)
                        : 'Uninformed.'
                    }
                  </span>
                </InfoColumn>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Descriptioncolumn span={20}>
                  <span>
                    {pageInfo?.repository?.description || 'Uninformed.'}
                  </span>
                </Descriptioncolumn>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ marginTop: '10px' }}>
                <InfoColumn span={4}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Language className={`${languageClass}`} />
                    <span>
                      {pageInfo?.repository?.language || 'Other'}
                    </span>
                  </div>
                </InfoColumn>
                <InfoColumn span={4}>
                  <span>
                    {pageInfo?.repository?.license?.name || 'No license specified'}
                  </span>
                </InfoColumn>
              </Row>
            </>
          }
          <Divider />
          <Row>
            <Title span={24}>
              REPOSITORIES
            </Title>
          </Row>
          <Row>
            <Col span={24}>
              <RepositoryList
                onChange={onChangePage}
                total={pageInfo?.user?.public_repos}
                loading={pageInfo.loading}
                data={
                  pageInfo.loading
                    ? [...new Array(10)].map(() => ({ loading: true }))
                    : pageInfo?.repositories
                }
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

const IconInfo = ({ value, label }) => (
  <>
    <b>
      {value}
    </b>
    <span>
      {label}
    </span>
  </>
)

export default RepositoryPage;
