import {playMode} from '../common/js/config';
import {loadFavorite} from '../common/js/cache';

const state={
    singer:{},
    playing:false,
    fullScreen:false,
    playlist:[],
    sequenceList:[],
    mode:playMode.sequence,
    currentIndex:-1,
    desc:{},
    topList:{},
    favoriteList:loadFavorite()
}
export default state;