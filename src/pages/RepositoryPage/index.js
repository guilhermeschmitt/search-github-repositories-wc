import { Col, Divider, Row, Avatar } from 'antd';
import React, { useEffect, useState } from 'react';

import {
  Container,
  Profile,
  FollowerIcon,
  StarIcon,
  WatcherIcon,
  IssueIcon,
  FavIcon,
  IconColumn,
  NameColumn,
  InfoColumn,
  Descriptioncolumn,
  Language,
  Title,
  Name
} from './styles';
import useCommon from '../../hooks/Common';
import { formatDateToDateString } from '../../Utils/DateUtils';
import UserService from '../../services/UserService';
import RepositoryService from '../../services/RepositoryService';
import RepositoryList from '../../components/Repository/RepositoryList';

function RepositoryPage(props) {
  const { repoResume } = useCommon();
  const [pageInfo, setPageInfo] = useState({ repository: undefined, user: undefined, repositories: [] });

  useEffect(() => {

    async function findPageInfo() {
      const { userName, repoName } = props.match.params;
      try {
        const [repository, user, repositories] = await Promise.all([
          RepositoryService.getRepository(userName, repoName),
          UserService.getUserInfo(userName),
          UserService.getUserRepositories(userName, 1, 10)
        ]);

        setPageInfo({ repository, user, repositories });
      } catch (error) {
        alert(error);
      }
    }

    async function findUserRepositories() {
      try {
        const { userName } = props.match.params;
        const [user, repositories] = await Promise.all([
          UserService.getUserInfo(userName),
          UserService.getUserRepositories(userName, 1, 10)
        ])

        setPageInfo({ repositories, user, repository: repoResume })
      } catch (error) {
        alert(error);
      }
    }

    if (!repoResume?.id)
      findPageInfo();
    else
      findUserRepositories();
  }, [repoResume]);

  const languageClass = pageInfo?.repository?.language ? pageInfo?.repository.language.toLowerCase() : 'other';

  return (
    <Container>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6}>
          <Profile>
            <Avatar
              size={128}
              src={pageInfo?.repository?.owner?.avatar_url}
            />
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
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <IconColumn span={4}>
              <FollowerIcon />
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
            <IconColumn span={4}>
              <FavIcon />
              <span>
                Favorite
              </span>
            </IconColumn>
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
          <Divider />
          <Row>
            <Title span={24}>
              REPOSITORIES
            </Title>
          </Row>
          <Row>
            <Col span={24}>
              <RepositoryList
                data={pageInfo?.repositories}
                onChange={() => alert("TODO:")}
                total={pageInfo?.user?.public_repos}
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

// Ao clicar sobre um dos resultados,os istema deve apresentar mais detalhes a respeito do repositório,
// incluindo também o número de ​issues abertas, a linguagem principal do projeto, data da criação do projeto e
// uma listagem de outros repositórios do mesmo autor.

export default RepositoryPage;
