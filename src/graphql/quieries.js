import gql from 'graphql-tag';

const queryRepositories = gql`
  query SearchMostTop10Star($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            url
            descriptionHTML
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
          }
        }
      }
    }
  }
`;

export default {
  repositories: queryRepositories,
};
