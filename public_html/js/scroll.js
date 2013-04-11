/* 
 * 函数名：$HorizontalScroll(ScrollDirection, ScrollSpeed)
 * 中文理解：在水平方向上的滚动
 * 参数个数：2
 * 参数含义：ScrollDirection：水平上的两个方向，值为‘left’或者‘right’；
 *           ScrollSpeed：为整数，值越大滚动越慢，反之越快。
 *           
 * 程序员：Spy
 * E-mail：wjj474957860@gmail.com
 * Date ：2013-04-11
 */
function $HorizontalScroll(ScrollDirection, ScrollSpeed) {
    
    //通过Get()函数获得元素
    var begin = Get("begin");
    var end = Get("end");
    var container = Get("container");
    
    //将begin区域的内容复制到end区域中，为滚动图片做准备
    end.innerHTML = begin.innerHTML;        

    //函数Marquee()处理向左或向右滚动
    function Marquee() {                   
        //向左方向的滚动
        if (ScrollDirection === "left") {
            if (container.scrollLeft > begin.offsetWidth) {     
                container.scrollLeft = 0;                               
            }
            else {
                container.scrollLeft++;                                  
            }
        }
        //向右方向的滚动
        else if (ScrollDirection === "right") {
            if (container.scrollLeft <= 0) {
                container.scrollLeft += end.offsetWidth;
            }
            else {
                container.scrollLeft--;
            }
        }
        //提示
        else {
            alert("please input 'left' or 'right'");
        }
    }

    //一开始就为滚动状态
    var scroll = setInterval(Marquee, ScrollSpeed);
    //当鼠标不在图片区域时，就调用滚动函数scroll
    container.onmouseout = function() {
        scroll = setInterval(Marquee, ScrollSpeed);
    };
    //当鼠标在图片区域时，就调用函数clearInterval停止滚动
    container.onmouseover = function() {
        clearInterval(scroll);
    };
}
