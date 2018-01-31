<template>
    <div>
        <Tabs value="name1" >
            <TabPane label="介绍" name="introduce" icon="happy">
                <introduce></introduce>
            </TabPane>
            <TabPane label="编辑" name="edit" icon="edit">
                <edit></edit>
            </TabPane>
            <TabPane label="文件管理" name="fileManger" icon="ios-folder">
                <file-manger></file-manger>
            </TabPane>
            <TabPane label="致谢" name="thanks" icon="thumbsup">
                <thanks></thanks>
            </TabPane>
            <TabPane label="关于" name="about" icon="bowtie">
                <about></about>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>

    import Icon from "iview/src/components/icon/icon";
    import Introduce from "./LandingPage/introduce";
    import Edit from "./LandingPage/edit";
    import FileManger from "./LandingPage/fileManger";
    import Thanks from "./LandingPage/thanks";
    import About from "./LandingPage/about";

    export default {
        name: 'landing-page',
        components: {
            About,
            Thanks,
            FileManger,
            Edit,
            Introduce,
            Icon
        },
        methods: {
            // open(link) {
            //     this.$electron.shell.openExternal(link)
            // }
        }
    }
</script>

<style lang='less'>
</style>
