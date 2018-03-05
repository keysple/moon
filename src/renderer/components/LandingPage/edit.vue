<template>
    <div>
        <div class="toolBar">
            <ButtonGroup>
                <Button icon="document-text" @click="modal1 = true">保存文件</Button>
                <Button icon="plus-circled" @click="modal2 = true"  >导入文件</Button>
                <Button icon="ios-download" @click="html2pdf">导出为PDF</Button>
               <input type="file"/>
            </ButtonGroup>
        </div>
        <div class="editor">
            <textarea v-model="input" class="input"></textarea>
            <div v-html="preview" class="preview"></div>
        </div>
        <Modal
                v-model="modal1"
                title="保存"
                width="400"
        >
            <div style="text-align:center">
                <input type="text" placeholder="请输入保存文件名称" id="fileName" class="fileName"/>
            </div>
            <div slot="footer">
                <Button type="primary" @click="saveFile('md')" class="saveButton">保存为md文件</Button>
                <Button type="primary" @click="saveFile('html')" class="saveButton">保存为HTML文件</Button>
            </div>
        </Modal>
        <Modal
                v-model="modal2"
                title="选择文件"
                width="400"
                @on-ok="importFile"
        >
            <input type="file"  id="fileInput" value="fileUrl" @change="getFileUrl"/>
        </Modal>
    </div>
</template>
<script>
    import marked from 'marked'
    import htmlpdf  from 'html-pdf'
    import {inputValue} from '../utils/util'
    import Button from "iview/src/components/button/button";
    import Input from "iview/src/components/input/input";
    import Modal from "iview/src/components/modal/modal";

    export default {
        components: {
            Modal,
            Input,
            Button
        },
        name: "edit",
        data() {
            return {
                input: inputValue,
                fileName: '',
                modal1: false,
                modal2:false,
                file:''
            }
        },
        computed: {
            preview: function () {
                let renderer = new marked.Renderer()
                marked.setOptions({
                    renderer: renderer,
                    gfm: true,
                    tables: true,
                    breaks: false,
                    pedantic: false,
                    sanitize: true,
                    smartLists: true,
                    smartypants: true,
                    highlight: function (code) {
                        return hljs.highlightAuto(code).value;
                    },
                });
                return marked(this.input)
            },
        },
        methods: {
            saveFile: function (type) {
                const self = this;
                var fs = require('fs');
                let _path = '../../moon' // 存储在项目文件夹的上两层文件中，后期加功能可以设置保存路径
                if (!fs.existsSync(_path)) {
                    fs.mkdirSync(_path);
                }
                let filename = '/' + document.getElementById('fileName').value + '.' + type,
                    data = '';
                if (type == 'html') {
                    let preHtml = '<!DOCTYPE html>\n' +
                        '<html>\n' +
                        '<head>\n' +
                        '    <meta charset="UTF-8">\n' +
                        '    <title></title>\n' +
                        '</head>\n' +
                        '<body>\n' +
                        '<div style="padding:10px;">'
                    let afterHtml = '</div>\n' +
                        '</body>\n' +
                        '</html>'
                    data = preHtml + this.preview + afterHtml;
                }
                if (type == 'md') {
                    data = this.value;
                }
                fs.writeFile(_path + filename, data, function (err) {
                    if (err) {
                        return console.log(err)
                        //如果没保存成功，则根据err信息给出不同提示
                    }
                    self.modal1 = false;
                    self.$Notice.success({
                        title: '消息提醒',
                        desc: '文件保存成功'
                    });
                })
            },
            getFileUrl:function () {
                this.file = document.getElementById('fileInput').files[0];
            },
            importFile: function () {
                let self = this;
                let fs = require('fs');
                let file = this.file;
                let filePath = file.path;
                let fileType = file.type;
                if(fileType == 'text/markdown'){
                    fs.readFile(filePath, 'UTF-8', function (err, data) {
                        if (err) {
                            console.log(err)
                        }
                        if (data) {
                            self.input = data;
                        }
                    })
                }
                else {
                    self.$Notice.error({
                        title: '文件导入提醒',
                        desc: '文件格式不正确,请重新选择文件'
                    });
                }
            },
            html2pdf: function () {
                let html = document.getElementsByClassName('preview')[0].innerHTML
                var options = { format: 'Letter' };
                htmlpdf.create(html,options).toFile('./businesscard.pdf',function (err,res) {
                    if (err) return console.log(err);
                    console.log(res);
                })
            },
        }
    }
</script>
<style scoped lang="less">
    .toolBar {
        margin-bottom: 10px;
    }

    .editor {
        .input {
            width: 50%;
            outline: none;
            resize: none;
            float: left;
            border: none;
            height: 600px;
            padding-left: 10px;
        }
        .preview {
            width: 50%;
            padding-left: 20px;
            float: right;
            height: 600px;
            overflow: auto;
            border-left: 1px #eee solid;
        }
    }

    .fileName {
        display: inline-block;
        width: 320px;
        font-size: 14px;
        padding-left: 10px;
    }

    @media (max-width: 768px) {
        .fileName {
            display: inline-block;
            width: 90%;
            font-size: 14px;
            padding-left: 10px;
        }
    }

    .saveButton {
        display: inline;
        width: 48%;
    }

</style>