import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import MusicPlayer from './components/MusicPlayer';

import { list } from './data/list';

export default class App extends React.Component {

    MusicPlayer = null;

    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            name: null,
        };
    }

    componentWillMount() {
        this.MusicPlayer = new MusicPlayer(list);
    }

    startStopPlay = () => {
        this.MusicPlayer.startPlay(0, this.state.playing).then(() => {
            this.setState({
                playing: !this.state.playing
            })
        });
    };

    playNext = () => {
        this.MusicPlayer.playNext().then(() => {
            this.setState({
                name: this.MusicPlayer.getCurrentItemName()
            });
        })
    };

    playPrev = () => {
        this.MusicPlayer.playPrev().then(() => {
            this.setState({
                name: this.MusicPlayer.getCurrentItemName()
            });
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.name || this.MusicPlayer.getCurrentItemName()}</Text>
                <Button title={this.state.playing ? 'Stop' : 'Play'} onPress={this.startStopPlay}/>
                <Button title='Next' onPress={this.playNext}>Next</Button>
                <Button title='Prev' onPress={this.playPrev}>Prev</Button>
                <Button title='Up' onPress={() => this.MusicPlayer.setSpeed(2.5)}/>
                <Button title='Down' onPress={() => this.MusicPlayer.setSpeed(0.6)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
