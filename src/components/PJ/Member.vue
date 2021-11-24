<template>
    <section class="box" id="member">
                <div class="contents">
                    <h1 class="sectiontitle">member</h1>
                    <div class="memberlist">
                        <div class="memberwrap" v-for="member in members" :key="member.id">
                            <div class="membericon">
                                <img v-bind:src="member.memberIcon" alt="">
                            </div>
                            <div class="namewrap">
                                <div :class="{'representative' : member.isRepresentative, 'noRepresentative' : !member.isRepresentative}">
                                    <img :src="member.representative" alt="">
                                </div>
                                <p class="program">{{member.memberProgram}}</p>
                                <p class="membername">{{member.memberName}}</p>
                            </div>
                            <p class="memberrole">{{member.memberRole}}</p>
                        </div>
                    </div>
                </div>
            </section>
</template>

<script>
export default {
    data(){
        return{
            members:[
                {
                    id: 1,
                    memberIcon: require('@/assets/imgs/member/gaien.jpg'),
                    representative: require('@/assets/imgs/王冠金.png'),
                    isRepresentative: true,
                    memberProgram: 'CD',
                    memberName: 'ほかぞの',
                    memberRole: 'motioner, att.creator'
                },
                {
                    id: 2,
                    memberIcon: require('@/assets/imgs/member/kine.jpg'),
                    representative: require('@/assets/imgs/王冠銀.png'),
                    isRepresentative: true,
                    memberProgram: 'NS',
                    memberName: 'きね',
                    memberRole: 'planner, effecter'
                },
                {
                    id: 3,
                    memberIcon: require('@/assets/imgs/member/rem.jpg'),
                    representative: require('@/assets/imgs/王冠銀.png'),
                    isRepresentative: true,
                    memberProgram: 'PC',
                    memberName: 'やまもと',
                    memberRole: 'GAMEprogrammer systemEngineer'
                },
                {
                    id: 4,
                    memberIcon: require('@/assets/imgs/member/konishi.jpg'),
                    representative: null,
                    isRepresentative: false,
                    memberProgram: 'CD',
                    memberName: 'こにし',
                    memberRole: 'planner, designer  att.creator'
                },
                {
                    id: 5,
                    memberIcon: require('@/assets/imgs/member/rehu.jpg'),
                    representative: null,
                    isRepresentative: false,
                    memberProgram: 'PC',
                    memberName: 'ほりえ',
                    memberRole: 'RCprogrammer systemEngineer'
                },
                {
                    id: 6,
                    memberIcon: require('@/assets/imgs/member/fujikko.jpg'),
                    representative: null,
                    isRepresentative: false,
                    memberProgram: 'PC',
                    memberName: 'ふじの',
                    memberRole: 'WEBprogrammer effector'
                },
                {
                    id: 7,
                    memberIcon: require('@/assets/imgs/member/yasoda.jpg'),
                    representative: null,
                    isRepresentative: false,
                    memberProgram: 'PC',
                    memberName: 'やそだ',
                    memberRole: 'composer'
                },
                {
                    id: 8,
                    memberIcon: require('@/assets/imgs/member/yosi.jpg'),
                    representative: null,
                    isRepresentative: false,
                    memberProgram: 'CD',
                    memberName: 'よしだ',
                    memberRole: 'illustrator, designer'
                },
                {
                    id: 9,
                    memberIcon: require('@/assets/imgs/member/hujimoto.jpg'),
                    representative: null,
                    isRepresentative: false,
                    memberProgram: 'CD',
                    memberName: 'ふじもと',
                    memberRole: 'illustrator'
                },
                {
                    id: 10,
                    memberIcon: require('@/assets/imgs/member/satake.jpg'),
                    representative: null,
                    isRepresentative: false,
                    memberProgram: null,
                    memberName: 'さたけ先生',
                    memberRole: 'teacher'
                },
                
            ]
        }
        
    }
}
</script>

<style>
#member{
    background-color: #ffffff;
}

#member .sectiontitle{
    color: #4EA1FF;
}

#member::after{
    content: "";
    position: absolute;
    top: 10%;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/imgs/background/memberbg.png);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
}

.memberlist{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 80%;
}

.memberwrap{
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: calc( ( 100% - 60px ) / 3 );
    margin-bottom: 10px;
}

.memberwrap p{
    margin: 3px;
}

.membericon{
    width: 100%;
    padding: 0 25% 0 25%;
    box-sizing: border-box;
}

.membericon img{
    width: 100%;
    border-radius: 1000px;
    box-shadow: #4B4B4B 2px 2px 3px;
}

.membericon :hover{
    transform: scale(1.1);
    transition-duration: 0.5s;
}

.namewrap{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.representative{
    position: relative;
    width: 10%;
}
.noRepresentative{
    display: none;
}

.representative img{
    position: relative;
    width: 100%;
}

.program{
    font-size: 10px;
}

.memberrole{
    max-width: 80%;
}

@media screen and (max-width:768px) {
    .memberlist{
        width: 80%;
        flex-direction: column;
    }
    .memberwrap{
        width: 100%;
    }
    .memberrole{
        max-width: 50%;
    }
}

</style>