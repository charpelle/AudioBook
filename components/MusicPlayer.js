import { Alert } from "react-native";
import { Audio } from "expo";

export default class MusicPlayer {

    // Current item index
    index = 0;

    constructor(list, initialState = { speed: 1, autoPlay: true }) {
        // Create new object from Expo.Audio.Sound
        this.soundObject = new Audio.Sound();

        // Set speed value
        this.speed = initialState.speed;

        this.list = list;
    }

    /**
     * Get current item name.
     * @return {string} Current item name.
     */
    getCurrentItemName = () => {
        return this.list[this.index].name;
    };

    /**
     * Start or stop audio.
     * @param {number} index - Index of playing item.
     * @param {boolean} playing - Is audio playing now or no.
     * @return {Promise}
     */
    startPlay = async (index = this.index, playing = false) => {
        const path = this.list[index].path;
        this.index = index;

        // Checking if now playing music, if yes stop that
        if(playing) {
            await this.soundObject.stopAsync();
        } else {
            // Checking if item already loaded, if yes just play, else load music before play
            if(this.soundObject._loaded) {
                await this.soundObject.playAsync();
            } else {
                await this.soundObject.loadAsync(path);
                await this.soundObject.playAsync();
            }
        }
    };

    /**
     * Set speed of playing music.
     * @param {number} speed - Speed of now playing music.
     */
    setSpeed = (speed) => {
        this.soundObject.setRateAsync(speed);
    };

    /**
     * Play next item.
     * @return {Promise}
     */
    playNext = async () => {

        if(!this.list[this.index + 1]) {
            Alert.alert('Warning', 'There are no next');
        } else {
            const path = this.list[this.index + 1].path;
            this.index++;
            await this.soundObject.unloadAsync();
            await this.soundObject.loadAsync(path);
            await this.soundObject.playAsync();
        }
    }

    /**
     * Play previous item.
     * @return {Promise}
     */
    playPrev = async () => {
        if(!this.list[this.index  - 1]) {
            Alert.alert('Warning', 'There are no prev');
        } else {
            const path = this.list[this.index  - 1].path;
            this.index--;
            await this.soundObject.unloadAsync();
            await this.soundObject.loadAsync(path);
            await this.soundObject.playAsync();
        }
    }
}
