import React, { Component } from 'react';
import moment from 'moment';
import { Container, Form } from './styles';

// Assets
import logo from '../../assets/images/github-compare-logo.png';

// Components
import CompareList from '../../components/CompareList';

// Services
import api from '../../services/api';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    this.setState({ loading: false, repositories: await this.getLocalRepositories() });
  }

  getLocalRepositories = async () => JSON.parse(await localStorage.getItem('GitHubCompare@repositories')) || [];

  handleAddRepository = async (event) => {
    event.preventDefault();

    const { loading, repositoryInput, repositories } = this.state;

    if (loading || !repositoryInput) return;

    this.setState({ loading: true });

    try {
      const { data: newRepository } = await api.gitHub.get(`/repos/${repositoryInput}`);

      newRepository.last_commit = moment(newRepository.pushed_at).fromNow();

      this.setState({
        repositoryError: false,
        repositoryInput: '',
        repositories: [newRepository, ...repositories],
      });

      await localStorage.setItem(
        'GitHubCompare@repositories',
        JSON.stringify([newRepository, ...repositories]),
      );
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      loading, repositoryError, repositoryInput, repositories,
    } = this.state;

    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />

        <Form repositoryError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="user/repository"
            value={repositoryInput}
            onChange={event => this.setState({ repositoryInput: event.target.value })}
          />
          <button type="submit">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : <i className="fa fa-plus" />}
          </button>
        </Form>

        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
