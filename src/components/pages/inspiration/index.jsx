import React from 'react';

import { Loading, ErrorMessage } from '../../../components';
import { useQuery } from '@apollo/react-hooks';

import queries from '../../../graphql/quieries.js';

const CenteredContainer = ({ children }) => (
  <div className='flex-center-container half-window-height'>{children}</div>
);
const openRepo = url => window.open(url);

const noRepositories =
  'Ooops... It looks like no projects can be found with these criteria';

const Inspiration = ({ queryString }) => {
  const { loading, error, data } = useQuery(queries.repositories, {
    variables: { queryString },
  });

  if (loading)
    return (
      <CenteredContainer>
        <Loading />
      </CenteredContainer>
    );
  if (error)
    return (
      <CenteredContainer>
        <ErrorMessage error={error.message} />
      </CenteredContainer>
    );
  if (data && data.search.edges.length === 0)
    return (
      <CenteredContainer>
        <h3>{noRepositories}</h3>
      </CenteredContainer>
    );
  return (
    <CenteredContainer>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope='col'>Name</th>
            <th scope='col' className=' d-none d-lg-block'>
              Description
            </th>
            <th scope='col'>Stars</th>
          </tr>
        </thead>
        <tbody>
          {data.search.edges.map((repo, index) => (
            <tr
              key={`repository-${index}`}
              onClick={() => openRepo(repo.node.url)}
            >
              <th scope='row'>{index + 1}</th>
              <td>{repo.node.name}</td>
              <td className=' d-none d-lg-block'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: repo.node.descriptionHTML,
                  }}
                />
              </td>
              <td>{repo.node.stargazers.totalCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </CenteredContainer>
  );
};
export default Inspiration;
