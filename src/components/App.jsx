import { Component } from 'react';
import axios from 'axios';

import styles from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import { searchGallery } from '../shared/services/galleryApi';
class App extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      this.setState({ loading: true });
      searchGallery(search)
        .then(({ data }) => this.setState({ items: data.hits }))
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  getData = ({ search }) => {
    console.log(search);
    this.setState({ search });
    return true;
  };

  render() {
    const { getData } = this;
    const { items, loading, error } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={getData} />
        <ImageGallery items={items} />
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
      </div>
    );
  }
}

export default App;
