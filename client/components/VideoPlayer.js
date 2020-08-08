import React from 'react';
import videojs from 'video.js'
import axios from 'axios';
import './VideoPlayer.scss';
import config from '../../server/config/default';

export default class VideoPlayer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stream: false,
            videoJsOptions: null
        }
    }

    componentDidMount() {

        axios.get('/user', {
            params: {
                username: this.props.match.params.username
            }
        }).then(res => {
            this.setState({
                stream: true,
                videoJsOptions: {
                    autoplay: true,
                    controls: true,
                    sources: [{
                        src: 'https://whirl.tv:' + config.rtmp_server.https.port + '/live/' + res.data.stream_key + '/index.m3u8',
                        type: 'application/x-mpegURL'
                    }],
                    fluid: true,
                }
            }, () => {
                this.player = videojs(this.videoNode, this.state.videoJsOptions, function onPlayerReady() {
                    console.log('onPlayerReady', this)
                });
            });
        })
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 mx-auto mt-5">
                    <h1>{this.props.match.params.username}'s stream</h1>
                    {this.state.stream ? (
                        <div data-vjs-player>
                            <video ref={node => this.videoNode = node} className="player video-js vjs-big-play-centered"/>
                        </div>
                    ) : ' Loading ... '}
                    <button type="submit" class="btn btn-dark">Follow</button>
                </div>
            </div>
        )
    }
}