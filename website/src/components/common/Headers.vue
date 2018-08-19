<template>
    <div class="headers">
        <div class="headers-top">
            <div class="picture">
                <router-link  :to="{name: 'Home'}">
                    <img src="../../assets/images/logo.png"/>
                </router-link>
            </div>
            <div class="menu" @click="show">
                <img src="../../assets/images/menu.png"/>
            </div>
        </div>
        <ul class="case-big" v-show="menuShow" @click="show">   
            <hr/>
            <router-link :to="{name: 'Home'}" tag="li">
                <p>首页</p>
            </router-link>
            <router-link :to="{name: ''}" tag="li">
                <p>公司介绍</p>
            </router-link>
            <router-link :to="{}" tag="li" class="sCase">
                <p>案例展示</p>
                <ul class="cases-hide">
                    <router-link :to="{name: ''}" tag="li">
                        <p>案例展示一</p>
                    </router-link>
                    <router-link :to="{}" tag="li">
                        <p>案例展示二</p>
                    </router-link>
                    <router-link :to="{name: ''}" tag="li">
                        <p>案例展示三</p>
                    </router-link>
                    <router-link :to="{name: ''}" tag="li">
                        <p>案例展示四</p>
                    </router-link>
                    <router-link :to="{name: ''}" tag="li">
                        <p>案例展示五</p>
                    </router-link>
                    <router-link :to="{name: ''}" tag="li">
                        <p>案例展示六</p>
                    </router-link>
                </ul>
            </router-link>
            <router-link :to="{name: 'News'}" tag="li">
                <p>公司新闻</p>
            </router-link>
            <router-link :to="{name: 'Notice'}" tag="li">
                <p>公告</p>
            </router-link>            
        </ul>
    </div>
</template>

<script>
export default {
    name: 'headers',
    data () {
        return {
            menuShow: false
        }
    },
    methods: {
        show () {
            this.menuShow = !this.menuShow
        }
    }
}
</script>

<style lang="scss" scoped>
.headers-top {
    width: 85.09%;
    height: 160px;
    margin: 0 auto;
    .picture {
        padding-top: 79px;
        float: left;
        width: 29.706%;
        img {
            width: 100%;
        }
    }
    .menu {
        padding-top: 79px;
        float: right;
        cursor: pointer;
        width: 7.834%;
        img {
            width: 100%;
        }
    }    
}
.case-big {
    position: absolute;
    overflow: hidden;
    z-index: 999;
    width: 100%;
    /* display: none; */
    hr {
        margin:0;
        padding:0;
    }
    p {
        margin: 0;
        padding-left: 7.5%;
        height: 50px;
        line-height: 50px;
        background-color: white;
        cursor: pointer;
    }
    p:hover {
        background-color: #e2dddd;
    }
    .cases-hide p{
        padding-left: 12.5%;
    }
    .cases-hide {
        display: none;
    }
    .sCase:hover .cases-hide{
        display: block;
    }   
}

</style>
