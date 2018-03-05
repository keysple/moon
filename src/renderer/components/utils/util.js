/**
 * 作用于哪些页面
 * 注明代码业务/功能说明
 * @date 2018/2/7
 * @authors ChengLN(chenglingna@erayt.com)
 */

module.exports = {
    inputValue : '- hello *world*\n' +
        '\n' +
        '> 这是一段引用    //在`>`后面有 1 个空格\n' +
        '> \n' +
        '>     这是引用的代码块形式    //在`>`后面有 5 个空格\n' +
        '>     \n' +
        '> 代码例子：\n' +
        '>   \n' +
        '    protected void onCreate(Bundle savedInstanceState) {\n' +
        '        super.onCreate(savedInstanceState);\n' +
        '        setContentView(R.layout.activity_main);\n' +
        '    }\n' +
        '\n' +
        '> 一级引用\n' +
        '> > 二级引用\n' +
        '> > > 三级引用\n' +
        '\n' +
        '> #### 这是一个四级标题\n' +
        '> \n' +
        '>   1. 这是第一行列表项\n' +
        '>       2. 这是第二行列表项\n' +
        '\n' +
        '**加粗文本** 或者 __加粗文本__\n' +
        '~~删除文本~~\n' +
        '*斜体文本*  或者_斜体文本_\n' +
        '这是行内式链接：[ConnorLin\'s Blog](http://connorlin.github.io)。\n' +
        '\n' +
        '这是参考式链接：[ConnorLin\'s Blog][url]，其中url为链接标记，可置于文中任意位置。\n' +
        '\n' +
        '[url]: http://connorlin.github.io/ "ConnorLin\'s Blog"\n' +
        '\n' +
        '链接标记格式为：[链接标记文本]:  链接地址  链接title(可忽略)\n' +
        '\n' +
        '这是自动链接：直接使用`<>`括起来<http://connorlin.github.io>\n' +
        '\n' +
        '这是图片：![][avatar]\n' +
        '\n' +
        '[avatar]: https://connorlin.github.io/images/avatar.jpg'
}