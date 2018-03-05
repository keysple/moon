<template>
    <div class="introduce">
        <!--<div class="author">-->
        <!--<h3>作者简介</h3>-->
        <!---->
        <!--</div>-->
        <card>
            <p slot="title">作者简介 </p>
            <Avatar src="src/renderer/assets/Avatar.JPG" size="large"/>
            <p>姓名：<span>程玲娜</span></p>
        </card>
        <card>
            <p slot="title">作品简介 </p>
            <Timeline>
            <TimelineItem>
            <p class="time">2017年12月</p>
            <p class="content">确定题目</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">1984年</p>
                <p class="content">文献综述和开题报告</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2007年</p>
                <p class="content">客户端完成</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2010年</p>
                <p class="content">查重</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2011年10月5日</p>
                <p class="content">史蒂夫·乔布斯去世</p>
            </TimelineItem>
            </Timeline>
        </card>
    </div>
</template>

<script>
    import Card from "iview/src/components/card/card";

    export default {
        components: {Card},
        name: "introduce"
    }
</script>

<style scoped lang="less">
    .introduce {
        margin: 0 100px;

    }
</style>