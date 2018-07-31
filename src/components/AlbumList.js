import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    const { albums } = this.state;
    return albums.map(album => <AlbumDetail key={album.url} album={album} />);
  }

  render() {
    const { albums } = this.state;
    console.log('response', albums);
    return (
      <ScrollView>
        {this.renderAlbums(albums)}
      </ScrollView>
    );
  }
}

export default AlbumList;
