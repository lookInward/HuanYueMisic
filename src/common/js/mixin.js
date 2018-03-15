import {mapGetters,mapMutations,mapActions} from 'vuex';

export const playerMixin={
    computed:{
        ...mapGetters([
            'favoriteList'
        ])
    },
    methods:{
        getFavoriteIcon(song){
            if(this.isFavorite(song)){
                return 'icon-xiai';
            }else{
                return 'icon-noxiai';
            }
        },
        toggleFavorite(song){
            if(this.isFavorite(song)){
                this.deleteFavoriteList(song)
            }else{
                this.saveFavoriteList(song)
            }
        },
        isFavorite(song){
            const index=this.favoriteList.findIndex(item=>{
                return item.id===song.id
            })
            return index>-1;
        },
        ...mapActions([
            'saveFavoriteList',
            'deleteFavoriteList'
        ])
    }
}