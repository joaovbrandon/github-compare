import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Repository, Button } from './styles';

const CompareList = ({
  repositories,
  updatingRepositoriesId,
  updateRepository,
  removeRepository,
}) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>
            {`${repository.stargazers_count} `}
            <small>starts</small>
          </li>
          <li>
            {`${repository.forks_count} `}
            <small>forks</small>
          </li>
          <li>
            {`${repository.open_issues_count} `}
            <small>issues</small>
          </li>
          <li>
            {`${repository.last_commit} `}
            <small>last commit</small>
          </li>
        </ul>

        <Button className="update" type="button" onClick={() => updateRepository(repository.id)}>
          {updatingRepositoriesId.includes(repository.id) ? (
            <i className="fa fa-spinner fa-pulse" />
          ) : (
            <Fragment>
              <i className="fa fa-retweet" />
              {' Update'}
            </Fragment>
          )}
        </Button>

        <Button className="remove" type="button" onClick={() => removeRepository(repository.id)}>
          <i className="fa fa-trash" />
          Remove
        </Button>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
      }),
      stargazers_count: PropTypes.number.isRequired,
      forks_count: PropTypes.number.isRequired,
      open_issues_count: PropTypes.number.isRequired,
      last_commit: PropTypes.string.isRequired,
    }),
  ).isRequired,
  updatingRepositoriesId: PropTypes.shape(PropTypes.number.isRequired).isRequired,
  updateRepository: PropTypes.func.isRequired,
  removeRepository: PropTypes.func.isRequired,
};

export default CompareList;
